var passoPlayer = 250;
var pulo = 400;
var isDashing = false;

function updateGame(scene) {
  if (teclado.left.isDown) {
    if (passoPlayer > 0) passoPlayer *= -1;
    player.setVelocityX(passoPlayer);

    if (player.anims.getName() !== "dash-player-left") {
      player.anims.play("left", true);
    }
  } else if (teclado.right.isDown) {
    if (passoPlayer < 0) passoPlayer *= -1;
    player.setVelocityX(passoPlayer);

    if (player.anims.getName() !== "dash-player-right") {
      player.anims.play("right", true);
    }
  } else {
    player.setVelocityX(0);
    if (passoPlayer > 0) player.anims.play("paradoRight", true);
    else player.anims.play("paradoLeft", true);
  }

  // if (teclado.space.isDown && player.body.touching.down) {
  //   player.setVelocityY(-pulo);
  // }

  /* Dash */
  if (
    teclado.space.isDown &&
    isDashing == false &&
    player.body.velocity.x != 0
  ) {
    // console.log(player.body.velocity.x);

    if (player.body.velocity.x > 0) {
      player.setVelocityX(900);
      player.anims.play("dash-player-right", true);
      makeDash(false, 15, 28);
    } else {
      makeDash(true, -15, 28);
      player.anims.play("dash-player-left", true);
      player.setVelocityX(-900);
    }

    scene.time.delayedCall(100, () => {
      isDashing = true;
    });

    scene.time.delayedCall(dashEffect.anims.duration, () => {
      console.log(dashEffect.anims.duration);
      dashEffect.setVisible(false);
      isDashing = false;
    });

    scene.time.delayedCall(player.anims.duration, () => {
      player.anims.play("paradoLeft", true);
    });
  }

  if (isGameOver) {
    console.log("Game Over");
    let configText = {
      fontSize: "52px",
      color: "white",
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
    //  Swap to the GameOver scene after a miliseconds delay
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
