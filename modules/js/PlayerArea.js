/** 
 * PlayerArea.js
 * The region where the Player can move.
 * @inherits GamePiece, Area
 */
 import GamePiece from './GamePiece.js';
 import Area from './Area.js';

 export default class PlayerArea extends Area {

 	constructor (config) {
 		super(config);
 	}

 }