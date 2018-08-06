/** 
 * EndScreen.js
 * Ending screen for the game.
 * @inherits Screen, GamePiece
 */
 import GamePiece from './GamePiece.js';
 import Screen from './Screen.js';
 
 export default class EndScreen extends Screen {

 	constructor (config) {
 		super(config);

 		// load the background image
 		this.loadBackground('img/screens/end-screen.png');

 		// Load EndScreen sub-objects
 		this.loadInputScore();
 		this.loadHighScores();

 		// Bind "play again" and "instructions" buttons.
 		this.bindReplay();
 		this.bindInstructions();
 	}

 	loadInputScore () {

 	}

 	loadHighScores () {

 	}

 	bindReplay () {
		console.log("in bindStart, this.game:" + this.game)
		// we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
		document.querySelector('#end-screen-play-button').addEventListener('click', 
			function (e) {
				//alert("in handler, game:" + this.game)
				e.preventDefault();
				this.game.startGame();

			}.bind(this));
	}

	bindInstructions () {
		console.log("in bindStart, this.game:" + this.game)
		// we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
		document.querySelector('#end-screen-instructions-button').addEventListener('click', 
			function (e) {
				//alert("in handler, game:" + this.game)
				e.preventDefault();
				this.game.loadGame();

			}.bind(this));
	}
 }