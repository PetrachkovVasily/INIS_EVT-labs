const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasNext = document.getElementById("myCanvasNext");
const ctxNext = canvasNext.getContext("2d");

console.log(canvasNext);

canvas.addEventListener('mousedown',startDraw);

function startDraw(event) {
    let startX = event.clientX;
    let startY = event.clientY;

    let startXN = startX;
    let startYN = startY;

    let selected = document.querySelector('input[name="choose"]:checked').id;

    let radius = 0;
    let startWidth = 0;
    let startHeigth = 0;

    if (selected == 'circle') {
        ctx.beginPath();
        ctx.arc(event.clientX - 8, event.clientY - 8, radius, 0, 2*Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();

        canvas.addEventListener('mousemove',continueDraw);
        canvas.addEventListener('mouseup',stopDraw);

        function continueDraw(event) {
            let finX = event.pageX - 8;
            let finY = event.pageY - 8;
            radius = Math.sqrt((startX - event.clientX) * (startX - event.clientX) + (startY - event.clientY) * (startY - event.clientY));
            console.log("32");
            ctx.clearRect(0, 0, 1518, 650);
            ctx.beginPath();
            ctx.arc(startX-8, startY-8, radius, 0, 2*Math.PI, false);
            ctx.fill();
            
        }

        function stopDraw(event) {
            canvas.removeEventListener('mousemove',continueDraw);
            canvas.removeEventListener('mouseup',stopDraw);
            let finX = event.pageX - 8;
            let finY = event.pageY - 8;
            radius = Math.sqrt((startX - event.clientX) * (startX - event.clientX) + (startY - event.clientY) * (startY - event.clientY));
            console.log(radius);
            console.log(startX);
            console.log(startY);
            ctx.clearRect(0, 0, 1518, 650);
            ctxNext.beginPath();
            ctxNext.arc(startX-8, startY-8, radius, 0, 2*Math.PI);
            ctxNext.fill();
        }

    } else {
        ctx.fillStyle = "rgb(0, 0, 255)";
        ctx.beginPath();
        ctx.fillRect(event.clientX - 8, event.clientY - 8, startWidth, startHeigth);
        //ctx.arc(event.clientX - 8, event.clientY - 8, radius, 0, 2*Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();

        canvas.addEventListener('mousemove',continueDraw);
        canvas.addEventListener('mouseup',stopDraw);

        function continueDraw(event) {
            let finX = event.pageX - 8;
            let finY = event.pageY - 8;
            radius = Math.sqrt((startX - event.clientX) * (startX - event.clientX) + (startY - event.clientY) * (startY - event.clientY));
            startWidth = Math.abs(startXN - finX - 8);
            startHeigth = Math.abs(startYN - finY - 8);
            ctx.clearRect(0, 0, 1518, 650);
            ctx.beginPath();
            ctx.fillRect(startXN - 8, startYN - 8, startWidth, startHeigth);
            //ctx.arc(startX-8, startY-8, radius, 0, 2*Math.PI, false);
            ctx.fill();
            
        }

        function stopDraw(event) {
            canvas.removeEventListener('mousemove',continueDraw);
            canvas.removeEventListener('mouseup',stopDraw);
            let finX = event.pageX - 8;
            let finY = event.pageY - 8;
            startWidth = Math.abs(startX - finX - 8);
            startHeigth = Math.abs(startY - finY - 8);
            ctx.clearRect(0, 0, 1518, 650);
            ctxNext.beginPath();
            ctxNext.fillRect(startX - 8, startY - 8, startWidth, startHeigth);
            //ctxNext.arc(startX-8, startY-8, radius, 0, 2*Math.PI);
            ctxNext.fill();
        }
    }
    
    
}