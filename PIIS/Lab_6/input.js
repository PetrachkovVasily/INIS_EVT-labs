document.querySelectorAll('.target').forEach(div => {
    div.addEventListener('touchstart', moveElement);
    div.addEventListener('touchend', moveDoubleElement);
})

function moveElement(event) {
    let leftP = event.target.style.left;
    let topP = event.target.style.top;
    let selected = event.target;
    selected.style.position = 'absolute'; 

    document.addEventListener('touchmove', moveAt);
    document.addEventListener('touchend', stopMoving);
    document.addEventListener('touchstart', twoTouches);

    function moveAt(event) {
        selected.removeEventListener('touchend', moveDoubleElement);
        selected.style.left = event.touches[0].pageX - selected.offsetWidth / 2 + 'px';
        selected.style.top = event.touches[0].pageY - selected.offsetHeight / 2 + 'px';
    }

    function stopMoving(event) {
        leftP = selected.style.left;
        topP = selected.style.top;
        document.removeEventListener('touchmove', moveAt);
        document.removeEventListener('touchend', stopMoving);
        document.removeEventListener('touchstart', twoTouches);
        selected.addEventListener('touchend', moveDoubleElement);
    }

    function twoTouches(event) {
        if (event.touches.length > 1){
            selected.style.left = leftP
            selected.style.top = topP;
            stopMoving(event);
        }
    }
}

let firstTime = undefined;
let endTime = undefined;

function moveDoubleElement(event) {
    let currentTime = new Date().getTime();
    if (firstTime == undefined || currentTime - firstTime > 500) {
        firstTime = currentTime;
        return;
    }

    let leftP = event.target.style.left;
    let topP = event.target.style.top;
    let selected = event.target;
    selected.style.position = 'absolute';
    selected.style.backgroundColor = 'blue';

    document.addEventListener('touchstart', moveAtD);
    document.addEventListener('touchstart', twoTouches)
    document.addEventListener('touchend', endTimer);

    function stopMoving(event) {
        leftP = selected.style.left;
        topP = selected.style.top;
        document.removeEventListener('touchstart', moveAtD);
        document.removeEventListener('touchstart', twoTouches);
        selected.addEventListener('touchend', moveDoubleElement);
    }

    function twoTouches(event) {
        if (event.touches.length > 1){
            selected.style.left = leftP
            selected.style.top = topP;
            stopMoving(event);
        }
    }

    function endTimer (event) {
            endTime = new Date().getTime();
            console.log(endTime)
            document.removeEventListener('touchend', endTimer)
        }

    function moveAtD(event) {
        let startTime = new Date().getTime();
        
        selected.style.left = event.touches[0].pageX - selected.offsetWidth / 2 + 'px';
        selected.style.top = event.touches[0].pageY - selected.offsetHeight / 2 + 'px';
        
        //leftP = selected.style.left;
        //topP = selected.style.top;

        if (endTime - startTime > 200) {
            console.log('aaa')
            return;
        }
        console.log('bbb')
        document.removeEventListener('touchstart', moveAtD);
        //document.removeEventListener('touchend', stopMoving);
        //document.removeEventListener('touchstart', twoTouches);
        selected.addEventListener('touchend', moveDoubleElement);
        selected.style.backgroundColor = 'red';

        
    }
}