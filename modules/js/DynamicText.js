/** 
 * DynamicText.js
 * Text that can be changed by user (e.g. input field), or 
 * updated by the game itself.
 */
 import GamePiece from './GamePiece.js';
 import Info from './Info.js';
 import Text from './Text.js';

export default class DynamicText extends Text {

	constructor (config) {
		super(config);
	}
}
