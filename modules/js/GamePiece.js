/** 
 * GamePiece.js
 * Basic Game object
 *
 * To make this work, you must be running the Babel transpiler, 
 * and watching for changes in this file with browserify. Two 
 * Terminal windows need to be open:
 * 1. one window where you typed the command "grunt"
 * 2. one window where you typed the command "npm start"
 */
export default class GamePiece {

    constructor (config) {
        //TODO: use super();
        this.name = config.name;
        this.uuid = this.setId();
        this.ready = true; // change to false for deferred loads
    }

    /** 
     * Set a position for the object, also the position of the 
     * DOM representation of the object
     */
    setDOMPosition (position) {
        this.position = position;
        if (this.dom) {
            this.dom.style.top = position.top + 'px';
            this.dom.style.left = position.left + 'px';
        }
    }

    /** 
     * Set the object size, also its DOM size
     */
    setDOMSize (size) {
        this.size = size;
        if (this.dom) {
            this.dom.style.width = size.width + 'px';
            this.dom.style.height = size.height + 'px';
        }
    }

    /** 
     * Generate a unique ID for every game object.
     * @link http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    setId () {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    }

    /** 
     * Return the given name of this object
     */
    getName () {
        return this.name;
    }

    /** 
     * return the class of the object
     */
    getClass () {
        return this.constructor.name;
    }

    /** 
     * Return the unique id of this object.
     */
    getId () {
        return this.uuid;
    }

    /** 
     * Get the enclosing box outside the object for external collisions
     */
    getCollisionRect () {

    }

    /** 
     * Get the internal box when this object acts as a container for another
     */
    getBoundsRect () {

    }
	
	/** 
	 * Generic 'ready' function (e.g. for delayed asset loads)
	 */
	setReady (val) {
		this.ready = val;
	}

    /** 
     * Generic update (override)
     */
    update () {

    }

     /** 
      * generic draw (override)
      */
    draw () {

    }
}


