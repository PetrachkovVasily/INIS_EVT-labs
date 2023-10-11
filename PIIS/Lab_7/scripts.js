sveeeg.addEventListener('mousedown',startDraw);



function startDraw(event) {
    let startX = event.clientX;
    let startY = event.clientY;

    let selected = document.querySelector('input[name="choose"]:checked').id;

    let radius = 0;
    let startWidth = 0;
    let startHeigth = 0;
    
    if (selected == 'circle') {
        sveeeg.innerHTML = sveeeg.innerHTML + `<circle cx="${event.clientX - 8}" cy="${event.clientY - 8}" r="${radius}" stroke-width="0" fill="red" />`;
        let currentTarget = sveeeg.lastElementChild;

        sveeeg.addEventListener('mousemove',continueDraw);
        sveeeg.addEventListener('mouseup',stopDraw);

        function continueDraw(event) {
            radius = Math.sqrt((startX - event.clientX)*(startX - event.clientX) + (startY - event.clientY)*(startY - event.clientY));
            currentTarget.setAttribute("r", radius); // снести таргет
        }
        function stopDraw(event) {
            sveeeg.removeEventListener('mousemove',continueDraw)
            sveeeg.removeEventListener('mouseup',stopDraw)
        }
    } else {
        sveeeg.innerHTML = sveeeg.innerHTML + `<rect x="${event.clientX - 8}" y="${event.clientY - 8}" width="${startWidth}" height="${startHeigth}" style="fill:blue;" />`;
        let currentTarget = sveeeg.lastElementChild;

        sveeeg.addEventListener('mousemove',continueDraw);
        sveeeg.addEventListener('mouseup',stopDraw);

        function continueDraw(event) {
            radius = Math.sqrt((startX - event.clientX)*(startX - event.clientX) + (startY - event.clientY)*(startY - event.clientY));
            startWidth = Math.abs(startX - event.clientX);
            startHeigth = Math.abs(startY - event.clientY);

            currentTarget.setAttribute("width", startWidth);
            currentTarget.setAttribute("height", startHeigth);
        }
        function stopDraw(event) {
            sveeeg.removeEventListener('mousemove',continueDraw)
            sveeeg.removeEventListener('mouseup',stopDraw)
        }
    }
}

