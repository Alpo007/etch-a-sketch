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
    console.log(color);
});

yellow.addEventListener('click' , function(e){
    color = 'yellow';
});

blue.addEventListener('click' , function(e){
    color = 'blue';
});

red.addEventListener('click' , function(e){
    color = 'red';
});

black.addEventListener('click' , function(e){
    color = 'black';
});

eraser.addEventListener('click' , function(e){
    color = 'eraser';
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
            box.style.cssText = 'background: yellow'
        } else if (color === 'blue' && isMouseDown == true){
            box.style.cssText = 'background: blue'
        } else if (color === 'red' && isMouseDown == true){
            box.style.cssText = 'background: red'
        } else if (color === 'black' && isMouseDown == true){
            box.style.cssText = 'background: black'
        } else if (color === 'eraser' && isMouseDown == true){
            box.style.cssText = 'background: white'
        }
    });
});



