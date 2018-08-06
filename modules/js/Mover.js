/** 
 * @class Mover
 * @description update position of object being animated by Game.
 */
export default class Mover {

	constructor (gameObj) {
		this.obj = gameObj;

        // Character has reference to Game
        this.game = gameObj.game;

        // Movement types
        this.type = 0;
        this.SLEW = 1;
        this.RANDOM = 2;
        this.PINGPOING = 3;

        if (!this.game.soundPool) {
            console.warn('no sounds initialized. Game will play silently');
        }

	}

    /** 
     * @method truncator
     * @description truncate (not round) number to fixed number of decimals
     * @param Number num floating-point number
     * @param Integer decimals the number of decimals points to round to
     * @returns Number the truncated number
     */
    truncator (num, decimals) {    
        var numPower = Math.pow(10, decimals); // "numPowerConverter" might be better
        return ~~(num * numPower)/numPower;
    }

    /** 
     * @method randomizer
     * @description randomize a number
     */
    randomizer () {
        var d = performance.now();
        (d = parseInt(d) - d);
        d = this.truncator(d, 2) / 10;
        return d;
    }

    /** 
     * @method getCenter
     */
    getCenter (x, y, width, height) {
        return {
            x: x + (width/2),
            y: y + (height/2)
        }
    }

    /** 
     * @method initSlew
     * @description slew object horizontally with keypresses. Adds event 
     * listeners for keydown and keyup events. Used for 
     * Player characters moving horizontally in the PlayerArea
     */
	initSlew () {
        console.log('init Slew motion');
        this.type = this.SLEW;


        this.speed = 0;
        this.ticker = 0;
        this.lastDir = 1;

        // add bottom, right to make a Rect for the PlayerArea
        this.bounds = this.game.screens['game-screen'].playerAreas[0].position;
        this.bounds.width = this.game.screens['game-screen'].playerAreas[0].size.width;
        this.bounds.height = this.game.screens['game-screen'].playerAreas[0].size.height;
        this.bounds.bottom = this.bounds.top + this.bounds.height;
        this.bounds.right = this.bounds.left + this.bounds.width;

        this.image = this.obj.image;

        // toggle the position of the Player when kicking
        this.unKick = this.obj.position.top;
        this.inKick = this.obj.position.top - 6;

        // NOTE: Trump is added to Player in Collider

        // flag our initialization
        this.inited = true;

        // listen for user events
        document.addEventListener('keydown', 
            event => this.slew(event), false);

        document.addEventListener('keyup',
            event => this.unkick(event), false);
	}

    /** 
     * @method initRandomWalk
     * @description init random motions along a path from the 
     * top to the bottom of the screen. Used for 
     * Animal characters moving through the AnimalArea.
     * @param Number prefSpeed the speed of movement
     * @param String direction the direction the Animal ultimately moves, 
     * - 'top': overall movement up the screen
     * - 'left': overall movement to the screen left
     * - 'bottom': overall movement to the screen bottom (DEFAULT)
     * - 'right': overall movement to the screen right
     * - 'return': return immediately to the Cage area
     * - 'caged': stay in the Cage area
     */
    initRandomWalk (prefSpeed, direction) {
        console.log('init RandomWalk');
        this.type = this.RANDOM;

        this.speed = prefSpeed * this.timeStampRandom();
        this.delay = this.timeStampRandom() * 300;
        this.obj.direction = direction;
        this.counter = 0;
        this.delayCounter = 0;
        this.MAX = 30;
        this.MAX_DELAY = 300;

        // one-time play of Animal sound
        this.firstMove = true;

        // add bottom, right to make a Rect for the AnimalArea
        this.bounds = this.game.screens['game-screen'].animalAreas[0].position;
        this.bounds.width = this.game.screens['game-screen'].animalAreas[0].size.width;
        this.bounds.height = this.game.screens['game-screen'].animalAreas[0].size.height;
        this.bounds.bottom = this.bounds.top + this.bounds.height;
        this.bounds.right = this.bounds.left + this.bounds.width;

        // remember where we started (in the cage)
        this.startTop = this.obj.position.top;
        this.startLeft = this.obj.position.left;

        // cache position during new random moves
        this.newTop = 0, this.newLeft = 0;

        // get bottom and right from Character from its Image
        this.image = this.obj.image;

        // flag our initialization
        this.inited = true;
    }

    /** 
     * @method initPingPong
     * @description init a ping-pong style motion. Used for 
     * Trump characters moving through the AnimalArea.
     */
    initPingPong (prefSpeed) {
        console.log('init PingPong motion');
        this.type = this.PINGPONG;

        //Animal area
        // add bottom, right to make a Rect for the AnimalArea
        this.bounds = this.game.screens['game-screen'].animalAreas[0].position;
        this.bounds.width = this.game.screens['game-screen'].animalAreas[0].size.width;
        this.bounds.height = this.game.screens['game-screen'].animalAreas[0].size.height;
        this.bounds.bottom = this.bounds.top + this.bounds.height;
        this.bounds.right = this.bounds.left + this.bounds.width;

        this.obj.startTop = this.obj.position.top;

        // get bottom and right from Character from its Image
        this.image = this.obj.image;

        this.obj.speed = 0;
        this.obj.dx = 0;
        this.obj.dy = 0;

        // NOTE: Animals and Players are added to Trump in Collider

        // flag our initialization
        this.inited = true;
    }

	/** 
	 * @method slew 
	 * Move object slightly up for duration of space bar pressed down
     * Callback for keydown addEventListener
     * @param Event e the keydown event
     */
	slew (e) {
        switch (e.keyCode) {
            case 32:
            case 38:
                this.kick(e);
                e.preventDefault(); //prevent scroll
                break;
            case 37:
                this.speed++;
                this.ticker = 0;
                this.obj.position.left -= this.speed;
                this.lastDir = -1;
                e.preventDefault(); //prevent scroll
                break;
            case 39:
                this.speed++;
                this.ticker = 0;
                this.obj.position.left += this.speed;
                this.lastDir = 1;
                e.preventDefault(); //prevent scroll
                break;
            default:
                break;
        }
	}

    /** 
     * @method updateSlew
     * @description move back and forth horizontally, with a simple easing motion
     * when left and right arrow keys are pressed. Handle collisions with the left 
     * and right walls of the PlayerArea.
     * Call in an update function inside the Character, e.g. 
     * update () { updateRandomWalk(); }
     * The main Game object automatically finds and 'fires' update() function in 
     * all Characters.
     */
    updateSlew () {
        if (!this.inited) {
            console.error('Player Slew NOT initialized (did you leave out of constructor?)');
            return;
        }
        this.ticker++;
        if (this.speed > 0) {
            if (this.ticker > 10) {
                this.speed /= 2;
                if (this.speed < 1) {
                    this.speed = 0;
                }
            }
        }
        this.obj.position.left += (this.lastDir * this.speed);

        //check bounds
        if (this.bounds) {
            if (this.image.data) {
                var w = this.image.data.width;
                if (this.obj.position.left < this.bounds.left) {
                    this.lastDir = 1;
                    this.speed /= 1.2;
                    this.obj.position.left = this.bounds.left + (this.speed * 1.5);
                } else if (this.obj.position.left > this.bounds.right - w) {
                    this.lastDir = -1;
                    this.speed /= 1.2;
                    this.obj.position.left = this.bounds.right - w - (this.speed * 1.5);
                }
            }
        }
    }

    /** 
     * @method kick
     * @description if foot is near Trump, kick him into the Animal
     */
    kick (e) {
        //console.log('::::THIS TRUMP:::::' + this.obj.trump)
        this.obj.position.top = this.inKick;

        if (!this.obj.trump) {
            console.error('Error: missing collision matrix (did you include Collider?)');
            return;
        }

        // see if we're close enough to kick in the y axis
        var trumpYDist = this.obj.position.top - this.obj.trump.image.data.width - this.obj.trump.position.top;
        //console.log('trumpYDist:' + trumpYDist)

        // If Player is close in Y, and inside X range, kick the Trump into AnimalArea
        if (trumpYDist < 10) {

            // start the Trump moving, speed
            this.obj.trump.speed = 40;

            // if too close to left wall, pre-assign a value
            if (this.obj.trump.position.left < (this.bounds.left + 20)) {
                console.log(">>Trump: left bound correction")
                this.obj.trump.dx = -0.2;
                this.obj.trump.dy = 0.8;
                return;
            }

            // compute dx and dy for Trump
            var dist = (this.obj.position.left - this.obj.trump.position.left) / 50;
            if (Math.abs(dist) < 1.0) {
                var dx = dist;
                if(dx > 0.003 && dx < 0.8) {
                   this.obj.trump.dx = dx;
                    this.obj.trump.dy = 1.0 - dx;
                    // start the kicking sound
                } else if (dx < 0 && dx > -0.8) {
                   this.obj.trump.dx = dx;
                    this.obj.trump.dy = 1.0 + dx;
                } else if (Math.abs(dx) < 0.003) {
                    var d = this.randomizer();
                    d = d - this.randomizer();
                    this.obj.trump.dx = d;
                    this.obj.trump.dy = 1.0 + dx;
                    // start the kicking sound
                } else {
                    this.obj.trump.dx = 0;
                    this.obj.trump.dy = 0;
                }

                // start the kicking sound
                if (this.game.soundPool) {
                    this.game.soundPool.playSound('kick');
                }

            }
        }
    } // end of function

    /** 
     * @method unkick
     * @description set position of Player back to original
     */
    unkick (e) {
        switch (e.keyCode) {
            case 32:
            case 38:
                this.obj.position.top = this.unKick;
                break;
        }
    }

    /** 
     * @method timeStampRandom
     * @description randomize in a 10-fold range using window.performance
     */
	timeStampRandom () {
		var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
		var num = 'xxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random()*10)%10 | 0;
            d = Math.floor(d/10);
            return (c=='x' ? r : (r&0x3|0x8)).toString(10);
        });
      return num / 10000;
	}

	/**
	 * Returns a random number between min (inclusive) and max (exclusive)
	 * @link 
	 */
	getRandom(min, max) {
   	return Math.floor(Math.random() * (max - min + 1)) + min;
	}

    /** 
     * @method updateRandomWalk
     * @description generate a random walk, with one preferred direction, 
     * giving the meandering motion used by Animals. 
     * Call in an update function inside the Character, e.g. 
     * update () { updateRandomWalk(); }
     * The main Game object automatically finds and 'fires' update() function in 
     * all Characters.
     */
	updateRandomWalk () {
        if (!this.inited) {
            console.error('Animal RandomWalk NOT initialized (did you leave out of constructor?)');
            return;
        }
		this.counter++;
		this.delayCounter++;
		if (this.delayCounter < this.delay) {
			//console.log('delayCounter:' + this.delayCounter + ' MAX:' + this.MAX_DELAY);
			return;
		}

        // Play animal's opening sound ONCE at start of movement
        if (this.firstMove && this.game.soundPool) {
            this.game.soundPool.playSound(this.obj.constructor.name.toLowerCase(), 0.7);
            this.firstMove = false;
        }

        // compute dx and dy from random walk. store initial position
        this.oldLeft = this.obj.position.left;
        this.oldTop = this.obj.position.top;

        // this.obj.direction was set in initRandomWalk
		switch (this.obj.direction) {
			case 'top':
				this.obj.position.top -= (this.speed + (0.1 * this.getRandom(1, this.speed)));
				this.obj.position.left -= 10 * (this.getRandom(-this.speed, this.speed/2));
				break;
			case 'left':
				this.obj.position.left -= (this.speed + (0.5 * this.getRandom(0, this.speed)));
				this.obj.position.top += 10 *(this.getRandom(-this.speed, this.speed));
				break;
			case 'bottom':
 				if (this.counter > this.MAX) {
                    this.MAX = this.getRandom(2, 15);
					this.newLeft = (this.getRandom(-this.speed, this.speed));
					this.counter = 0;
				} else if (this.counter > this.MAX / 2) {
                    this.speed = this.getRandom(-0.2, 1.2) //NOTE: fine-tune this to make gameplay harder
				}
				this.obj.position.top += this.speed;
                var r = this.getRandom(-1, 1);
				this.obj.position.left -= r * this.newLeft;
				break;
			case 'right':
				this.obj.position.left += (this.speed + (0.5 * this.getRandom(0, this.speed)));
				this.obj.position.top += 10 * (this.getRandom(-this.speed, this.speed));
				break;
			case 'return':
                // This is caused by a Trump collider running into the Animal
                // TODO: return Animal to its cage
                this.obj.direction = 'caged';
                // TODO: write return arc
                break;
            case 'caged':
                this.obj.position.left = this.startLeft;
                this.obj.position.top = this.startTop;
                // TODO: when caged, reset until it is uncaged again
                break;
            default:
				console.error('Mover.setPrefDirection: invalid direction:' + this.obj.direction);
				break;
		}

        // Compute dx and dy for Animals
        var xdist = this.oldLeft - this.obj.position.left;
        var ydist = this.oldTop - this.obj.position.top;
        var sum = xdist + ydist;
        if (sum > 0.0001) {
            this.obj.dx = xdist / sum;
            this.obj.dy = ydist / sum;  
        } else {
            this.obj.dx = 0;
            this.obj.dy = 0;
        }

        // save our new position
        this.oldLeft = this.obj.position.left;
        this.oldTop = this.obj.position.top;

        //console.log(' dx:' + this.obj.dx + ' dy:' + this.obj.dy + ' sum:' + sum)
    }

    calculateCollision (trump, animal) {
        var w = this.obj.image.data.width;
        var h = this.obj.image.data.height;
        var aw = animal.image.data.width;
        var ah = animal.image.data.height;

        if (this.obj.position.left < animal.position.left + aw &&
            this.obj.position.left + w > animal.position.left &&
            this.obj.position.top < animal.position.top + ah &&
            this.obj.position.top + h > animal.position.top) { 
                
                //get Trump centeral point
                var tXCenter = this.obj.position.left + w/2;
                var tYCenter = this.obj.position.top  + h/2;

                //get Animal central point
                var aXCenter = animal.position.left + aw/2;
                var aYCenter = animal.position.top + ah/2;

                //compute x and y vector between centers
                var cXDiff = tXCenter - aXCenter;
                var cYDiff = tYCenter = aYCenter;

                // Trump doesn't react if not moving (even if animal does)
                if (trump.speed != 0 && trump.dx != 0 && trump.dy != 0) {

                    // move object so it isn't colliding anymore
                    if (cXDiff >= 0) {
                        trump.position.x += (cXDiff + 1);
                    } else {
                        trump.position.x -= (cXDiff + 1);
                    }

                    if (cYDiff >= 0) {
                        trump.position.y += (cYDiff + 1);
                    } else {
                        trump.position.y -= (cYDiff + 1);
                    }

                    // normalize new vectors
                    trump.dx = -cXDiff / cYDiff;
                    trump.dy = -cYDiff / cXDiff;

                    // rounding error
                    var ddif = Math.abs(trump.dx + trump.dy);
                    if (ddif > 1.0) {
                        if (trump.dx >= 0) {
                            trump.dy -= ddif;
                        } else {
                            trump.dy += ddif;
                        }
                    }
                } //end of Trump is moving
                //console.log('dx::::::' + trump.dx + ' dy::::::' + trump.dy)

            return true;                          
        }
        return false;
    }

    /** 
     * @method updatePingPong
     * @description move in a ping-pong style.
     * Call in an update function inside the Character, e.g. 
     * update () { updateRandomWalk(); }
     * The main Game object automatically finds and 'fires' update() function in 
     * all Characters.
     * Possible updates for motion:
     * 1. Collision with a Player (via kick() method) starts the Trump character moving
     * 2. Trump will bounce on all walls EXCEPT the bottom wall
     * 3. When the Trump intersects the bottom wall, they stop moving
     * 4. If they collide with an Animal, they bounce, and the Animal returns to its Cage.
     */
    updatePingPong () {

        if (!this.inited) {
            console.error('Trump PingPong NOT initialized (did you leave out of constructor?)');
            return;
        }
        //console.log('dx:' + this.obj.dx + ' dy:' + this.obj.dy);
        this.obj.position.left -= this.obj.speed * this.obj.dx;
        this.obj.position.top -= this.obj.speed * this.obj.dy;

        //check bounds (AnimalArea)
        if (this.bounds) {
            if (this.obj.image.data) {

                var w = this.obj.image.data.width;
                var h = this.obj.image.data.height;

                // catch cases where Trump gets into the Cage area
                if (this.obj.position.top < this.bounds.top) {
                    if (this.obj.dy > 0) {
                        this.obj.dy = -this.obj.dy;
                    } 
                    this.obj.position.top = this.bounds.top + 1;
                }

                // run this only if we are moving down the screen
                if (this.obj.dy < 0) {
                    if (this.obj.position.top > (this.obj.startTop - (this.obj.dy * this.obj.speed))) {
                        //this.obj.dy = -this.obj.dy;
                        this.obj.position.top = this.obj.startTop;
                        this.obj.dx = 0;
                        this.obj.dy = 0;
                    }
                    var dist = this.bounds.bottom - h - this.obj.position.top;
                    var spd = -this.obj.dy * this.obj.speed * 4;
                
                    // decelerate before stopping at bottom of AnimalArea
                    if (dist < spd && spd > 2) {
                        this.obj.speed /= 2;
                    }
                } //end of dy negative (going down)

                // bounce on the other 3 walls
                if (this.obj.position.left < this.bounds.left) {
                    this.obj.dx = -this.obj.dx;
                }
                if (this.obj.position.top < this.bounds.top) {
                    this.obj.dy = -this.obj.dy;
                }
                if (this.obj.position.left > this.bounds.right - w) {
                    this.obj.dx = -this.obj.dx;
                }

                // If we encounder an animal, bounce, AND 'kick' the animal back into its cage
                if (this.obj.animals) {
                    for (var i = 0, len = this.obj.animals.length; i < len; i++) {
                        var animal = this.obj.animals[i];
                        
                        if (this.calculateCollision(this.obj, animal)) {
                            //set the Animal's state to return home
                            console.log('>>>RETURNING ANIMAL TO CAGE')
                            animal.direction = 'return';
                            if (this.obj.speed < 2) {
                                this.obj.speed = 2;
                            }
                        }
                    }
                }
            }
        }

        //break out of horizontal move
        if (this.obj.dy < 0.001 && this.obj.dx > 0.001) {
            var d = this.randomizer();
            this.obj.dy += d - this.randomizer();
        }

    }

} // end of class
