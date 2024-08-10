function createAssets(scene) {
  /* Cenário */
  scene.add.image(scene.scale.width / 2, scene.scale.height / 2, "fundo");
  plataforma = scene.physics.add.staticGroup();
  plataforma.create(scene.scale.width / 2, 478, "plataforma");

  /* Player */
  player = scene.physics.add.sprite(scene.scale.width / 2, 300, "player");
  player.setBounce(0.2);
  player.body.setGravityY(600);
  player.setCollideWorldBounds(true);

  /* Coletável */
  let pos = Phaser.Math.FloatBetween(100, 900);
  star = scene.physics.add.sprite(pos, 0, "star");
  star.setBounce(0.5);

  /* Inimigo */
  bombs = scene.physics.add.group();

  /* Colliders */
  scene.physics.add.collider(player, plataforma);
  scene.physics.add.collider(star, plataforma);
  scene.physics.add.collider(bombs, plataforma);
  // scene.physics.add.collider(bombs, bombs);
  scene.physics.add.overlap(player, star, coletarStar);
  scene.physics.add.overlap(player, bombs, gameOver);

  /* Effects: Dash */
  dashEffect = scene.add.sprite(scene.scale.width / 2, 300, "dash");
  dashEffect.setVisible(false);

  /* Animações do Player */
  createPlayerAnimations(scene);
  player.anims.play("parado", true);
  // dashe.anims.play("dash", true);

  /* Entradas do teclado */
  teclado = scene.input.keyboard.createCursorKeys();

  /* HUD Pontos */
  pontosText = scene.add.text(16, 16, "Pontos: 0", { fontSize: "25px" });
}

function coletarStar(player, star) {
  let pos = Phaser.Math.FloatBetween(100, 900);
  star.setX(pos);
  star.setY(0);
  star.setVelocity(0);

  var bomb = bombs.create(pos, 0, "bomb");
  bomb.setBounce(1);
  bomb.setCollideWorldBounds(true);
  bomb.setVelocity(50);

  pontos = pontos + 10;
  pontosText.setText("Pontos: " + pontos);
}

function gameOver(player, bombs) {
  player.setVisible(false);
  isGameOver = true;
  player.scene.cameras.main.shake(100, 0.01);
}

function createPlayerAnimations(scene) {
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

  var dash = {
    key: "dash",
    frames: scene.anims.generateFrameNumbers("dash", { start: 0, end: 7 }),
    frameRate: 20,
    repeat: 0,
  };
  scene.anims.create(dash);
}
