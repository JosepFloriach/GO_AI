import "./phaser.js";

var winW = document.body.scrollWidth * 0.5;
var winH = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);

var headerH = document.getElementById("header").offsetHeight;

var config = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.NONE	,
		parent: 'gamecontainer',
		width: winW,
		height: winH - headerH
	},
	scene: {
		preload: preload,
		create: create
	}
};

var config2 = {
	type: Phaser.AUTO,
	scale: {
		mode: Phaser.Scale.NONE	,
		parent: 'visualizercontainer',
		width: winW,
		height: winH - headerH
	},
	scene: {
		preload: preload,
		create: create
	}
};

var game = new Phaser.Game(config);
var visualizer = new Phaser.Game(config2);

function preload ()
{
	console.log(winW);
	console.log(winH);
}

function create ()
{
	/*this.add.image(400, 300, 'sky');

	var particles = this.add.particles('red');

	var emitter = particles.createEmitter({
		speed: 100,
		scale: { start: 1, end: 0 },
		blendMode: 'ADD'
	});

	var logo = this.physics.add.image(400, 100, 'logo');

	logo.setVelocity(100, 200);
	logo.setBounce(1, 1);
	logo.setCollideWorldBounds(true);

	emitter.startFollow(logo);*/
}