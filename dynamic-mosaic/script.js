const randomSpan = () => {
  const span = Math.pow(2, Math.floor((Math.random() * 3)));
  return `span ${span}`;
};

const randomClipPath = () => {
  const positions = [[0, 0], [0, 100], [100, 0], [100, 100]]
    .sort(() => Math.random() - 0.5)
    .slice(0, (Math.floor(Math.random() * 2) + 3));
  let spreadPositions = [];
  positions.forEach((position) => {
    spreadPositions = [...spreadPositions, ...position];
  });
  const clipPath = spreadPositions
    .reduce((acc, curr, index, array) => {
      if (index === array.length - 1) return acc + curr + '%)'
      return (index % 2) === 0 ? acc + curr + '% ' : acc + curr + '%, '
    }, 'polygon(')
  return clipPath;
};

const randomColor = () => {
  const colors = [
    // '#017FB1',
    '#D45906',
    '#4199A7',
    '#070A0F',
    '#4F73A7',
    '#969893',
    '#D2BF01',
  ]
  return colors[Math.floor(Math.random() * colors.length)]
};

const randomOpacity = () => {
  return `${(Math.floor(Math.random() * 51) + 50) / 100}`;
};

const newTile = () => {}

for (let elem = 1; elem <= 80; elem++) {
  const mosaic = document.querySelector('.mosaic1');
  const tile = document.createElement('div');
  tile.style.backgroundColor = randomColor();
  tile.style.gridColumn = randomSpan();
  tile.style.gridRow = randomSpan();
  tile.style.clipPath = randomClipPath();
  tile.style.opacity = randomOpacity();
  mosaic.appendChild(tile);
}

for (let elem = 1; elem <= 80; elem++) {
  const mosaic = document.querySelector('.mosaic2');
  const tile = document.createElement('div');
  tile.style.backgroundColor = randomColor();
  tile.style.gridColumn = randomSpan();
  tile.style.gridRow = randomSpan();
  tile.style.clipPath = randomClipPath();
  tile.style.opacity = randomOpacity();
  mosaic.appendChild(tile);
}
