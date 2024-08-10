var passoPlayer = 200;
var pulo = 400;
var isDashing = false;

function updateGame(scene) {
  if (teclado.left.isDown) {
    player.setVelocityX(-passoPlayer);
    player.anims.play("left", true);
  } else if (teclado.right.isDown) {
    player.setVelocityX(passoPlayer);
    player.anims.play("right", true);
  } else {
    player.setVelocityX(0);
    player.anims.play("parado", true);
  }

  // if (teclado.space.isDown && player.body.touching.down) {
  //   player.setVelocityY(-pulo);
  // }

  if (
    teclado.space.isDown &&
    isDashing == false &&
    player.body.velocity.x != 0
  ) {
    // console.log(player.body.velocity.x);

    if (player.body.velocity.x > 0) {
      player.setVelocityX(800);
      makeDash(false, 15, 12);
    } else {
      makeDash(true, -15, 12);
      player.setVelocityX(-800);
    }

    scene.time.delayedCall(80, () => {
      isDashing = true;
    });

    scene.time.delayedCall(dashEffect.anims.duration, () => {
      console.log(dashEffect.anims.duration);
      dashEffect.setVisible(false);
      isDashing = false;
    });
  }

  //  Swap to the GameOver scene after a miliseconds delay

  if (isGameOver) {
    console.log("Game Over");
    let configText = {
      fontSize: "42px",
      color: "red",
    };
    scene.add
      .text(
        scene.scale.width / 2,
        scene.scale.height / 2,
        "Game Over",
        configText
      )
      .setOrigin(0.5, 0.5);
    
    // scene.add.text(400, 250, "Clique para reiniciar").setOrigin(0.5, 0.5);

    // /* Reinicia o jogo  */
    // scene.input.once("pointerdown", () => {
    //   scene.scene.start("Game");
    // });
  }
}

function makeDash(flipX, x, y) {
  dashEffect.x = player.x - x;
  dashEffect.y = player.y + y;
  dashEffect.setFlipX(flipX);
  dashEffect.anims.play("dash", true);
  dashEffect.setVisible(true);
}
