const container = document.querySelector('.container');

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
