function preloadAssets(scene) {
  /* Cenário */
  scene.load.image("fundo", "./assets/fundo.png");
  scene.load.image("plataforma", "./assets/plataforma.png");

  /* Player */
  scene.load.spritesheet("player", "./assets/player.png", {
    frameWidth: 32,
    frameHeight: 48,
  });

  /* Coletável */
  scene.load.image("star", "./assets/star.png");

  /* Inimigo */
  scene.load.image("bomb", "./assets/bomb.png");

  /* Effects */
  scene.load.spritesheet("dash", "./assets/dash.png", {
    frameWidth: 73,
    frameHeight: 40,
  });
}
