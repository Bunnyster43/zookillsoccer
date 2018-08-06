/**
 * Animal.js
 * The critters that Trump tries to stop from getting the Player.
 * @inherits GamePiece, Character
 */
 import GamePiece from './GamePiece.js';
 import Character from './Character.js';

 import Info from './Info.js';
 import Image from './Image.js';
 import StaticImage from './StaticImage.js';

 import Mover from './Mover.js';
 import Collider from './Collider.js';

 export default class Animal extends Character {

 	constructor (config) {
 		super (config);

    // Animals get RandomWalk motion
   this.mover.initRandomWalk(0.02, 'bottom');
 	}
  
  update () {
 	this.mover.updateRandomWalk();
  }
 }
