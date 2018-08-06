/** 
 * Lion.js
 * A Lion, who tries to get the Player.
 * @inherits GamePiece, Character
 */
 import GamePiece from './GamePiece.js';
 import Character from './Character.js';
 import Animal from './Animal.js';

 export default class Lion extends Animal {

 	constructor (config) {
 		super (config);
 	}
 }