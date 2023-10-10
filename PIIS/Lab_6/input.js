document.querySelectorAll('.target').forEach(div => {
    div.addEventListener('touchstart', moveElement);
    
})


function moveElement(event) {
    let leftP = event.target.style.left;
    let topP = event.target.style.top;
    let selected = event.target;
    event.target.style.position = 'absolute';    
    
    moveAt(event.touches[0].pageX, event.touches[0].pageY);

    function moveAt(pageX, pageY) {
        selected.style.left = pageX - selected.offsetWidth / 2 + 'px';
        selected.style.top = pageY - selected.offsetHeight / 2 + 'px';
        if (event.targetTouches.length == 2) {
            alert('sj')
            document.removeEventListener('touchmove', onFingerMove);
            selected.style.left = leftP;
            selected.style.top = topP;
            selected.style.backgroundColor = 'red';
        }
    }

    function onFingerMove(event) {
        moveAt(event.touches[0].pageX, event.touches[0].pageY);
    }

    document.addEventListener('touchmove', onFingerMove);

    //document.addEventListener("keydown", moveEsc);

    // function moveEsc(event) {
    //     if (event.code == "Escape") {
    //             console.log(leftP, topP)
    //             
    //             document.removeEventListener('keydown', moveEsc)
    //         }
    // }

    event.target.touchend = function() {
        document.removeEventListener('touchmove', onFingerMove);
        event.target.touchend = null;
    };

};


