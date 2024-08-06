/* Variável de configuração do Phaser */
var config = {
  width: 800,
  height: 400,
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
    },
  },
};

var game = new Phaser.Game(config);

function preload() {
  preloadAssets(this);
}

function create() {
  createAssets(this);
}
function update() {
  updateGame();
}
