var passoPlayer = 200;
var pulo = 400;

function updateGame() {
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

  if (teclado.space.isDown && player.body.touching.down) {
    player.setVelocityY(-pulo);
  }
}
