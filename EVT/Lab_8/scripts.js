let options = [
    {optionName: 'display', styles: ['grid', 'inline-grid']},
    {optionName: 'gridTemplateColumns', styles: ['100px 50px 100px', '50px 1fr 50px', 'repeat(3, 80px)']},
    {optionName: 'gridTemplateRows', styles: ['80px 50px 80px', '50px 1fr 50px', 'repeat(3, 60px)']},
]
let numbersAmount = 9

let additionalTask = document.body.querySelector(".additionalTask")
createStructure(additionalTask, options)

let numbers = document.body.getElementsByClassName("numbers")
let buttons = document.body.getElementsByClassName("buttons")

addNumbers(numbers, numbersAmount)
addButtons(options, buttons, numbers)

function createStructure(additionalTask, options) {
    for (const option of options) {
        additionalTask.innerHTML += 
        `<h2>${option.optionName}</h2>
        <div class="buttons">
            
        </div>
        <div class="elements">
            <div class="numbers">
                
            </div>
        </div>`
    }

    let elements = document.body.querySelector(".elements")
    let h3 = document.createElement('h3')
    h3.textContent = "Text"
    h3.style.display = "inline-block"
    elements.prepend(h3)
}

function addNumbers(numbers, numbersAmount) {
    for (const number of numbers) {
        for(let i = 0; i < numbersAmount; i++) {
            number.innerHTML += `<div class="num">${i+1}</div>`
        }
    }   
}

function addButtons(options, buttons, numbers) {
    for (const buttonOptions of buttons) {
        let position = Array.from(buttons).indexOf(buttonOptions)
        options[position].styles.map(style => {
            let button = document.createElement('button')
            button.textContent = style
            addListener(button, style, numbers, position, options)
            buttonOptions.append(button)
        })
    }
}

function addListener(button, style, numbers, position, options) {
    button.addEventListener('click', () => {
        numbers[position].style[options[position].optionName] = style
    })
}