import GamePiece from '../modules/js/GamePiece.js';

//The entire game
import Game from '../modules/js/Game.js';

//Screen inheritance
import Screen from '../modules/js/Screen.js';
import StartScreen from '../modules/js/StartScreen.js';
import GameScreen from '../modules/js/GameScreen.js';
import EndScreen from '../modules/js/EndScreen.js';

//Info inheritance
import Info from '../modules/js/Info.js';
import Text from '../modules/js/Text.js';
import StaticText from '../modules/js/StaticText.js';
import Identity from '../modules/js/Identity.js';
import Instructions from '../modules/js/Instructions.js';
import DynamicText from '../modules/js/DynamicText.js';
import Score from '../modules/js/Score.js';

//Character inheritance
import Character from '../modules/js/Character.js';
import Trump from '../modules/js/Trump.js';
import Player from '../modules/js/Player.js';
import Animal from '../modules/js/Animal.js';
import Lion from '../modules/js/Lion.js';
import Tiger from '../modules/js/Tiger.js';
import Bear from '../modules/js/Bear.js';
import Gorilla from '../modules/js/Gorilla.js';
import Health from '../modules/js/Health.js';

//Area inheritance.
import Area from '../modules/js/Area.js';
import Cage from '../modules/js/Cage.js';
import AnimalArea from '../modules/js/AnimalArea.js';
import PlayerArea from '../modules/js/PlayerArea.js';

/** 
 * TESTBED - Test all our objects. This is a very basic testing system. 
 * NOTE: Professional code uses testing libraries like Karma and Mocha.
 */
export default class Tests {

	constructor () {
	}

	// Because we make these objects with 'var' they are scoped to the run() function.
	run () {

		var config = {name:'Forest Trump or Donald Gump rulz'};

		// Make some test game objects
		var game = new Game(config);
		console.log(game.getName());

		//test Game Object
		var myGame = new Game({name: "ZooKillSoccer"});
		console.log(myGame.getName());

		//other objects
		var myScreen = new Screen({name: "Opening Screen"});
		console.log(myScreen.getName());

		var myStartScreen = new StartScreen({name: "Start Screen"});
		console.log(myStartScreen.getName());

		var myGameScreen = new GameScreen({name: "Game Screen"});
		console.log(myGameScreen.getName());

		var myEndScreen = new EndScreen({name: "End Screen"});
		console.log(myEndScreen.getName());

		var myInfo = new Info({name: "Generic Information"});
		console.log(myInfo.getName());

		var myText = new Text({name: "Generic Text Object"});
		console.log(myText.getName());

		var myStaticText = new StaticText({name: "Generic Static Text Object"});
		console.log(myStaticText.getName());

		var myIdentity = new Identity({name: "Generic Identity Object"});
		console.log(myIdentity.getName());

		var myInstructions = new Instructions({name: "Generic Instructions Object"});
		console.log(myInstructions.getName());

		var myDynamicText = new DynamicText({name: "Generic Dynamic Text Object"});
		console.log(myDynamicText.getName());

		var myScore = new Score({name: "scores..."});
		console.log(myScore.getName());

		var myCharacter = new Character({name: "Generic Character"});
		console.log(myCharacter.getName());

		var myTrump = new Trump({name: "Donald Trump"});
		console.log(myTrump.getName());

		var myPlayer = new Player({name: "End User"});
		console.log(myPlayer.getName());

		var myAnimal = new Animal({name: "Generic Animal"});
		console.log(myAnimal.getName());

		var myLion = new Lion({name: "Cowardly the Lion"});
		console.log(myLion.getName());

		var myTiger = new Tiger({name: "Chomper the Tiger"});
		console.log(myTiger.getName());

		var myBear = new Bear({name: "Mauler the Bear"});
		console.log(myBear.getName());

		var myGorilla = new Gorilla({ name: "Spunky the Gorilla"});
		console.log(myGorilla.getName());

		var myHealth = new Health({name: "One Health Kit"});
		console.log(myHealth.getName());

		//Area inheritance.
		var myArea = new Area({name: "Generic Area"});
		console.log(myArea.getName());

		var myCage = new Cage({name: "Generic Area"});
		console.log(myCage.getName());

		var myAnimalArea = new AnimalArea({name: "AnimalArea"});
		console.log(myAnimalArea.getName());

		var myPlayerArea = new PlayerArea({name: "PlayerArea"});
		console.log(myPlayerArea.getName());
	}
}
