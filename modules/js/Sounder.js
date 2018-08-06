/** 
 * @class Sounder.js

 * @description provide sounds that other objects can play. Detects the kinds 
 * of audio files the web brower can play, and serves the first file it finds in 
 * the /audio folder of the distribution. Audio files are accessed by custom names 
 * for playback.

 * Adapted from
 * @http://blog.sklambert.com/html5-canvas-game-html5-audio-and-finishing-touches/

 * Sounder.js should be loaded in the main Game initialization process.

 * In addition, the distribution MUST have an /audio directory with files in multiple 
 * audio formats:
 * MP3 (.mp3)
 * Ogg-Vorbis (.ogg)
 * WAV (.wav)

 * Audio Editors:
 * Audacity (free)
 * @link http://www.audacityteam.org/
 * ProTools ($$$)
 * @link http://www.avid.com/pro-tools

 * Audio converters:
 * @link http://media.io/
 * @link https://sourceforge.net/projects/audacity/
 * @link http://www.mediahuman.com/audio-converter/
 * @link http://www.html5audioconverter.com/
 
 * Audio Samples:
 * @link http://www.grsites.com/archive/sounds/category/25/?offset=20
 * @link https://www.freesound.org
 */
export default class Sounder {

	constructor () {

		// Create an array of loaded sounds
		this.path = 'audio/';

		this.sounds = [];
		this.checkAudio();
	}

	/** 
	 * @method checkAudio
	 * @description see which audio file formats can be played by the browser.
	 */
	checkAudio () {
		var elem = document.createElement('audio');
		var bool = false;

		try {
			if (bool = !!elem.canPlayType) {
				bool = new Boolean(bool);
				bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
				bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/,'');
				bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,'');
				bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/,'');
			}
		} catch (e) {}
			// list supported audio types
			//elem = null; 
			this.type = bool;

			for (var i in this.type) {
				console.log(i + ' support:' + this.type[i]);
			}
	}

	/** 
	 * @method setSound
	 * @description callback for loading sound, adds to the 
	 * sounds array for later playback.
	 */
	setSound (e, name, volume) {
		if (!volume) {
			volume = 0.5;
		}
		this.sounds[name] = e.target;
		this.sounds[name].volume = volume;
	}

	/** 
	 * @method soundError
	 * @description callback for failed loads of sound files.
	 */
	soundError (e, name) {
		console.error('Audio ' + name + ' faied to load');
		this.sounds[name] = null;
	}

	/** 
	 * @method addSound
	 * @description add a new sound. 
	 * @param String name the name of the sound. The sound name 
	 * must match the file containing the audio, e.g. for a sound called 
	 * 'kick' there must be a file /audio/kick.mp3 
	 * Possible formats (create them all during production)
	 * - MP3 (.mp3)
	 * - Ogg-Vorbis (.ogg)
	 * - WAV (.wav)
	 * @param Number volume the loudness of the sound, between 0 (silent) 
	 * and 1.0 (as loud as possible).
	 */
	addSound (name, volume) {
		if (!name) {
			console.error('tried to load audio file without a name and/or path, aborting');
			return;
		}
		// try creating the sound
		var snd;
		// get the extension and remaining path
		for (var i in this.type) {
			console.log('this.type[' + i + ']=' + this.type[i]);
			if (this.type[i] != "") { //returned dataType for elem.canPlayType(...)

				var filePath = this.path + name + '.' + i;
				console.log("TRYING TO LOAD:" + this.path + name + '.' + i);

				// Create the Audio object
				snd = new Audio(filePath);

				// trap load and error events
				snd.addEventListener('loadeddata', 
					event => this.setSound(event, name, volume), false);

				snd.addEventListener('error', 
					event => this.soundError(event, name), false);

				// start loading the sound
				snd.load();
				break;
			}
		}
		if (!snd) {
			console.error('sound file for:' + name + ' not found in audio');
		}

	}

	/** 
	 * @method playSound
	 * @description
	 * @params String name the name of the sound. Must match the filename 
	 * WITHOUT a file extension in the /audio folder for the game.
	 */
	playSound (name) {
		if (this.sounds[name]) {
			this.sounds[name].play();
		} else {
			console.error('no sound file with name:' + name + ' in audio folder');
		}
	}

	/** 
	 * @method fileExists
	 * @description detect if a file is present on the server. Uses an 
	 * synchronous Ajax technique, so SLOW if you are using a remote server. 
	 * No comparable method exists for determining if a folder exists in 
	 * client-side vanilla JavaScript.
	 * @param String url the path to the file on the server.
	 */
	fileExists(url) {
		var xhr = new XMLHttpRequest();
		xhr.open('HEAD', url, false);
		xhr.send();
		if (xhr.status == '404') {
			return false;
		} else {
			return true;
		}
	}

} // end of class