/** 
 * GameScreen.js
 * Main game screen object
 * @inherits GamePiece, Screen
 */
 import GamePiece from './GamePiece.js';
 import Screen from './Screen.js';

 import Area from './Area.js';
 import AnimalArea from './AnimalArea.js';
 import PlayerArea from './PlayerArea.js';
 import Cage from './Cage.js';


 export default class GameScreen extends Screen {

 	constructor (config) {
 		super(config);

 		this.cages = [];
 		this.animalAreas = [];
 		this.playerAreas = [];

 		//GameScreen should hide its local header and footer
 		this.hideHeader();
 		this.hideFooter();

 		// load the background image
 		this.loadBackground('img/screens/game-screen.png');

 		// get the section that has the canvas for overlay
 		var arena = document.getElementById('game-screen-arena');

 		// load sub-objects into the Arena
 		this.cages   = this.loadCages(arena, 'img/areas/cage.png');
 		this.animalArea = this.loadAnimalArea();
 		this.playerArea = this.loadPlayerArea();

 	}

 	loadCages (container, imgPath) {
 		// load 4 Cages
 		this.cages.push(
 			new Cage(
 				{
 					name: 'lion-cage', 
 					position: {top: 0, left: 70}, 
 					size: {width: 100, height:100}, 
 					container: container, 
 					path: imgPath
 				}
 			)
 		);
		this.cages.push(
			new Cage(
				{
					name: 'tiger-cage', 
					position: {top: 0, left: 310}, 
					size: {width: 100, height:100}, 
					container: container, 
					path: imgPath
				}
			)
		);
		this.cages.push(
			new Cage(
				{
					name: 'bear-cage', 
					position: {top: 0, left: 550}, 
					size: {width: 100, height:100},
					container: container, 
					path: imgPath
				}
			)
		);
		this.cages.push(
			new Cage(
				{
					name: 'gorilla-cage', 
					position: {top: 0, left: 790}, 
					size: {width: 100, height:100},
					container: container, 
					path: imgPath
				}
			)
		);
 	}

 	loadAnimalArea () {
 		// load Animal movement area
 		this.animalAreas.push(
 			new AnimalArea(
 				{
 					name: 'Zoo', 
 					position: {top: 104, left: 6}, 
 					size: {width: 970, height: 410},
 					container: this.dom, 
 					path: null
 				}
 			)
 		);
 	}

 	loadPlayerArea () {
 		// load the Player
 		this.playerAreas.push(
 			new PlayerArea(
 				{
 					name: 'Player Area', 
 					position: {top: 514, left: 6}, 
 					size: {width: 970, height: 100},
 					container: this.dom, 
 					path: null
 				}
 			)
 		);
 	}

 }

