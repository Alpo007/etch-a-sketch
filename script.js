let color;
const container = document.querySelector('.container');
const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');
const blue = document.querySelector('#blue');
const red = document.querySelector('#red');
const black = document.querySelector('#black');
const eraser = document.querySelector('#eraser');

for (let i = 0+1; i <= 16; i++){
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('containerDiv');
    containerDiv.classList.add('a'+i)
    container.appendChild(containerDiv);

    for (let a = 0+1; a <= 16; a++){
        const divDraw = document.createElement('div');
        divDraw.classList.add('divDraw');
        divDraw.classList.add('a'+a);
        containerDiv.appendChild(divDraw);
}   
}

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

eraser.addEventListener('click' , function(e){
    color = 'eraser';
    yellow.textContent = '';
    blue.textContent = '';
    red.textContent = '';
    black.textContent = '';
    eraser.textContent = 'Eraser Selected';
    green.textContent = '';
});

const drawingDivs = document.querySelectorAll('.divDraw');
let isMouseDown = false;

document.addEventListener('mousedown', () => isMouseDown = true);
document.addEventListener('mouseup', () => isMouseDown = false);

drawingDivs.forEach((box) => {
    box.addEventListener('mouseover', () => {
        if (color === 'green' && isMouseDown == true){
            box.style.cssText = 'background: green';
        } else if (color === 'yellow' && isMouseDown == true){
            box.style.cssText = 'background: yellow';
        } else if (color === 'blue' && isMouseDown == true){
            box.style.cssText = 'background: blue';
        } else if (color === 'red' && isMouseDown == true){
            box.style.cssText = 'background: red';
        } else if (color === 'black' && isMouseDown == true){
            box.style.cssText = 'background: black';
        } else if (color === 'eraser' && isMouseDown == true){
            box.style.cssText = '';
        }
    });
});



