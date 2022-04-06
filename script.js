const grid = document.querySelector('.grid');
createDivs(16);

const clear = document.querySelector('.clear');
clear.addEventListener('click', reset);

function createDivs(gridSize) {
  const divAmount = gridSize * gridSize;
  const divSize = 480 / gridSize;
  let div;

  for (let i = 0; i < divAmount; i++) {
    div = document.createElement('div');
    div.classList.add('gridDiv');
    div.style.height = `${divSize}px`;
    div.style.width = `${divSize}px`;
    div.addEventListener('mouseover', changeColor, { once: true });
    grid.appendChild(div);
  }
}

function changeColor() {
  this.classList.add('blackColor');
}

function reset() {
  let gridSize;
  
  do {
    gridSize = +prompt('How many squares per side? (Maximum: 100)') || 16;
    console.log(gridSize);
  } while (!Number.isInteger(gridSize) || gridSize > 100 || gridSize < 1);

  while (grid.lastChild) {
    grid.removeChild(grid.lastChild);
  }

  createDivs(gridSize);
}