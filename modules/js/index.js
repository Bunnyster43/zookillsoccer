/**
 * Create the game. Import the primary classes, and 'composite'
 * the overall Game object out of instances of the classes.
 */
import GamePiece from './GamePiece.js';

//The entire game
import Game from './Game.js';

//Screen inheritance
import Screen from './Screen.js';
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import EndScreen from './EndScreen.js';

//Info inheritance
import Info from './Info.js';
import Text from './Text.js';
import StaticText from './StaticText.js';
import Identity from './Identity.js';
import Instructions from './Instructions.js';
import DynamicText from './DynamicText.js';
import Score from './Score.js';

//Character inheritance
import Character from './Character.js';
import Trump from './Trump.js';
import Player from './Player.js';
import Animal from './Animal.js';
import Lion from './Lion.js';
import Tiger from './Tiger.js';
import Bear from './Bear.js';
import Gorilla from './Gorilla.js';
import Health from './Health.js';

//Area inheritance.
import Area from './Area.js';
import Cage from './Cage.js';
import AnimalArea from './AnimalArea.js';
import PlayerArea from './PlayerArea.js';

//Test file (very simple testrunner)
import Tests from '../../tests/Tests.js';

/**
 * Set up tests.
 */
var myTests = new Tests();

/**
 * Set up the Game
 */
var myGame = new Game({name: "ZooKillSoccer"});

/**
 * EXPORT TO WEB CONSOLE
 * To make something visible in Web console for debuggint, attach to window object
 * NOTE: Professional code uses specialized testing modules like Mocha, Karma, and
 * similar testing libraries.
 */

// we can run this test manually with tests.run();
window.tests = myTests;

// make the game object visible so we can inspect it.
window.game = myGame;

console.log('ZOOKILLSOCCER Game initialized. Access game via "game". Use Tests.run() to test.')
