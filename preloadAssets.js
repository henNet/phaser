function preloadAssets(scene) {
  /* Cenário */
  scene.load.image("fundo", "./assets/fundo1.png");
  scene.load.image("plataforma", "./assets/plataforma1.png");

  /* Player */
  scene.load.spritesheet("player", "./assets/player1.png", {
    frameWidth: 82,
    frameHeight: 80,
  });

  /* Coletável */
  scene.load.image("star", "./assets/coin.png");

  /* Inimigo */
  scene.load.image("bomb", "./assets/bb.png");

  /* Effects */
  scene.load.spritesheet("dash", "./assets/dash.png", {
    frameWidth: 73,
    frameHeight: 40,
  });
}
