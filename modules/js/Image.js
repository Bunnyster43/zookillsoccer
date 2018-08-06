/** 
 * StaticImage.js
 * Image-style Information that cannot be changed once the game is loaded
 */
 import GamePiece from './GamePiece.js';
 import Info from './Info.js';

export default class Image extends Info {

	// save scope
	// TODO: refactor with arrow function

	constructor (config) {
		super(config);
		this.ready = false; //over-ride GamePiece and info with deferrals
		this.image = null;
		this.path = config.path;
		this.author = config.author;
		this.source = config.source;
	}

	// load an image
	load (path, callback) {
		var that = this;
		that.setReady(false);
		console.log('entering load inImage');
		var img = document.createElement('img');
		img.src = path;
		img.onload = function () {
			console.log(that.name + ' image loaded from:' + path + ' w:' + img.width + ' h:' + img.height)
			that.setReady(true);
			that.data = img;
			
			if(callback) {
				callback();
			}
		}
		img.onerror = function (e) {
			console.log('error loading img from:' + path);
		}
	}

	// load image, append to existing DOM element
	// NOTE: this is over-written in Character.js, which loads images into Canvas
	loadImageToDOM (domId, path, callback) {
		var that = this;
		this.load(path, function () {
			console.log('foreground image ' + path + ' loaded')
			document.getElementById(domId).appendChild(that.data);
			if (callback) {
				callback();
			}
		});

	}

	// load image as a CSS background image into existing DOM element. 
	// NOTE: no local reference to image in this case
	loadBackgroundImage (container, path, callback) {
		console.log('loading background image:' + path)
		container.style.backgroundImage='url(' + path + ')';
		this.setReady(true);
		if (callback) {
			callback();
		}
	}

	// Draw the image to a supplied canvas context
	drawToCanvas (context, position, size) {
		context.drawImage(img, position.top, position.left, size.width, size.height);
	}

	// Draw to the DOM. Assume the Image was already attached to the DOM
	drawToDOM (position, size) {
		this.image.style.top = position.top;
		this.image.style.left = position.left;
		this.image.style.width = size.width;
		this.image.style.height = size.height;
	}

}
