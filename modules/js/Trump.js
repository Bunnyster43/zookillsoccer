/**
 * Trump.js
 * The ball-like Character you kick into Animals
 * @inherits GamePiece, Character
 */
 import GamePiece from './GamePiece.js';
 import Character from './Character.js';

 import Mover from './Mover.js';
 import Collider from './Collider.js';

 export default class Trump extends Character {

 	constructor (config) {
 		super (config);

    //Trump gets PingPong motion
    this.mover.initPingPong(0, this); //pingpong won't start yet
 	}

  update () {
   this.mover.updatePingPong(); //allows pingpong motion
  }
 }
