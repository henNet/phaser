function createAssets(scene) {
  /* Cenário */
  scene.add.image(400, 200, "fundo");
  plataforma = scene.physics.add.staticGroup();
  plataforma.create(400, 387, "plataforma");

  /* Player */
  player = scene.physics.add.sprite(400, 300, "player");
  player.setBounce(0.2);
  player.body.setGravityY(600);

  /* Colliders */
  scene.physics.add.collider(player, plataforma);

  /* Animações do Player */
  var andarLeft = {
    key: "left",
    frames: scene.anims.generateFrameNumbers("player", { start: 0, end: 3 }),
    frameRate: 10,
    repeat: -1,
  };
  scene.anims.create(andarLeft);

  var andarRight = {
    key: "right",
    frames: scene.anims.generateFrameNumbers("player", { start: 5, end: 8 }),
    frameRate: 10,
    repeat: -1,
  };
  scene.anims.create(andarRight);

  var parado = {
    key: "parado",
    frames: [{ key: "player", frame: 4 }],
    frameRate: 10,
    repeat: -1,
  };
  scene.anims.create(parado);
  player.anims.play("parado", true);

  /* Entradas do teclado */
  teclado = scene.input.keyboard.createCursorKeys();
}
