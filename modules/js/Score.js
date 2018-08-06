/** 
 * Score.js
 * Display user score
 * @inherits DynamicText, Text, Info, GamePiece
 */
import GamePiece from './GamePiece.js';
import Info from './Info.js';
import Text from './Text.js';
import DynamicText from './DynamicText.js';

export default class Score extends DynamicText {

	constructor (config) {
		super(config);
	}
}