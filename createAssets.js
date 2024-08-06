function createAssets(scene) {
  /* Cenário */
  scene.add.image(400, 200, "fundo");
  plataforma = scene.physics.add.staticGroup();
  plataforma.create(400, 387, "plataforma");

  /* Player */
  player = scene.physics.add.sprite(400, 300, "player");
  player.setBounce(0.2);

  /* Colliders */
  scene.physics.add.collider(player, plataforma);
}
