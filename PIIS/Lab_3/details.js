index = localStorage.getItem('currentIndex');

var colorskeys = Object.keys(shirts[index].colors);
var sidekeys = Object.keys(shirts[index].colors[colorskeys[0]]);  
let div = document.createElement('div');
div.innerHTML = `<h1 class="name">${shirts[index].name}</h1>
<img src=${shirts[index].colors[colorskeys[0]][sidekeys[0]]} alt='There is no image here'>
<h3>${shirts[index].price}</h3>
<p>price</p>
<div>
<button class="frontBtn">front</button>
<button class="backBtn">back</button>
</div>`;
let currentColor = shirts[index].colors.white;
document.body.append(div);
for (let color in shirts[index].colors) {
    //alert("Ключ: " + color + " значение: " + shirts[index].colors[color].front)
    let colorBtn = document.createElement('button');
    colorBtn.innerHTML = `${color}`;
    div.append(colorBtn);
    colorBtn.addEventListener('click', setColor);
    function setColor() {
        document.querySelector('img').src = shirts[index].colors[color].front;
        currentColor = shirts[index].colors[color];
    }
}
document.querySelector('.frontBtn').addEventListener('click', setFSide);
document.querySelector('.backBtn').addEventListener('click', setBSide);

function setFSide() {
    document.querySelector('img').src = currentColor.front;
}
function setBSide() {
    document.querySelector('img').src = currentColor.back;
}
