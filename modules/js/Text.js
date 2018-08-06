/** 
 * Text.js
 * Creates a text-type Info object
 * @inherits Info, GamePiece
 */
 import GamePiece from './GamePiece.js';
 import Info from './Info.js';

 export default class Text extends Info {

 	constructor(config) {
 		super(config);

 		// set the text
 		this.setText(config.text);

 		// set the DOMId
 		this.addToDOM(config.domId);
 	}

 	setText (txt) {
 		this.text = txt;
 	}

 	addToDOM (domId) {

 		this.dom = document.createElement('div');
 		this.dom.id = name + '-Text';
 		this.dom.innerHTML = this.text;

 		// container
 		var container = document.getElementById(domId);

 		// add to the DOM
 		container.insertBefore(this.dom, container.childNodes[0]);

	}

 }