/** 
 * AnimalArea.js
 * The region animals move through to get to Player.
 * @inherits GamePiece, Area
 */
 import GamePiece from './GamePiece.js';
 import Area from './Area.js';

 export default class Cage extends Area {

 	constructor (config) {
 		super(config);
 	}

 }