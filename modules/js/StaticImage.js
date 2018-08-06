/** 
 * StaticImage.js
 * Image-style Information that cannot be changed once the game is loaded
 */
 import GamePiece from './GamePiece.js';
 import Info from './Info.js';
 import Image from './Image.js';

export default class StaticImage extends Image {

	constructor (config) {
		super(config);

		this.static = true;
	}

}
