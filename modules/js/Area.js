/** 
 * Area.js
 * A generic region of the game screen. Used to add visual objects, and 
 * create bounds for collision detection.
 * @inherits GamePiece, Info, Image, StaticImage
 */
 import GamePiece from './GamePiece.js';

 import Info from './Info.js';
 import Image from './Image.js';
 import StaticImage from './StaticImage.js';

 export default class Area extends GamePiece {

 	constructor (config) {
 		super(config);

 		// create a <div>, add to DOM, with optional image
 		this.addToDOM(config.name, config.container, config.path);

 		// position with absolute coordinated
 		this.setDOMPosition(config.position); //inherited from GamePiece
 		this.setDOMSize(config.size);
 	}

 	// create DOM element, Load a background image, and insert into container
 	addToDOM (name, container, imgPath) {
 		this.dom = document.createElement('div');
 		this.dom.id = name + '-area';

 		// position absolutely
 		this.dom.style.position = 'absolute';

 		// Don't allow padding or margins or borders for Areas
 		this.dom.style.margin = '0px';
 		this.dom.style.padding = '0px';

 		// add to the DOM
 		container.insertBefore(this.dom, container.childNodes[0]);

 		// if we have an image, insert in element background
 		if (imgPath) {

 			this.image = new StaticImage(
 				{
 					name: this.dom.id + '-image'
 				}
 			);

 			this.image.loadBackgroundImage (this.dom, imgPath);
 		}

 	}

 	// bounds detector for supplied Character


 }