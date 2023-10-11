sveeeg.addEventListener('mousedown', startDraw);



function startDraw(event) {
    let startX = event.clientX;
    let startY = event.clientY;

    let x = event.clientX - 8;
    let y = event.clientY - 8;
    let selected = document.querySelector('input[name="choose"]:checked').id;

    let radius = 0;
    let startWidth = 0;
    let startHeigth = 0;

    if (selected == 'circle') {
        sveeeg.innerHTML = sveeeg.innerHTML + `<circle cx="${x}" cy="${y}" r="${radius}" stroke-width="0" fill="red" />`;
        let currentTarget = sveeeg.lastElementChild;

        sveeeg.addEventListener('mousemove', continueDraw);
        sveeeg.addEventListener('mouseup', stopDraw);

        function continueDraw(event) {
            radius = Math.sqrt((startX - event.clientX) * (startX - event.clientX) + (startY - event.clientY) * (startY - event.clientY));
            currentTarget.setAttribute("r", radius); // снести таргет
        }
        function stopDraw(event) {
            sveeeg.removeEventListener('mousemove', continueDraw)
            sveeeg.removeEventListener('mouseup', stopDraw)
        }
    } else {
        sveeeg.innerHTML = sveeeg.innerHTML + `<rect x="${x}" y="${y}" width="${startWidth - x}" height="${startHeigth - y}" style="fill:blue;" />`;
        let currentTarget = sveeeg.lastElementChild;

        sveeeg.addEventListener('mousemove', continueDraw);
        sveeeg.addEventListener('mouseup', stopDraw);

        function continueDraw(event) {
            x = event.clientX - 8;
            y = event.clientY - 8;
            currentTarget.setAttribute("width", startWidth);
            currentTarget.setAttribute("height", startHeigth);
            if (x < startX) currentTarget.setAttribute('x', x);
            else currentTarget.setAttribute('x', startX);

            if (y < startY) currentTarget.setAttribute('y', y);
            else currentTarget.setAttribute('y', startY);
            startWidth = Math.abs(startX - x);
            startHeigth = Math.abs(startY - y);

            
        }
        function stopDraw(event) {
            sveeeg.removeEventListener('mousemove', continueDraw)
            sveeeg.removeEventListener('mouseup', stopDraw)
        }
    }
}

