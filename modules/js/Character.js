/**
 * Character.js
 * Game-generated or user avatars. Characters are rendered in Canvas, but have their
 * position computed and updated outside canvas.
 * @inherits GamePiece
 */
 import GamePiece from './GamePiece.js';

 import Info from './Info.js';
 import Image from './Image.js';
 import StaticImage from './StaticImage.js';

 import Mover from './Mover.js';
 import Collider from './Collider.js';

 export default class Character extends GamePiece {

 	constructor (config) {
 		super (config);

 		// Set position and size from configuration
 		this.position = config.position;
 		this.size = config.size;

 		// store a reference to the game object
 		this.game = config.game;

 		this.image = new StaticImage(
 			{
 				name: config.name + '-image',
 				path: config.path
 			}
 		);

    //initialize a Mover object (animation)
    this.mover = new Mover(this);

 		// Images don't automatically load when they're not attached to the DOM,
 		// or a CSS background image
 		this.image.load(config.path, function () {console.log('loaded:' + config.name);});
 	}

 	// override default draw with our own
 	draw (context) {
		if (this.image) {
			var img = this.image.data;
			console.log('drawing')
			if (img) {
				// draw image into HTML5 canvas
 		 		context.drawImage(img, this.position.left, this.position.top);
			}
		}
 	}
 }
