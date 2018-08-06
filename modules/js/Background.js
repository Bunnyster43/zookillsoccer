/** 
 * Background.js
 * Game Logos, LogoTypes, Brand Name
 */
 import GamePiece from './GamePiece.js';
 import Info from './Info.js';
 import Image from './Image.js';
 import StaticImage from './StaticImage.js';

export default class Background extends StaticImage {

	constructor (config) {
		super(config);

		this.setSource(config.source);
		this.setAuthor(config.author);
		this.loadBackgroundImage(config.domId, config.path);
	}

}
