const container = document.querySelector('.container');

for (let i = 0+1; i <= 16; i++){
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('containerDiv');
    containerDiv.classList.add(i)
    container.appendChild(containerDiv);

    for (let a = 0+1; a <= 16; a++){
        const divDraw = document.createElement('div');
        divDraw.classList.add('divDraw');
        divDraw.classList.add(a);
        containerDiv.appendChild(divDraw);
}   
}

/**
for (let i = 0+1; i <= 16; i++){
    const divDraw = document.createElement('div');
    divDraw.classList.add('divDraw');
    const selectContainerDiv = document.querySelector('.containerDiv'+i);   
    selectContainerDiv.appendChild(divDraw);
} **/
