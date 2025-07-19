let color;
let size = 672;
let newSize;
const container = document.querySelector('.container');
const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const red = document.querySelector('#red');
const black = document.querySelector('#black');
const eraser = document.querySelector('#eraser');
const rainbow = document.querySelector('#rainbow');
const gridSize = document.querySelector('#gridSize');
const drawingDivs = document.querySelectorAll('.divDraw');

for (let i = 0+1; i <= 16; i++){
        const containerDiv = document.createElement('div');
        containerDiv.classList.add('containerDiv');
        container.appendChild(containerDiv);

        for (let a = 0+1; a <= 16; a++){
            const divDraw = document.createElement('div');
            divDraw.classList.add('divDraw');
            containerDiv.appendChild(divDraw);
    }   
    addDrawingListeners()
}

gridSize.addEventListener('click', function(e){
    let humanChoice = prompt('How many Squares do you want per Side?', 16);
    let humanChoiceNumber = Number(humanChoice)
    createGrid(humanChoiceNumber);
});


green.addEventListener('click' , function(){
    color = 'green';
    yellow.textContent = '';
    blue.textContent = '';
    red.textContent = '';
    black.textContent = '';
    eraser.textContent = 'Eraser';
    green.textContent = 'Selected';
});

yellow.addEventListener('click' , function(e){
    color = 'yellow';
    yellow.textContent = 'Selected';
    blue.textContent = '';
    red.textContent = '';
    black.textContent = '';
    eraser.textContent = 'Eraser';
    green.textContent = '';
});

blue.addEventListener('click' , function(e){
    color = 'blue';
    yellow.textContent = '';
    blue.textContent = 'Selected';
    red.textContent = '';
    black.textContent = '';
    eraser.textContent = 'Eraser';
    green.textContent = '';
});

red.addEventListener('click' , function(e){
    color = 'red';
    yellow.textContent = '';
    blue.textContent = '';
    red.textContent = 'Selected';
    black.textContent = '';
    eraser.textContent = 'Eraser';
    green.textContent = '';
});

black.addEventListener('click' , function(e){
    color = 'black';
    yellow.textContent = '';
    blue.textContent = '';
    red.textContent = '';
    black.textContent = 'Selected';
    eraser.textContent = 'Eraser';
    green.textContent = '';
});

let r;
let b;
let g;
let randomBetween;

rainbow.addEventListener('click', function(e){
    color = 'rainbow';

    yellow.textContent = '';
    blue.textContent = '';
    red.textContent = '';
    black.textContent = '';
    eraser.textContent = 'Eraser';
    green.textContent = '';
});

eraser.addEventListener('click' , function(e){
    color = 'eraser';
    yellow.textContent = '';
    blue.textContent = '';
    red.textContent = '';
    black.textContent = '';
    eraser.textContent = 'Eraser Selected';
    green.textContent = '';
});

let isMouseDown = false;

document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

function createGrid(gridChoice){
    if(gridChoice <= 100){
        container.textContent = ' ';
        newSize = size/gridChoice;
        for (let i = 0+1; i <= gridChoice; i++){
            const containerDiv = document.createElement('div');
            containerDiv.classList.add('containerDiv');
            container.appendChild(containerDiv);

            for (let a = 0+1; a <= gridChoice; a++){
                const divDraw = document.createElement('div');
                divDraw.classList.add('divDraw');
                containerDiv.appendChild(divDraw).setAttribute('style','width: ' + newSize + 'px; height:' +newSize+ 'px;');
        }   
        addDrawingListeners()
        }
    }else{
        alert('Invalid Number, please choose something below 100');
    }

}


function addDrawingListeners() {
    const drawingDivs = document.querySelectorAll('.divDraw');
    drawingDivs.forEach((box) => {
        box.addEventListener('mouseover', () => {
            if (isMouseDown) {
                if (color === 'eraser') {
                    box.style.background = '';
                } else if (color === 'rainbow') {
                    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
                    const r = randomBetween(0, 255);
                    const g = randomBetween(0, 255);
                    const b = randomBetween(0, 255);
                    box.style.background = `rgb(${r},${g},${b})`;
                } else {
                    box.style.background = color;
                }
            }
        });
    });
}



