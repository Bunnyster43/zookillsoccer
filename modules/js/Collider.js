/** 
 * @class Collider
 * @description create the collision matrix defining which objects can collide 
 * with which objects. Objects that can collide have their potential colliders 
 * added as references, e.g. Player.trump or Trump.player.
 * @param Array characterArray the array of Characters who might be involved 
 * in collisions.
 */
 export default class Collider {

 	constructor (characterArray) {
 		this.characterArray = characterArray;
 		this.animalArray = []; //filled up in setUpCollisions
 		this.setUpCollisions();
 	}

 	setUpCollisions () {
 		for (var i = 0, len = this.characterArray.length; i < len; i++) {
 			switch (this.characterArray[i].constructor.name) {
 				case 'Lion':
 				case 'Tiger':
 				case 'Bear':
 				case 'Gorilla':
 					this.animalArray.push(this.characterArray[i]);
 					break;
 				case 'Trump':
 					this.trump = this.characterArray[i];
 					break;
 				case 'Player':
 					this.player = this.characterArray[i];
 					break;
 				default:
 					break;
 			}
 		}

 		//cross-connect the impactors
 		this.trump.player = this.player;
 		this.trump.animals = this.animalArray;
 		this.player.trump = this.trump;

 		//DEBUG
 		window.animals = this.trump.animals;
 		

 	}
 }