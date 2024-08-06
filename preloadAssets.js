function preloadAssets(scene) {
  /* Cenário */
  scene.load.image("fundo", "./assets/fundo.png");
  scene.load.image("plataforma", "./assets/plataforma.png");

  /* Player */
  scene.load.spritesheet("player", "./assets/player.png", {
    frameWidth: 32,
    frameHeight: 48,
  });
}
