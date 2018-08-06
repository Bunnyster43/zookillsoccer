/** 
 * Info.js
 * Generic informaiton object
 * @inherits GamePiece
 */
import GamePiece from './GamePiece.js';

export default class Info extends GamePiece {

	constructor(config) {
		super(config);
	}

	setAuthor (author) {
		this.author = author;
	}

	setSource (source) {
		this.source = source;
	}

}