const container = document.querySelector('.container');

for (let i = 0+1; i <= 16; i++){
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('containerDiv'+ i);
    container.appendChild(containerDiv);
}
