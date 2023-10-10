document.querySelectorAll('.target').forEach(div => {
    div.addEventListener('touchstart', moveElement);
    
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
        console.log('sdfhj')
        selected.style.left = event.touches[0].pageX - selected.offsetWidth / 2 + 'px';
        selected.style.top = event.touches[0].pageY - selected.offsetHeight / 2 + 'px';
    }

    function stopMoving(event) {
        leftP = selected.style.left;
        topP = selected.style.top;
        document.removeEventListener('touchmove', moveAt);
        document.removeEventListener('touchend', stopMoving);
    }

    function twoTouches(event) {
        if (event.touches.length > 1){
            stopMoving(event);
        }
    }
}