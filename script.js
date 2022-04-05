function createDivs(gridSize) {
  const grid = document.querySelector('.grid');
  const divAmount = gridSize * gridSize;
  const divSize = 480 / gridSize;
  let div;

  for (let i = 0; i < divAmount; i++) {
    div = document.createElement('div');
    div.classList.add('gridDiv');
    div.style.height = `${divSize}px`;
    div.style.width = `${divSize}px`;
    grid.appendChild(div);
  }
}