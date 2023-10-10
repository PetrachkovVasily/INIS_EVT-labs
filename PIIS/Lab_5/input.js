document.querySelectorAll('.target').forEach(div => {
    div.addEventListener('dblclick', moveElement);
    div.addEventListener('mousedown', moveElement);
    
})


function moveElement(event) {
    let leftP = event.target.style.left;
    let topP = event.target.style.top;
    let selected = event.target;
    
    const shiftX = event.clientX - event.target.getBoundingClientRect().left;
    const shiftY = event.clientY - event.target.getBoundingClientRect().top;

    event.target.style.position = 'absolute';    
    
    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        event.target.style.left = pageX - shiftX + 'px';
        event.target.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener("keydown", moveEsc);

    function moveEsc(event) {
        if (event.code == "Escape") {
                console.log(leftP, topP)
                
                selected.style.left = leftP;
                selected.style.top = topP;
                selected.style.backgroundColor = 'red';
                document.removeEventListener("keydown", moveEsc);
                document.removeEventListener('mousemove', onMouseMove);
            }
    }

    console.log("Here");
    
    if (event.type == 'dblclick'){
        event.target.style.backgroundColor = 'blue';
        event.target.onclick = function() {
            document.removeEventListener('mousemove', onMouseMove);
            event.target.onclick = null;
            event.target.onmouseup = null;
            event.target.style.backgroundColor = 'red';
        };
    }
    else  {
        event.target.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener("keydown", moveEsc);
        event.target.onmouseup = null;
        
    };
    }

};


