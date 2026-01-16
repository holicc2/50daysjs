const background = document.getElementById('background')
const passwordEl = document.getElementById('password')


passwordEl.addEventListener('input', () => {
  const len = passwordEl.value.length;
  const blur = Math.max(20 - len * 2, 0);
  background.style.filter = `blur(${blur}px)`;
});

