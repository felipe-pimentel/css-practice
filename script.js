const randomBorderRadius = () => {
  const pairs = [];
  for (let index = 1; index <= 4; index++) {
    const pair = [];
    pair[0] = Math.floor(Math.random() * (66 - 35) + 35);
    pair[1] = 100 - pair[0];
    pairs.push(pair);
  }
 return `${pairs[0][0]}% ${pairs[0][1]}% ${pairs[1][0]}% ${pairs[1][1]}% / ${pairs[2][0]}% ${pairs[3][0]}% ${pairs[3][1]}% ${pairs[2][1]}%`
}

const randomGradient = () => {
  const gradientNumber = Math.floor(Math.random() * 8);
  return `var(--gradient-${gradientNumber})`;
}

const linkCards = document.querySelectorAll('a');
console.log(linkCards);
linkCards.forEach((link) => {
  link.style.borderRadius = randomBorderRadius();
  link.style.backgroundImage = randomGradient();
});
