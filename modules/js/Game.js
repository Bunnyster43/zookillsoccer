/**
 * Game.js
 * The entire Game object
 * @inherits GamePiece
 */
import GamePiece from './GamePiece.js';

//Screen inheritance
import Screen from './Screen.js';
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import EndScreen from './EndScreen.js';

//Info inheritance
import Info from './Info.js';
import Text from './Text.js';
import StaticText from './StaticText.js';
import Image from './Image.js';
import StaticImage from './Image.js';
import Identity from './Identity.js';
import Instructions from './Instructions.js';
import DynamicText from './DynamicText.js';
import Score from './Score.js';

//Character inheritance
import Character from './Character.js';
import Trump from './Trump.js';
import Player from './Player.js';
import Animal from './Animal.js';
import Lion from './Lion.js';
import Tiger from './Tiger.js';
import Bear from './Bear.js';
import Gorilla from './Gorilla.js';
import Health from './Health.js';

//Area inheritance.
import Area from './Area.js';
import Cage from './Cage.js';
import AnimalArea from './AnimalArea.js';
import PlayerArea from './PlayerArea.js';

//import Collider and Sounder objetcs
import Collider from './Collider.js';
import Sounder from './Sounder.js';

export default class Game extends GamePiece {

	constructor (config) {

		super(config);

		//game copyright
		this.warning = 'This game belongs to us, and nobody else.';

		//game reverts to StartScreen if unplayed
		this.TIMEOUT = 5555;

		// define Id link to DOM
		this.START_SCREEN_ID = 'start-screen';
		this.GAME_SCREEN_ID = 'game-screen';
		this.END_SCREEN_ID = 'end-screen';

		// model storage, screens
		this.screens = [];

		// model storage, dynamic characters
		this.displayCharacters = [];

		// initialize game, load start screen
		this.init();

	} //end of constructor

	init () {

		// Grab the HTML screen elements and encapsulate in a Screen class
		this.screens[this.START_SCREEN_ID] = new StartScreen({name: 'Start Screen', id: this.START_SCREEN_ID, game: this});
		this.screens[this.GAME_SCREEN_ID] = new GameScreen({name: 'Game Screen', id: this.GAME_SCREEN_ID, game: this});
		this.screens[this.END_SCREEN_ID] = new EndScreen({name: 'End Screen', id: this.END_SCREEN_ID, game: this});

		// load the canvas
		this.loadCanvas();

		// make the start screen visible
		this.loadGame();
	}

	// get a reference to the HTML5 canvas context
	loadCanvas () {
		this.canvas = document.querySelector('#game-screen-arena canvas');
		this.context = this.canvas.getContext("2d");
	}

	/**
	 * Load Characters
	 * dynamic Characters (e.g. those that animate) are loaded by Game.
	 * Other static visual objects are loaded by Screen classes.
	 */
	loadPlayers () {
		this.displayCharacters.push(
			new Player(
				{
					name: 'Player', position: {top: 510, left: 200},
					path: 'img/players/player.png',
					game: this
				}
			)
		);
	}

	loadAnimals () {
		this.displayCharacters.push(
			new Lion(
				{
					name: 'Lion',
					position: {top: 15, left: 94},
					path: 'img/animals/lion.png',
					game: this
				}
			)
		);
		this.displayCharacters.push(
			new Tiger(
				{
					name: 'Tiger',
					position: {top: 15, left: 333},
					path: 'img/animals/tiger.png',
					game: this
				}
			)
		);
		this.displayCharacters.push(
			new Bear(
				{
					name: 'Bear', position: {top: 15, left: 570},
					path: 'img/animals/bear.png',
					game: this
				}
			)
		);
		this.displayCharacters.push(
			new Gorilla(
				{
					name: 'Gorilla', position: {top: 15, left: 812},
					path: 'img/animals/gorilla.png',
					game: this
				}
			)
		);

	}

	loadTrumps () {
		this.displayCharacters.push(
			new Trump(
				{
					name: 'Trump', position: {top: 450, left: 200},
					path: 'img/trumps/trump.png',
					game: this
				}
			)
		);

	}

	loadGame () {

		//load Info assets

		console.log('loading splash screen');
		this.screens[this.END_SCREEN_ID].hideScreen()
		this.screens[this.START_SCREEN_ID].showScreen();
	}

	startGame () {

		//load Characters
		this.loadAnimals();
		this.loadPlayers();
		this.loadTrumps();

		// add collision matrix
	  this.collider = new Collider(this.displayCharacters);
	  //load audio samples
    this.soundPool = new Sounder();

		//load audio samples
    this.soundPool = new Sounder();
    this.soundPool.addSound('kick', 0.7);
    this.soundPool.addSound('lion', 0.7);
    this.soundPool.addSound('tiger', 0.7);
    this.soundPool.addSound('bear', 0.7);
    this.soundPool.addSound('gorilla', 0.7);
		
		//make GameScreen visible

		// initialize elapsed time
		this.startTime = new Date();

		// show GameScreen, hide others
		console.log('starting game');
		this.screens[this.START_SCREEN_ID].hideScreen();
		this.screens[this.END_SCREEN_ID].hideScreen();
		this.screens[this.GAME_SCREEN_ID].showScreen();
		this.gameLoop();
	}

	endGame () {

		console.log('ending game');

		// reset timer
		this.startTime = 0;

		// turn off animation
		cancelAnimationFrame(this.globalId);
		this.globalId = null;

		// go to end screen
		this.screens[this.GAME_SCREEN_ID].hideScreen();
		this.screens[this.END_SCREEN_ID].showScreen();
	}

	elapsed () {

		// record time we have been in gameLoop
		this.endTime = new Date();

		// time difference in ms

		var timeDiff = (this.endTime - this.startTime) / 1000;

		// get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
		return Math.round(timeDiff % 60);
	}

	checkIfComplete () {

		// game logic to see if the game should reset
		/////////////console.log('ELAPSED:' + this.elapsed());

		if (this.elapsed() > this.TIMEOUT) {
			// if idle too long, reset game to start
			return true;
		}

		return false;
	}

	update () {

		for (var i = 0, len = this.displayCharacters.length; i < len; i++) {

			var character = this.displayCharacters[i];

			switch (character.getClass()) {
				case 'Player':
				case 'Trump':
				case 'Lion':
				case 'Tiger':
				case 'Bear':
				case 'Gorilla':
				default:
					break;
			}

			character.update();
		}
	}

	draw () {

		for (var i = 0, len = this.displayCharacters.length; i < len; i++) {
			this.displayCharacters[i].draw(this.context);
		}
	}

	gameLoop () {

		if (this.checkIfComplete()) {
			this.endGame();
			return;
		}
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.update();
		this.draw();

		//console.log('looping...')
		this.globalId = requestAnimationFrame(this.gameLoop.bind(this));
	}

}
