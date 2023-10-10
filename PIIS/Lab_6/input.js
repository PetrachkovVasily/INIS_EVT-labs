let selectedTouch;
let color = document.querySelector(".target").style.background;

let startLeft;
let startTop;

document.querySelectorAll(".target").forEach((block) =>
{
    block.addEventListener("touchstart", (event) =>
    {
        console.log(event);

        selectedTouch = event.target;

        startLeft = selectedTouch.style.left;
        startTop = selectedTouch.style.top;

        document.addEventListener("touchmove", moveAtTouch);

        document.addEventListener("touchend", stopMoving);

        document.addEventListener("touchstart", checkTwoTouches);
    });

    block.addEventListener("touchend", checkDoubleTap);
});

function moveAtTouch(event) 
{   
    selectedTouch.removeEventListener("touchend", checkDoubleTap);
    selectedTouch.style.left = event.touches[0].pageX - selectedTouch.offsetWidth / 2 + 'px';
    selectedTouch.style.top = event.touches[0].pageY - selectedTouch.offsetHeight / 2 + 'px';
}

function stopMoving(event)
{
    document.removeEventListener("touchmove", moveAtTouch);

    startLeft = selectedTouch.style.left;
    startTop = selectedTouch.style.top;

    document.removeEventListener("touchend", stopMoving);
    document.removeEventListener("touchstart", checkTwoTouches);
    selectedTouch.addEventListener("touchend", checkDoubleTap);
}

let firstTapTime = undefined;
let doubleTapMaxDelta = 500;
let followCancelationTime = 200;

function checkDoubleTap(event)
{
    let currTapTime = new Date().getTime();

    if(firstTapTime == undefined || currTapTime - firstTapTime > doubleTapMaxDelta)
    {
        firstTapTime = currTapTime;
        return;
    }

    selectedTouch = event.target;
    selectedTouch.style.background = "blue";
    startLeft = selectedTouch.style.left;
    startTop = selectedTouch.style.top;

    selectedTouch.removeEventListener("touchend", checkDoubleTap);
    document.addEventListener("touchstart", checkFollowCancelation);
}

function checkFollowCancelation(event)
{
    document.removeEventListener("touchstart", checkFollowCancelation);
    let tapStartTime = new Date().getTime();
    let tapStartX = event.changedTouches[0].pageX;
    let tapStartY = event.changedTouches[0].pageY;

    document.addEventListener("touchmove", moveAtTouch);
    document.addEventListener("touchend", cancelFollow);

    function cancelFollow(evt)
    {
        document.removeEventListener("touchend", cancelFollow);

        if(new Date().getTime() - tapStartTime <= followCancelationTime 
            && evt.changedTouches[0].pageX == tapStartX
            && evt.changedTouches[0].pageY == tapStartY
        )
        {
            document.removeEventListener("touchmove", moveAtTouch);
            selectedTouch.style.background = color;
            selectedTouch.addEventListener("touchend", checkDoubleTap);
        }
        else
        {
            selectedTouch.style.left = evt.changedTouches[0].pageX - selectedTouch.offsetWidth / 2 + 'px';
            selectedTouch.style.top = evt.changedTouches[0].pageY - selectedTouch.offsetHeight / 2 + 'px';
            
            document.addEventListener("touchstart", checkFollowCancelation);
        } 
    }
}

function checkTwoTouches(event)
{
    if(event.touches.length === 2)
    {
        selectedTouch.style.left = startLeft;
        selectedTouch.style.top = startTop;

        document.removeEventListener("touchmove", moveAtTouch);
        document.removeEventListener("touchend", stopMoving);
        selectedTouch.addEventListener("touchend", checkDoubleTap);

        document.removeEventListener("touchstart", checkTwoTouches);


    }
}

