/** 
 * Screen.js
 * Generic Screen object
 * @inherits GamePiece.js
 */
 import GamePiece from './GamePiece.js';

 import Image from './Image.js';
 import StaticImage from './Image.js';
 import Identity from './StaticImage.js';

 export default class Screen extends GamePiece {

 	constructor (config) {
 		super(config); //init 'parent' GamePiece

 		// save a reference to our parent Game object
 		this.game = config.game;

 		window.config = config; /////////////////////////DEBUG ONLY

 		// Screens are defined in HTML, so save a reference to our DOM id
 		this.domId = config.id;

 		// save a reference to the DOM element we're connected to
 		this.dom = document.getElementById(this.domId);

 		// insert the copyright info from the main Game object
 		this.addWarning();
 	}

 	// load a background image into the Screen
 	loadBackground (path, callback) {
 		console.log("loading:" + this.domId);
 		this.backgroundImage = new StaticImage(
 			{
 				name: this.name + '-image',
 				domId: this.id + '-image',
 				path: path,
 				callback: callback
 			}
 		);
 		this.backgroundImage.loadBackgroundImage(this.dom, path, callback);
 	}

 	// show and hide regions of the Screen
 	showScreen () {
 		console.log("showing:" + this.domId);
 		this.dom.style.display = "block";
 	}

 	hideScreen () {
 		console.log("hiding:" + this.domId);
 		this.dom.style.display = "none";
 	}

 	showHeader () {
 		this.dom.querySelector('.header').style.display = "block";
 	}

 	hideHeader () {
		this.dom.querySelector('.header').style.display = "none";

 	}

 	showFooter () {
		this.dom.querySelector('.footer').style.display = "block";

 	}

 	hideFooter () {
		this.dom.querySelector('.footer').style.display = "none";

 	}

 	addWarning () {
 		this.dom.querySelector('.footer').innerHTML = this.game.warning;
 	}

 };