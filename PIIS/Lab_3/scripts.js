shirts.map(function(item, index, array) {
    let keyCount = Object.keys(item.colors).length;
    let div = document.createElement('div');
    let colorskeys = Object.keys(item.colors);

    let sidekeys = Object.keys(item.colors[colorskeys[0]]);  
    div.className = "shirt_card";
    div.innerHTML = `<div>
    <img src=${item.colors[colorskeys[0]][sidekeys[0]]} alt='There is no image here'>
    <h3 class="name">${item.name}</h3><p>Available in ${keyCount} colors</p><div>
    <button class="quickBtn">Quick View</button>
    <button class="seeBtn">See Page</button>
    </div>
    </div>`;
    document.body.append(div);    
    div.getElementsByClassName('quickBtn')[0].addEventListener("click", showQuickView);
    function showQuickView() {
        document.getElementById('quickview').hidden=false;
        let d_price = document.createElement('h3');
        document.getElementById('description').innerHTML='';
        d_price.innerHTML += `<img src=${item.colors.white.front} alt="there is no img" height="100" width="100">
        <h3>${item.price}</h3>
        <p>${item.description}</p>`;
        document.getElementById('description').prepend(d_price);
    }
});
let currentShirt;

document.querySelectorAll('.seeBtn').forEach(btn=>
    {
        btn.addEventListener("click", seeFunction)
    })

function seeFunction(event) {
    
    let shirtName = event.target.parentNode.previousSibling.previousSibling.innerHTML;
    shirts.forEach(function (item, index, array) {
        if (item.name == shirtName){
            currentShirt = index;
            location.href = "details.html";
            localStorage.setItem('currentIndex', currentShirt);
            return;
        }
    });
    console.log(shirts[currentShirt].name)
}

function closeQuickView() {
    
    document.getElementById('quickview').hidden=true;
}