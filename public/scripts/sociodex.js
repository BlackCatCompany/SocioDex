let heartLiked = false;

const heartAnimation = lottie.loadAnimation({
  container: document.getElementById('heart-animation'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'caminho/para/seu/arquivo.json' // Adicione o caminho do JSON da animação
});

document.getElementById('heart-animation').addEventListener('click', () => {
  heartLiked = !heartLiked;
  if (heartLiked) {
    heartAnimation.play(); // Toca a animação
  } else {
    heartAnimation.stop(); // Reseta a animação
  }
});
