(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

var _Mover = require('./Mover.js');

var _Mover2 = _interopRequireDefault(_Mover);

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Animal.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The critters that Trump tries to stop from getting the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Animal = function (_Character) {
  _inherits(Animal, _Character);

  function Animal(config) {
    _classCallCheck(this, Animal);

    // Animals get RandomWalk motion

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Animal).call(this, config));

    _this.mover.initRandomWalk(0.02, 'bottom');
    return _this;
  }

  _createClass(Animal, [{
    key: 'update',
    value: function update() {
      this.mover.updateRandomWalk();
    }
  }]);

  return Animal;
}(_Character3.default);

exports.default = Animal;

},{"./Character.js":7,"./Collider.js":8,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./Mover.js":21,"./StaticImage.js":28}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AnimalArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region animals move through to get to Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cage = function (_Area) {
  _inherits(Cage, _Area);

  function Cage(config) {
    _classCallCheck(this, Cage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cage).call(this, config));
  }

  return Cage;
}(_Area3.default);

exports.default = Cage;

},{"./Area.js":3,"./GamePiece.js":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Area.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A generic region of the game screen. Used to add visual objects, and 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * create bounds for collision detection.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Info, Image, StaticImage
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Area = function (_GamePiece) {
  _inherits(Area, _GamePiece);

  function Area(config) {
    _classCallCheck(this, Area);

    // create a <div>, add to DOM, with optional image

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, config));

    _this.addToDOM(config.name, config.container, config.path);

    // position with absolute coordinated
    _this.setDOMPosition(config.position); //inherited from GamePiece
    _this.setDOMSize(config.size);
    return _this;
  }

  // create DOM element, Load a background image, and insert into container


  _createClass(Area, [{
    key: 'addToDOM',
    value: function addToDOM(name, container, imgPath) {
      this.dom = document.createElement('div');
      this.dom.id = name + '-area';

      // position absolutely
      this.dom.style.position = 'absolute';

      // Don't allow padding or margins or borders for Areas
      this.dom.style.margin = '0px';
      this.dom.style.padding = '0px';

      // add to the DOM
      container.insertBefore(this.dom, container.childNodes[0]);

      // if we have an image, insert in element background
      if (imgPath) {

        this.image = new _StaticImage2.default({
          name: this.dom.id + '-image'
        });

        this.image.loadBackgroundImage(this.dom, imgPath);
      }
    }

    // bounds detector for supplied Character

  }]);

  return Area;
}(_GamePiece3.default);

exports.default = Area;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage2 = require('./StaticImage.js');

var _StaticImage3 = _interopRequireDefault(_StaticImage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Background.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game Logos, LogoTypes, Brand Name
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Background = function (_StaticImage) {
  _inherits(Background, _StaticImage);

  function Background(config) {
    _classCallCheck(this, Background);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Background).call(this, config));

    _this.setSource(config.source);
    _this.setAuthor(config.author);
    _this.loadBackgroundImage(config.domId, config.path);
    return _this;
  }

  return Background;
}(_StaticImage3.default);

exports.default = Background;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Bear.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Tiger, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Bear = function (_Animal) {
  _inherits(Bear, _Animal);

  function Bear(config) {
    _classCallCheck(this, Bear);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bear).call(this, config));
  }

  return Bear;
}(_Animal3.default);

exports.default = Bear;

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Cage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region where animals are caged.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Cage = function (_Area) {
  _inherits(Cage, _Area);

  function Cage(config) {
    _classCallCheck(this, Cage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Cage).call(this, config));
  }

  return Cage;
}(_Area3.default);

exports.default = Cage;

},{"./Area.js":3,"./GamePiece.js":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

var _Mover = require('./Mover.js');

var _Mover2 = _interopRequireDefault(_Mover);

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Character.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game-generated or user avatars. Characters are rendered in Canvas, but have their
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * position computed and updated outside canvas.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Character = function (_GamePiece) {
  _inherits(Character, _GamePiece);

  function Character(config) {
    _classCallCheck(this, Character);

    // Set position and size from configuration

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Character).call(this, config));

    _this.position = config.position;
    _this.size = config.size;

    // store a reference to the game object
    _this.game = config.game;

    _this.image = new _StaticImage2.default({
      name: config.name + '-image',
      path: config.path
    });

    //initialize a Mover object (animation)
    _this.mover = new _Mover2.default(_this);

    // Images don't automatically load when they're not attached to the DOM,
    // or a CSS background image
    _this.image.load(config.path, function () {
      console.log('loaded:' + config.name);
    });
    return _this;
  }

  // override default draw with our own


  _createClass(Character, [{
    key: 'draw',
    value: function draw(context) {
      if (this.image) {
        var img = this.image.data;
        console.log('drawing');
        if (img) {
          // draw image into HTML5 canvas
          context.drawImage(img, this.position.left, this.position.top);
        }
      }
    }
  }]);

  return Character;
}(_GamePiece3.default);

exports.default = Character;

},{"./Collider.js":8,"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./Mover.js":21,"./StaticImage.js":28}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Collider
 * @description create the collision matrix defining which objects can collide 
 * with which objects. Objects that can collide have their potential colliders 
 * added as references, e.g. Player.trump or Trump.player.
 * @param Array characterArray the array of Characters who might be involved 
 * in collisions.
 */

var Collider = function () {
  function Collider(characterArray) {
    _classCallCheck(this, Collider);

    this.characterArray = characterArray;
    this.animalArray = []; //filled up in setUpCollisions
    this.setUpCollisions();
  }

  _createClass(Collider, [{
    key: 'setUpCollisions',
    value: function setUpCollisions() {
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
  }]);

  return Collider;
}();

exports.default = Collider;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * DynamicText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text that can be changed by user (e.g. input field), or 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * updated by the game itself.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var DynamicText = function (_Text) {
  _inherits(DynamicText, _Text);

  function DynamicText(config) {
    _classCallCheck(this, DynamicText);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(DynamicText).call(this, config));
  }

  return DynamicText;
}(_Text3.default);

exports.default = DynamicText;

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * EndScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Ending screen for the game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits Screen, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var EndScreen = function (_Screen) {
  _inherits(EndScreen, _Screen);

  function EndScreen(config) {
    _classCallCheck(this, EndScreen);

    // load the background image

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EndScreen).call(this, config));

    _this.loadBackground('img/screens/end-screen.png');

    // Load EndScreen sub-objects
    _this.loadInputScore();
    _this.loadHighScores();

    // Bind "play again" and "instructions" buttons.
    _this.bindReplay();
    _this.bindInstructions();
    return _this;
  }

  _createClass(EndScreen, [{
    key: 'loadInputScore',
    value: function loadInputScore() {}
  }, {
    key: 'loadHighScores',
    value: function loadHighScores() {}
  }, {
    key: 'bindReplay',
    value: function bindReplay() {
      console.log("in bindStart, this.game:" + this.game);
      // we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
      document.querySelector('#end-screen-play-button').addEventListener('click', function (e) {
        //alert("in handler, game:" + this.game)
        e.preventDefault();
        this.game.startGame();
      }.bind(this));
    }
  }, {
    key: 'bindInstructions',
    value: function bindInstructions() {
      console.log("in bindStart, this.game:" + this.game);
      // we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
      document.querySelector('#end-screen-instructions-button').addEventListener('click', function (e) {
        //alert("in handler, game:" + this.game)
        e.preventDefault();
        this.game.loadGame();
      }.bind(this));
    }
  }]);

  return EndScreen;
}(_Screen3.default);

exports.default = EndScreen;

},{"./GamePiece.js":12,"./Screen.js":25}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('./EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('./Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _DynamicText = require('./DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Lion = require('./Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('./Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('./Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('./Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Health = require('./Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

var _Sounder = require('./Sounder.js');

var _Sounder2 = _interopRequireDefault(_Sounder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The entire Game object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


//Screen inheritance


//Info inheritance


//Character inheritance


//Area inheritance.


//import Collider and Sounder objetcs


var Game = function (_GamePiece) {
	_inherits(Game, _GamePiece);

	function Game(config) {
		_classCallCheck(this, Game);

		//game copyright

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Game).call(this, config));

		_this.warning = 'This game belongs to us, and nobody else.';

		//game reverts to StartScreen if unplayed
		_this.TIMEOUT = 5555;

		// define Id link to DOM
		_this.START_SCREEN_ID = 'start-screen';
		_this.GAME_SCREEN_ID = 'game-screen';
		_this.END_SCREEN_ID = 'end-screen';

		// model storage, screens
		_this.screens = [];

		// model storage, dynamic characters
		_this.displayCharacters = [];

		// initialize game, load start screen
		_this.init();

		return _this;
	} //end of constructor

	_createClass(Game, [{
		key: 'init',
		value: function init() {

			// Grab the HTML screen elements and encapsulate in a Screen class
			this.screens[this.START_SCREEN_ID] = new _StartScreen2.default({ name: 'Start Screen', id: this.START_SCREEN_ID, game: this });
			this.screens[this.GAME_SCREEN_ID] = new _GameScreen2.default({ name: 'Game Screen', id: this.GAME_SCREEN_ID, game: this });
			this.screens[this.END_SCREEN_ID] = new _EndScreen2.default({ name: 'End Screen', id: this.END_SCREEN_ID, game: this });

			// load the canvas
			this.loadCanvas();

			// make the start screen visible
			this.loadGame();
		}

		// get a reference to the HTML5 canvas context

	}, {
		key: 'loadCanvas',
		value: function loadCanvas() {
			this.canvas = document.querySelector('#game-screen-arena canvas');
			this.context = this.canvas.getContext("2d");
		}

		/**
   * Load Characters
   * dynamic Characters (e.g. those that animate) are loaded by Game.
   * Other static visual objects are loaded by Screen classes.
   */

	}, {
		key: 'loadPlayers',
		value: function loadPlayers() {
			this.displayCharacters.push(new _Player2.default({
				name: 'Player', position: { top: 510, left: 200 },
				path: 'img/players/player.png',
				game: this
			}));
		}
	}, {
		key: 'loadAnimals',
		value: function loadAnimals() {
			this.displayCharacters.push(new _Lion2.default({
				name: 'Lion',
				position: { top: 15, left: 94 },
				path: 'img/animals/lion.png',
				game: this
			}));
			this.displayCharacters.push(new _Tiger2.default({
				name: 'Tiger',
				position: { top: 15, left: 333 },
				path: 'img/animals/tiger.png',
				game: this
			}));
			this.displayCharacters.push(new _Bear2.default({
				name: 'Bear', position: { top: 15, left: 570 },
				path: 'img/animals/bear.png',
				game: this
			}));
			this.displayCharacters.push(new _Gorilla2.default({
				name: 'Gorilla', position: { top: 15, left: 812 },
				path: 'img/animals/gorilla.png',
				game: this
			}));
		}
	}, {
		key: 'loadTrumps',
		value: function loadTrumps() {
			this.displayCharacters.push(new _Trump2.default({
				name: 'Trump', position: { top: 450, left: 200 },
				path: 'img/trumps/trump.png',
				game: this
			}));
		}
	}, {
		key: 'loadGame',
		value: function loadGame() {

			//load Info assets

			console.log('loading splash screen');
			this.screens[this.END_SCREEN_ID].hideScreen();
			this.screens[this.START_SCREEN_ID].showScreen();
		}
	}, {
		key: 'startGame',
		value: function startGame() {

			//load Characters
			this.loadAnimals();
			this.loadPlayers();
			this.loadTrumps();

			// add collision matrix
			this.collider = new _Collider2.default(this.displayCharacters);
			//load audio samples
			this.soundPool = new _Sounder2.default();

			//load audio samples
			this.soundPool = new _Sounder2.default();
			this.soundPool.addSound('kick', 0.7);
			this.soundPool.addSound('lion', 0.7);
			this.soundPool.addSound('tiger', 0.7);
			this.soundPool.addSound('bear', 0.7);
			this.soundPool.addSound('gorilla', 0.7);

			//make GameScreen visible

			// initialize elapsed time
			this.startTime = new Date();

			// show GameScreen, hide others
			console.log('starting game');
			this.screens[this.START_SCREEN_ID].hideScreen();
			this.screens[this.END_SCREEN_ID].hideScreen();
			this.screens[this.GAME_SCREEN_ID].showScreen();
			this.gameLoop();
		}
	}, {
		key: 'endGame',
		value: function endGame() {

			console.log('ending game');

			// reset timer
			this.startTime = 0;

			// turn off animation
			cancelAnimationFrame(this.globalId);
			this.globalId = null;

			// go to end screen
			this.screens[this.GAME_SCREEN_ID].hideScreen();
			this.screens[this.END_SCREEN_ID].showScreen();
		}
	}, {
		key: 'elapsed',
		value: function elapsed() {

			// record time we have been in gameLoop
			this.endTime = new Date();

			// time difference in ms

			var timeDiff = (this.endTime - this.startTime) / 1000;

			// get seconds (Original had 'round' which incorrectly counts 0:28, 0:29, 1:30 ... 1:59, 1:0)
			return Math.round(timeDiff % 60);
		}
	}, {
		key: 'checkIfComplete',
		value: function checkIfComplete() {

			// game logic to see if the game should reset
			/////////////console.log('ELAPSED:' + this.elapsed());

			if (this.elapsed() > this.TIMEOUT) {
				// if idle too long, reset game to start
				return true;
			}

			return false;
		}
	}, {
		key: 'update',
		value: function update() {

			for (var i = 0, len = this.displayCharacters.length; i < len; i++) {

				var character = this.displayCharacters[i];

				switch (character.getClass()) {
					case 'Player':
					case 'Trump':
					case 'Lion':
					case 'Tiger':
					case 'Bear':
					case 'Gorilla':
					default:
						break;
				}

				character.update();
			}
		}
	}, {
		key: 'draw',
		value: function draw() {

			for (var i = 0, len = this.displayCharacters.length; i < len; i++) {
				this.displayCharacters[i].draw(this.context);
			}
		}
	}, {
		key: 'gameLoop',
		value: function gameLoop() {

			if (this.checkIfComplete()) {
				this.endGame();
				return;
			}
			this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.update();
			this.draw();

			//console.log('looping...')
			this.globalId = requestAnimationFrame(this.gameLoop.bind(this));
		}
	}]);

	return Game;
}(_GamePiece3.default);

exports.default = Game;

},{"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./Collider.js":8,"./DynamicText.js":9,"./EndScreen.js":10,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":25,"./Sounder.js":26,"./StartScreen.js":27,"./StaticText.js":29,"./Text.js":30,"./Tiger.js":31,"./Trump.js":32}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var GamePiece = function () {
  function GamePiece(config) {
    _classCallCheck(this, GamePiece);

    //TODO: use super();
    this.name = config.name;
    this.uuid = this.setId();
    this.ready = true; // change to false for deferred loads
  }

  /** 
   * Set a position for the object, also the position of the 
   * DOM representation of the object
   */


  _createClass(GamePiece, [{
    key: 'setDOMPosition',
    value: function setDOMPosition(position) {
      this.position = position;
      if (this.dom) {
        this.dom.style.top = position.top + 'px';
        this.dom.style.left = position.left + 'px';
      }
    }

    /** 
     * Set the object size, also its DOM size
     */

  }, {
    key: 'setDOMSize',
    value: function setDOMSize(size) {
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

  }, {
    key: 'setId',
    value: function setId() {
      var d = new Date().getTime();
      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
      }
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
      });
      return uuid;
    }

    /** 
     * Return the given name of this object
     */

  }, {
    key: 'getName',
    value: function getName() {
      return this.name;
    }

    /** 
     * return the class of the object
     */

  }, {
    key: 'getClass',
    value: function getClass() {
      return this.constructor.name;
    }

    /** 
     * Return the unique id of this object.
     */

  }, {
    key: 'getId',
    value: function getId() {
      return this.uuid;
    }

    /** 
     * Get the enclosing box outside the object for external collisions
     */

  }, {
    key: 'getCollisionRect',
    value: function getCollisionRect() {}

    /** 
     * Get the internal box when this object acts as a container for another
     */

  }, {
    key: 'getBoundsRect',
    value: function getBoundsRect() {}

    /** 
     * Generic 'ready' function (e.g. for delayed asset loads)
     */

  }, {
    key: 'setReady',
    value: function setReady(val) {
      this.ready = val;
    }

    /** 
     * Generic update (override)
     */

  }, {
    key: 'update',
    value: function update() {}

    /** 
     * generic draw (override)
     */

  }, {
    key: 'draw',
    value: function draw() {}
  }]);

  return GamePiece;
}();

exports.default = GamePiece;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * GameScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Main game screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var GameScreen = function (_Screen) {
  _inherits(GameScreen, _Screen);

  function GameScreen(config) {
    _classCallCheck(this, GameScreen);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GameScreen).call(this, config));

    _this.cages = [];
    _this.animalAreas = [];
    _this.playerAreas = [];

    //GameScreen should hide its local header and footer
    _this.hideHeader();
    _this.hideFooter();

    // load the background image
    _this.loadBackground('img/screens/game-screen.png');

    // get the section that has the canvas for overlay
    var arena = document.getElementById('game-screen-arena');

    // load sub-objects into the Arena
    _this.cages = _this.loadCages(arena, 'img/areas/cage.png');
    _this.animalArea = _this.loadAnimalArea();
    _this.playerArea = _this.loadPlayerArea();

    return _this;
  }

  _createClass(GameScreen, [{
    key: 'loadCages',
    value: function loadCages(container, imgPath) {
      // load 4 Cages
      this.cages.push(new _Cage2.default({
        name: 'lion-cage',
        position: { top: 0, left: 70 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'tiger-cage',
        position: { top: 0, left: 310 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'bear-cage',
        position: { top: 0, left: 550 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
      this.cages.push(new _Cage2.default({
        name: 'gorilla-cage',
        position: { top: 0, left: 790 },
        size: { width: 100, height: 100 },
        container: container,
        path: imgPath
      }));
    }
  }, {
    key: 'loadAnimalArea',
    value: function loadAnimalArea() {
      // load Animal movement area
      this.animalAreas.push(new _AnimalArea2.default({
        name: 'Zoo',
        position: { top: 104, left: 6 },
        size: { width: 970, height: 410 },
        container: this.dom,
        path: null
      }));
    }
  }, {
    key: 'loadPlayerArea',
    value: function loadPlayerArea() {
      // load the Player
      this.playerAreas.push(new _PlayerArea2.default({
        name: 'Player Area',
        position: { top: 514, left: 6 },
        size: { width: 970, height: 100 },
        container: this.dom,
        path: null
      }));
    }
  }]);

  return GameScreen;
}(_Screen3.default);

exports.default = GameScreen;

},{"./AnimalArea.js":2,"./Area.js":3,"./Cage.js":6,"./GamePiece.js":12,"./PlayerArea.js":23,"./Screen.js":25}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Gorilla.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Gorilla, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Gorilla = function (_Animal) {
  _inherits(Gorilla, _Animal);

  function Gorilla(config) {
    _classCallCheck(this, Gorilla);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Gorilla).call(this, config));
  }

  return Gorilla;
}(_Animal3.default);

exports.default = Gorilla;

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Health.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The critters that Trump tries to stop from getting the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Health = function (_Character) {
  _inherits(Health, _Character);

  function Health(config) {
    _classCallCheck(this, Health);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Health).call(this, config));
  }

  return Health;
}(_Character3.default);

exports.default = Health;

},{"./Character.js":7,"./GamePiece.js":12}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage2 = require('./StaticImage.js');

var _StaticImage3 = _interopRequireDefault(_StaticImage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Identity.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Game Logos, LogoTypes, Brand Name
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Identity = function (_StaticImage) {
	_inherits(Identity, _StaticImage);

	function Identity(config) {
		_classCallCheck(this, Identity);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Identity).call(this, config));

		_this.setSource(config.source);
		_this.setAuthor(config.author);
		_this.loadImageToDOM(config.domId, config.path);

		//Hide any <h2> text equivalent of identity in this CSS box
		var textIdentity = document.querySelector('#' + config.domId + ' h2');
		textIdentity.style.display = 'none';
		return _this;
	}

	return Identity;
}(_StaticImage3.default);

exports.default = Identity;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18,"./StaticImage.js":28}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info2 = require('./Info.js');

var _Info3 = _interopRequireDefault(_Info2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticImage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Image-style Information that cannot be changed once the game is loaded
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Image = function (_Info) {
	_inherits(Image, _Info);

	// save scope
	// TODO: refactor with arrow function

	function Image(config) {
		_classCallCheck(this, Image);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Image).call(this, config));

		_this.ready = false; //over-ride GamePiece and info with deferrals
		_this.image = null;
		_this.path = config.path;
		_this.author = config.author;
		_this.source = config.source;
		return _this;
	}

	// load an image


	_createClass(Image, [{
		key: 'load',
		value: function load(path, callback) {
			var that = this;
			that.setReady(false);
			console.log('entering load inImage');
			var img = document.createElement('img');
			img.src = path;
			img.onload = function () {
				console.log(that.name + ' image loaded from:' + path + ' w:' + img.width + ' h:' + img.height);
				that.setReady(true);
				that.data = img;

				if (callback) {
					callback();
				}
			};
			img.onerror = function (e) {
				console.log('error loading img from:' + path);
			};
		}

		// load image, append to existing DOM element
		// NOTE: this is over-written in Character.js, which loads images into Canvas

	}, {
		key: 'loadImageToDOM',
		value: function loadImageToDOM(domId, path, callback) {
			var that = this;
			this.load(path, function () {
				console.log('foreground image ' + path + ' loaded');
				document.getElementById(domId).appendChild(that.data);
				if (callback) {
					callback();
				}
			});
		}

		// load image as a CSS background image into existing DOM element.
		// NOTE: no local reference to image in this case

	}, {
		key: 'loadBackgroundImage',
		value: function loadBackgroundImage(container, path, callback) {
			console.log('loading background image:' + path);
			container.style.backgroundImage = 'url(' + path + ')';
			this.setReady(true);
			if (callback) {
				callback();
			}
		}

		// Draw the image to a supplied canvas context

	}, {
		key: 'drawToCanvas',
		value: function drawToCanvas(context, position, size) {
			context.drawImage(img, position.top, position.left, size.width, size.height);
		}

		// Draw to the DOM. Assume the Image was already attached to the DOM

	}, {
		key: 'drawToDOM',
		value: function drawToDOM(position, size) {
			this.image.style.top = position.top;
			this.image.style.left = position.left;
			this.image.style.width = size.width;
			this.image.style.height = size.height;
		}
	}]);

	return Image;
}(_Info3.default);

exports.default = Image;

},{"./GamePiece.js":12,"./Info.js":18}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Info.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic informaiton object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Info = function (_GamePiece) {
	_inherits(Info, _GamePiece);

	function Info(config) {
		_classCallCheck(this, Info);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Info).call(this, config));
	}

	_createClass(Info, [{
		key: 'setAuthor',
		value: function setAuthor(author) {
			this.author = author;
		}
	}, {
		key: 'setSource',
		value: function setSource(source) {
			this.source = source;
		}
	}]);

	return Info;
}(_GamePiece3.default);

exports.default = Info;

},{"./GamePiece.js":12}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText2 = require('./StaticText.js');

var _StaticText3 = _interopRequireDefault(_StaticText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Instructions.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text which tells the Player how to play the game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Instructions = function (_StaticText) {
  _inherits(Instructions, _StaticText);

  function Instructions(config) {
    _classCallCheck(this, Instructions);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Instructions).call(this, config));
  }

  return Instructions;
}(_StaticText3.default);

exports.default = Instructions;

},{"./GamePiece.js":12,"./Info.js":18,"./StaticText.js":29,"./Text.js":30}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Lion.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Lion, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Lion = function (_Animal) {
  _inherits(Lion, _Animal);

  function Lion(config) {
    _classCallCheck(this, Lion);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Lion).call(this, config));
  }

  return Lion;
}(_Animal3.default);

exports.default = Lion;

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * @class Mover
 * @description update position of object being animated by Game.
 */

var Mover = function () {
    function Mover(gameObj) {
        _classCallCheck(this, Mover);

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


    _createClass(Mover, [{
        key: 'truncator',
        value: function truncator(num, decimals) {
            var numPower = Math.pow(10, decimals); // "numPowerConverter" might be better
            return ~ ~(num * numPower) / numPower;
        }

        /** 
         * @method randomizer
         * @description randomize a number
         */

    }, {
        key: 'randomizer',
        value: function randomizer() {
            var d = performance.now();
            d = parseInt(d) - d;
            d = this.truncator(d, 2) / 10;
            return d;
        }

        /** 
         * @method getCenter
         */

    }, {
        key: 'getCenter',
        value: function getCenter(x, y, width, height) {
            return {
                x: x + width / 2,
                y: y + height / 2
            };
        }

        /** 
         * @method initSlew
         * @description slew object horizontally with keypresses. Adds event 
         * listeners for keydown and keyup events. Used for 
         * Player characters moving horizontally in the PlayerArea
         */

    }, {
        key: 'initSlew',
        value: function initSlew() {
            var _this = this;

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
            document.addEventListener('keydown', function (event) {
                return _this.slew(event);
            }, false);

            document.addEventListener('keyup', function (event) {
                return _this.unkick(event);
            }, false);
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

    }, {
        key: 'initRandomWalk',
        value: function initRandomWalk(prefSpeed, direction) {
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

    }, {
        key: 'initPingPong',
        value: function initPingPong(prefSpeed) {
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

    }, {
        key: 'slew',
        value: function slew(e) {
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

    }, {
        key: 'updateSlew',
        value: function updateSlew() {
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
            this.obj.position.left += this.lastDir * this.speed;

            //check bounds
            if (this.bounds) {
                if (this.image.data) {
                    var w = this.image.data.width;
                    if (this.obj.position.left < this.bounds.left) {
                        this.lastDir = 1;
                        this.speed /= 1.2;
                        this.obj.position.left = this.bounds.left + this.speed * 1.5;
                    } else if (this.obj.position.left > this.bounds.right - w) {
                        this.lastDir = -1;
                        this.speed /= 1.2;
                        this.obj.position.left = this.bounds.right - w - this.speed * 1.5;
                    }
                }
            }
        }

        /** 
         * @method kick
         * @description if foot is near Trump, kick him into the Animal
         */

    }, {
        key: 'kick',
        value: function kick(e) {
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
                if (this.obj.trump.position.left < this.bounds.left + 20) {
                    console.log(">>Trump: left bound correction");
                    this.obj.trump.dx = -0.2;
                    this.obj.trump.dy = 0.8;
                    return;
                }

                // compute dx and dy for Trump
                var dist = (this.obj.position.left - this.obj.trump.position.left) / 50;
                if (Math.abs(dist) < 1.0) {
                    var dx = dist;
                    if (dx > 0.003 && dx < 0.8) {
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

    }, {
        key: 'unkick',
        value: function unkick(e) {
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

    }, {
        key: 'timeStampRandom',
        value: function timeStampRandom() {
            var d = new Date().getTime();
            if (window.performance && typeof window.performance.now === "function") {
                d += performance.now(); //use high-precision timer if available
            }
            var num = 'xxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 10) % 10 | 0;
                d = Math.floor(d / 10);
                return (c == 'x' ? r : r & 0x3 | 0x8).toString(10);
            });
            return num / 10000;
        }

        /**
         * Returns a random number between min (inclusive) and max (exclusive)
         * @link 
         */

    }, {
        key: 'getRandom',
        value: function getRandom(min, max) {
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

    }, {
        key: 'updateRandomWalk',
        value: function updateRandomWalk() {
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
                    this.obj.position.top -= this.speed + 0.1 * this.getRandom(1, this.speed);
                    this.obj.position.left -= 10 * this.getRandom(-this.speed, this.speed / 2);
                    break;
                case 'left':
                    this.obj.position.left -= this.speed + 0.5 * this.getRandom(0, this.speed);
                    this.obj.position.top += 10 * this.getRandom(-this.speed, this.speed);
                    break;
                case 'bottom':
                    if (this.counter > this.MAX) {
                        this.MAX = this.getRandom(2, 15);
                        this.newLeft = this.getRandom(-this.speed, this.speed);
                        this.counter = 0;
                    } else if (this.counter > this.MAX / 2) {
                        this.speed = this.getRandom(-0.2, 1.2); //NOTE: fine-tune this to make gameplay harder
                    }
                    this.obj.position.top += this.speed;
                    var r = this.getRandom(-1, 1);
                    this.obj.position.left -= r * this.newLeft;
                    break;
                case 'right':
                    this.obj.position.left += this.speed + 0.5 * this.getRandom(0, this.speed);
                    this.obj.position.top += 10 * this.getRandom(-this.speed, this.speed);
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
    }, {
        key: 'calculateCollision',
        value: function calculateCollision(trump, animal) {
            var w = this.obj.image.data.width;
            var h = this.obj.image.data.height;
            var aw = animal.image.data.width;
            var ah = animal.image.data.height;

            if (this.obj.position.left < animal.position.left + aw && this.obj.position.left + w > animal.position.left && this.obj.position.top < animal.position.top + ah && this.obj.position.top + h > animal.position.top) {

                //get Trump centeral point
                var tXCenter = this.obj.position.left + w / 2;
                var tYCenter = this.obj.position.top + h / 2;

                //get Animal central point
                var aXCenter = animal.position.left + aw / 2;
                var aYCenter = animal.position.top + ah / 2;

                //compute x and y vector between centers
                var cXDiff = tXCenter - aXCenter;
                var cYDiff = tYCenter = aYCenter;

                // Trump doesn't react if not moving (even if animal does)
                if (trump.speed != 0 && trump.dx != 0 && trump.dy != 0) {

                    // move object so it isn't colliding anymore
                    if (cXDiff >= 0) {
                        trump.position.x += cXDiff + 1;
                    } else {
                        trump.position.x -= cXDiff + 1;
                    }

                    if (cYDiff >= 0) {
                        trump.position.y += cYDiff + 1;
                    } else {
                        trump.position.y -= cYDiff + 1;
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

    }, {
        key: 'updatePingPong',
        value: function updatePingPong() {

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
                        if (this.obj.position.top > this.obj.startTop - this.obj.dy * this.obj.speed) {
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
                                console.log('>>>RETURNING ANIMAL TO CAGE');
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
    }]);

    return Mover;
}(); // end of class


exports.default = Mover;

},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Player.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User-controlled Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Player = function (_Character) {
  _inherits(Player, _Character);

  function Player(config) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).call(this, config));

    _this.mover.initSlew(); //enables Player movement
    return _this;
  }

  _createClass(Player, [{
    key: 'update',
    value: function update() {
      this.mover.updateSlew(); //smooths motion, applies Collider
    }
  }]);

  return Player;
}(_Character3.default);

exports.default = Player;

},{"./Character.js":7,"./GamePiece.js":12}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Area2 = require('./Area.js');

var _Area3 = _interopRequireDefault(_Area2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * PlayerArea.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The region where the Player can move.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Area
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var PlayerArea = function (_Area) {
  _inherits(PlayerArea, _Area);

  function PlayerArea(config) {
    _classCallCheck(this, PlayerArea);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayerArea).call(this, config));
  }

  return PlayerArea;
}(_Area3.default);

exports.default = PlayerArea;

},{"./Area.js":3,"./GamePiece.js":12}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _DynamicText2 = require('./DynamicText.js');

var _DynamicText3 = _interopRequireDefault(_DynamicText2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Score.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Display user score
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits DynamicText, Text, Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Score = function (_DynamicText) {
  _inherits(Score, _DynamicText);

  function Score(config) {
    _classCallCheck(this, Score);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Score).call(this, config));
  }

  return Score;
}(_DynamicText3.default);

exports.default = Score;

},{"./DynamicText.js":9,"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece2 = require('./GamePiece.js');

var _GamePiece3 = _interopRequireDefault(_GamePiece2);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _StaticImage = require('./StaticImage.js');

var _StaticImage2 = _interopRequireDefault(_StaticImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Screen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Generic Screen object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Screen = function (_GamePiece) {
  _inherits(Screen, _GamePiece);

  function Screen(config) {
    _classCallCheck(this, Screen);

    //init 'parent' GamePiece

    // save a reference to our parent Game object

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Screen).call(this, config));

    _this.game = config.game;

    window.config = config; /////////////////////////DEBUG ONLY

    // Screens are defined in HTML, so save a reference to our DOM id
    _this.domId = config.id;

    // save a reference to the DOM element we're connected to
    _this.dom = document.getElementById(_this.domId);

    // insert the copyright info from the main Game object
    _this.addWarning();
    return _this;
  }

  // load a background image into the Screen


  _createClass(Screen, [{
    key: 'loadBackground',
    value: function loadBackground(path, callback) {
      console.log("loading:" + this.domId);
      this.backgroundImage = new _Image2.default({
        name: this.name + '-image',
        domId: this.id + '-image',
        path: path,
        callback: callback
      });
      this.backgroundImage.loadBackgroundImage(this.dom, path, callback);
    }

    // show and hide regions of the Screen

  }, {
    key: 'showScreen',
    value: function showScreen() {
      console.log("showing:" + this.domId);
      this.dom.style.display = "block";
    }
  }, {
    key: 'hideScreen',
    value: function hideScreen() {
      console.log("hiding:" + this.domId);
      this.dom.style.display = "none";
    }
  }, {
    key: 'showHeader',
    value: function showHeader() {
      this.dom.querySelector('.header').style.display = "block";
    }
  }, {
    key: 'hideHeader',
    value: function hideHeader() {
      this.dom.querySelector('.header').style.display = "none";
    }
  }, {
    key: 'showFooter',
    value: function showFooter() {
      this.dom.querySelector('.footer').style.display = "block";
    }
  }, {
    key: 'hideFooter',
    value: function hideFooter() {
      this.dom.querySelector('.footer').style.display = "none";
    }
  }, {
    key: 'addWarning',
    value: function addWarning() {
      this.dom.querySelector('.footer').innerHTML = this.game.warning;
    }
  }]);

  return Screen;
}(_GamePiece3.default);

exports.default = Screen;
;

},{"./GamePiece.js":12,"./Image.js":17,"./StaticImage.js":28}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Sounder = function () {
	function Sounder() {
		_classCallCheck(this, Sounder);

		// Create an array of loaded sounds
		this.path = 'audio/';

		this.sounds = [];
		this.checkAudio();
	}

	/** 
  * @method checkAudio
  * @description see which audio file formats can be played by the browser.
  */


	_createClass(Sounder, [{
		key: 'checkAudio',
		value: function checkAudio() {
			var elem = document.createElement('audio');
			var bool = false;

			try {
				if (bool = !!elem.canPlayType) {
					bool = new Boolean(bool);
					bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
					bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');
					bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
					bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
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

	}, {
		key: 'setSound',
		value: function setSound(e, name, volume) {
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

	}, {
		key: 'soundError',
		value: function soundError(e, name) {
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

	}, {
		key: 'addSound',
		value: function addSound(name, volume) {
			var _this = this;

			if (!name) {
				console.error('tried to load audio file without a name and/or path, aborting');
				return;
			}
			// try creating the sound
			var snd;
			// get the extension and remaining path
			for (var i in this.type) {
				console.log('this.type[' + i + ']=' + this.type[i]);
				if (this.type[i] != "") {
					//returned dataType for elem.canPlayType(...)

					var filePath = this.path + name + '.' + i;
					console.log("TRYING TO LOAD:" + this.path + name + '.' + i);

					// Create the Audio object
					snd = new Audio(filePath);

					// trap load and error events
					snd.addEventListener('loadeddata', function (event) {
						return _this.setSound(event, name, volume);
					}, false);

					snd.addEventListener('error', function (event) {
						return _this.soundError(event, name);
					}, false);

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

	}, {
		key: 'playSound',
		value: function playSound(name) {
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

	}, {
		key: 'fileExists',
		value: function fileExists(url) {
			var xhr = new XMLHttpRequest();
			xhr.open('HEAD', url, false);
			xhr.send();
			if (xhr.status == '404') {
				return false;
			} else {
				return true;
			}
		}
	}]);

	return Sounder;
}(); // end of class


exports.default = Sounder;

},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Image = require('./Image.js');

var _Image2 = _interopRequireDefault(_Image);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Background = require('./Background.js');

var _Background2 = _interopRequireDefault(_Background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StartScreen.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Opening screen for game.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Screen
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StartScreen = function (_Screen) {
	_inherits(StartScreen, _Screen);

	function StartScreen(config) {
		_classCallCheck(this, StartScreen);

		// this.dom defined in Screen

		// Load StartScreen sub-objects

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StartScreen).call(this, config));

		_this.loadBackground('img/screens/start-screen.png');

		// load identity image
		_this.loadIdentity();

		// load instructions
		_this.loadInstructions();

		// Make the start button open the main game screen
		_this.bindStart();
		return _this;
	}

	_createClass(StartScreen, [{
		key: 'loadIdentity',
		value: function loadIdentity() {
			this.identity = new _Identity2.default({
				name: 'identity',
				domId: 'start-screen-identity',
				path: 'img/identity/logo.png',
				author: 'pete markiewicz',
				source: 'plyojump'
			});

			// set position of Identity
			this.identity.setDOMPosition({
				top: 0,
				left: 0
			});
		}
	}, {
		key: 'loadInstructions',
		value: function loadInstructions() {

			this.instructions = new _StaticText2.default({
				name: 'game instructions',
				domId: 'instructions',
				text: 'Play to win. That is all Trump cares about, and so should you.'
			});

			this.instructions.setDOMPosition({
				top: 0,
				left: 0
			});
		}
	}, {
		key: 'bindStart',
		value: function bindStart() {
			console.log("in bindStart, this.game:" + this.game);
			// we use bind() to link the function below to StartScreen (otherwise, it thinks it is inside window)
			document.querySelector('#start-screen-play-button').addEventListener('click', function (e) {
				//alert("in handler, game:" + this.game)
				e.preventDefault();
				this.game.startGame();
			}.bind(this));
		}
	}]);

	return StartScreen;
}(_Screen3.default);

exports.default = StartScreen;

},{"./Background.js":4,"./GamePiece.js":12,"./Identity.js":16,"./Image.js":17,"./Info.js":18,"./Screen.js":25,"./StaticText.js":29,"./Text.js":30}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Image2 = require('./Image.js');

var _Image3 = _interopRequireDefault(_Image2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticImage.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Image-style Information that cannot be changed once the game is loaded
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StaticImage = function (_Image) {
  _inherits(StaticImage, _Image);

  function StaticImage(config) {
    _classCallCheck(this, StaticImage);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StaticImage).call(this, config));

    _this.static = true;
    return _this;
  }

  return StaticImage;
}(_Image3.default);

exports.default = StaticImage;

},{"./GamePiece.js":12,"./Image.js":17,"./Info.js":18}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text2 = require('./Text.js');

var _Text3 = _interopRequireDefault(_Text2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * StaticText.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text that cannot be changed after loaded by the game
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var StaticText = function (_Text) {
  _inherits(StaticText, _Text);

  function StaticText(config) {
    _classCallCheck(this, StaticText);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(StaticText).call(this, config));

    _this.static = true;

    return _this;
  }

  return StaticText;
}(_Text3.default);

exports.default = StaticText;

},{"./GamePiece.js":12,"./Info.js":18,"./Text.js":30}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Info2 = require('./Info.js');

var _Info3 = _interopRequireDefault(_Info2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Text.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Creates a text-type Info object
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits Info, GamePiece
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Text = function (_Info) {
  _inherits(Text, _Info);

  function Text(config) {
    _classCallCheck(this, Text);

    // set the text

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Text).call(this, config));

    _this.setText(config.text);

    // set the DOMId
    _this.addToDOM(config.domId);
    return _this;
  }

  _createClass(Text, [{
    key: 'setText',
    value: function setText(txt) {
      this.text = txt;
    }
  }, {
    key: 'addToDOM',
    value: function addToDOM(domId) {

      this.dom = document.createElement('div');
      this.dom.id = name + '-Text';
      this.dom.innerHTML = this.text;

      // container
      var container = document.getElementById(domId);

      // add to the DOM
      container.insertBefore(this.dom, container.childNodes[0]);
    }
  }]);

  return Text;
}(_Info3.default);

exports.default = Text;

},{"./GamePiece.js":12,"./Info.js":18}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Animal2 = require('./Animal.js');

var _Animal3 = _interopRequireDefault(_Animal2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Tiger.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A Tiger, who tries to get the Player.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Tiger = function (_Animal) {
  _inherits(Tiger, _Animal);

  function Tiger(config) {
    _classCallCheck(this, Tiger);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tiger).call(this, config));
  }

  return Tiger;
}(_Animal3.default);

exports.default = Tiger;

},{"./Animal.js":1,"./Character.js":7,"./GamePiece.js":12}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Character2 = require('./Character.js');

var _Character3 = _interopRequireDefault(_Character2);

var _Mover = require('./Mover.js');

var _Mover2 = _interopRequireDefault(_Mover);

var _Collider = require('./Collider.js');

var _Collider2 = _interopRequireDefault(_Collider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Trump.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The ball-like Character you kick into Animals
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @inherits GamePiece, Character
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Trump = function (_Character) {
  _inherits(Trump, _Character);

  function Trump(config) {
    _classCallCheck(this, Trump);

    //Trump gets PingPong motion

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Trump).call(this, config));

    _this.mover.initPingPong(0, _this); //pingpong won't start yet
    return _this;
  }

  _createClass(Trump, [{
    key: 'update',
    value: function update() {
      this.mover.updatePingPong(); //allows pingpong motion
    }
  }]);

  return Trump;
}(_Character3.default);

exports.default = Trump;

},{"./Character.js":7,"./Collider.js":8,"./GamePiece.js":12,"./Mover.js":21}],33:[function(require,module,exports){
'use strict';

var _GamePiece = require('./GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Game = require('./Game.js');

var _Game2 = _interopRequireDefault(_Game);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('./StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('./GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('./EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('./Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('./Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('./StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('./Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('./Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _DynamicText = require('./DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Character = require('./Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('./Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('./Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Lion = require('./Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('./Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('./Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('./Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Health = require('./Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Area = require('./Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('./Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('./AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('./PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

var _Tests = require('../../tests/Tests.js');

var _Tests2 = _interopRequireDefault(_Tests);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Set up tests.
 */


//Character inheritance


//The entire game
var myTests = new _Tests2.default();

/**
 * Set up the Game
 */


//Test file (very simple testrunner)


//Area inheritance.


//Info inheritance


//Screen inheritance
/**
 * Create the game. Import the primary classes, and 'composite'
 * the overall Game object out of instances of the classes.
 */
var myGame = new _Game2.default({ name: "ZooKillSoccer" });

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

console.log('ZOOKILLSOCCER Game initialized. Access game via "game". Use Tests.run() to test.');

},{"../../tests/Tests.js":34,"./Animal.js":1,"./AnimalArea.js":2,"./Area.js":3,"./Bear.js":5,"./Cage.js":6,"./Character.js":7,"./DynamicText.js":9,"./EndScreen.js":10,"./Game.js":11,"./GamePiece.js":12,"./GameScreen.js":13,"./Gorilla.js":14,"./Health.js":15,"./Identity.js":16,"./Info.js":18,"./Instructions.js":19,"./Lion.js":20,"./Player.js":22,"./PlayerArea.js":23,"./Score.js":24,"./Screen.js":25,"./StartScreen.js":27,"./StaticText.js":29,"./Text.js":30,"./Tiger.js":31,"./Trump.js":32}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

//The entire game


//Screen inheritance


//Info inheritance


//Character inheritance


//Area inheritance.


var _GamePiece = require('../modules/js/GamePiece.js');

var _GamePiece2 = _interopRequireDefault(_GamePiece);

var _Game = require('../modules/js/Game.js');

var _Game2 = _interopRequireDefault(_Game);

var _Screen = require('../modules/js/Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _StartScreen = require('../modules/js/StartScreen.js');

var _StartScreen2 = _interopRequireDefault(_StartScreen);

var _GameScreen = require('../modules/js/GameScreen.js');

var _GameScreen2 = _interopRequireDefault(_GameScreen);

var _EndScreen = require('../modules/js/EndScreen.js');

var _EndScreen2 = _interopRequireDefault(_EndScreen);

var _Info = require('../modules/js/Info.js');

var _Info2 = _interopRequireDefault(_Info);

var _Text = require('../modules/js/Text.js');

var _Text2 = _interopRequireDefault(_Text);

var _StaticText = require('../modules/js/StaticText.js');

var _StaticText2 = _interopRequireDefault(_StaticText);

var _Identity = require('../modules/js/Identity.js');

var _Identity2 = _interopRequireDefault(_Identity);

var _Instructions = require('../modules/js/Instructions.js');

var _Instructions2 = _interopRequireDefault(_Instructions);

var _DynamicText = require('../modules/js/DynamicText.js');

var _DynamicText2 = _interopRequireDefault(_DynamicText);

var _Score = require('../modules/js/Score.js');

var _Score2 = _interopRequireDefault(_Score);

var _Character = require('../modules/js/Character.js');

var _Character2 = _interopRequireDefault(_Character);

var _Trump = require('../modules/js/Trump.js');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('../modules/js/Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Animal = require('../modules/js/Animal.js');

var _Animal2 = _interopRequireDefault(_Animal);

var _Lion = require('../modules/js/Lion.js');

var _Lion2 = _interopRequireDefault(_Lion);

var _Tiger = require('../modules/js/Tiger.js');

var _Tiger2 = _interopRequireDefault(_Tiger);

var _Bear = require('../modules/js/Bear.js');

var _Bear2 = _interopRequireDefault(_Bear);

var _Gorilla = require('../modules/js/Gorilla.js');

var _Gorilla2 = _interopRequireDefault(_Gorilla);

var _Health = require('../modules/js/Health.js');

var _Health2 = _interopRequireDefault(_Health);

var _Area = require('../modules/js/Area.js');

var _Area2 = _interopRequireDefault(_Area);

var _Cage = require('../modules/js/Cage.js');

var _Cage2 = _interopRequireDefault(_Cage);

var _AnimalArea = require('../modules/js/AnimalArea.js');

var _AnimalArea2 = _interopRequireDefault(_AnimalArea);

var _PlayerArea = require('../modules/js/PlayerArea.js');

var _PlayerArea2 = _interopRequireDefault(_PlayerArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** 
 * TESTBED - Test all our objects. This is a very basic testing system. 
 * NOTE: Professional code uses testing libraries like Karma and Mocha.
 */

var Tests = function () {
	function Tests() {
		_classCallCheck(this, Tests);
	}

	// Because we make these objects with 'var' they are scoped to the run() function.


	_createClass(Tests, [{
		key: 'run',
		value: function run() {

			var config = { name: 'Forest Trump or Donald Gump rulz' };

			// Make some test game objects
			var game = new _Game2.default(config);
			console.log(game.getName());

			//test Game Object
			var myGame = new _Game2.default({ name: "ZooKillSoccer" });
			console.log(myGame.getName());

			//other objects
			var myScreen = new _Screen2.default({ name: "Opening Screen" });
			console.log(myScreen.getName());

			var myStartScreen = new _StartScreen2.default({ name: "Start Screen" });
			console.log(myStartScreen.getName());

			var myGameScreen = new _GameScreen2.default({ name: "Game Screen" });
			console.log(myGameScreen.getName());

			var myEndScreen = new _EndScreen2.default({ name: "End Screen" });
			console.log(myEndScreen.getName());

			var myInfo = new _Info2.default({ name: "Generic Information" });
			console.log(myInfo.getName());

			var myText = new _Text2.default({ name: "Generic Text Object" });
			console.log(myText.getName());

			var myStaticText = new _StaticText2.default({ name: "Generic Static Text Object" });
			console.log(myStaticText.getName());

			var myIdentity = new _Identity2.default({ name: "Generic Identity Object" });
			console.log(myIdentity.getName());

			var myInstructions = new _Instructions2.default({ name: "Generic Instructions Object" });
			console.log(myInstructions.getName());

			var myDynamicText = new _DynamicText2.default({ name: "Generic Dynamic Text Object" });
			console.log(myDynamicText.getName());

			var myScore = new _Score2.default({ name: "scores..." });
			console.log(myScore.getName());

			var myCharacter = new _Character2.default({ name: "Generic Character" });
			console.log(myCharacter.getName());

			var myTrump = new _Trump2.default({ name: "Donald Trump" });
			console.log(myTrump.getName());

			var myPlayer = new _Player2.default({ name: "End User" });
			console.log(myPlayer.getName());

			var myAnimal = new _Animal2.default({ name: "Generic Animal" });
			console.log(myAnimal.getName());

			var myLion = new _Lion2.default({ name: "Cowardly the Lion" });
			console.log(myLion.getName());

			var myTiger = new _Tiger2.default({ name: "Chomper the Tiger" });
			console.log(myTiger.getName());

			var myBear = new _Bear2.default({ name: "Mauler the Bear" });
			console.log(myBear.getName());

			var myGorilla = new _Gorilla2.default({ name: "Spunky the Gorilla" });
			console.log(myGorilla.getName());

			var myHealth = new _Health2.default({ name: "One Health Kit" });
			console.log(myHealth.getName());

			//Area inheritance.
			var myArea = new _Area2.default({ name: "Generic Area" });
			console.log(myArea.getName());

			var myCage = new _Cage2.default({ name: "Generic Area" });
			console.log(myCage.getName());

			var myAnimalArea = new _AnimalArea2.default({ name: "AnimalArea" });
			console.log(myAnimalArea.getName());

			var myPlayerArea = new _PlayerArea2.default({ name: "PlayerArea" });
			console.log(myPlayerArea.getName());
		}
	}]);

	return Tests;
}();

exports.default = Tests;

},{"../modules/js/Animal.js":1,"../modules/js/AnimalArea.js":2,"../modules/js/Area.js":3,"../modules/js/Bear.js":5,"../modules/js/Cage.js":6,"../modules/js/Character.js":7,"../modules/js/DynamicText.js":9,"../modules/js/EndScreen.js":10,"../modules/js/Game.js":11,"../modules/js/GamePiece.js":12,"../modules/js/GameScreen.js":13,"../modules/js/Gorilla.js":14,"../modules/js/Health.js":15,"../modules/js/Identity.js":16,"../modules/js/Info.js":18,"../modules/js/Instructions.js":19,"../modules/js/Lion.js":20,"../modules/js/Player.js":22,"../modules/js/PlayerArea.js":23,"../modules/js/Score.js":24,"../modules/js/Screen.js":25,"../modules/js/StartScreen.js":27,"../modules/js/StaticText.js":29,"../modules/js/Text.js":30,"../modules/js/Tiger.js":31,"../modules/js/Trump.js":32}]},{},[33])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQW5pbWFsQXJlYS5qcyIsIm1vZHVsZXMvanMvQXJlYS5qcyIsIm1vZHVsZXMvanMvQmFja2dyb3VuZC5qcyIsIm1vZHVsZXMvanMvQmVhci5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvQ2hhcmFjdGVyLmpzIiwibW9kdWxlcy9qcy9Db2xsaWRlci5qcyIsIm1vZHVsZXMvanMvRHluYW1pY1RleHQuanMiLCJtb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvR2FtZS5qcyIsIm1vZHVsZXMvanMvR2FtZVBpZWNlLmpzIiwibW9kdWxlcy9qcy9HYW1lU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Hb3JpbGxhLmpzIiwibW9kdWxlcy9qcy9IZWFsdGguanMiLCJtb2R1bGVzL2pzL0lkZW50aXR5LmpzIiwibW9kdWxlcy9qcy9JbWFnZS5qcyIsIm1vZHVsZXMvanMvSW5mby5qcyIsIm1vZHVsZXMvanMvSW5zdHJ1Y3Rpb25zLmpzIiwibW9kdWxlcy9qcy9MaW9uLmpzIiwibW9kdWxlcy9qcy9Nb3Zlci5qcyIsIm1vZHVsZXMvanMvUGxheWVyLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzIiwibW9kdWxlcy9qcy9TY29yZS5qcyIsIm1vZHVsZXMvanMvU2NyZWVuLmpzIiwibW9kdWxlcy9qcy9Tb3VuZGVyLmpzIiwibW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyIsIm1vZHVsZXMvanMvU3RhdGljSW1hZ2UuanMiLCJtb2R1bGVzL2pzL1N0YXRpY1RleHQuanMiLCJtb2R1bGVzL2pzL1RleHQuanMiLCJtb2R1bGVzL2pzL1RpZ2VyLmpzIiwibW9kdWxlcy9qcy9UcnVtcC5qcyIsIm1vZHVsZXMvanMvaW5kZXguanMiLCJ0ZXN0cy9UZXN0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoi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Ozs7Ozs7a0JBM0ZtQixLIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQW5pbWFsLmpzXG4gKiBUaGUgY3JpdHRlcnMgdGhhdCBUcnVtcCB0cmllcyB0byBzdG9wIGZyb20gZ2V0dGluZyB0aGUgUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQ2hhcmFjdGVyXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcblxuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuIGltcG9ydCBNb3ZlciBmcm9tICcuL01vdmVyLmpzJztcbiBpbXBvcnQgQ29sbGlkZXIgZnJvbSAnLi9Db2xsaWRlci5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBbmltYWwgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gICAgLy8gQW5pbWFscyBnZXQgUmFuZG9tV2FsayBtb3Rpb25cbiAgIHRoaXMubW92ZXIuaW5pdFJhbmRvbVdhbGsoMC4wMiwgJ2JvdHRvbScpO1xuIFx0fVxuICBcbiAgdXBkYXRlICgpIHtcbiBcdHRoaXMubW92ZXIudXBkYXRlUmFuZG9tV2FsaygpO1xuICB9XG4gfVxuIiwiLyoqIFxuICogQW5pbWFsQXJlYS5qc1xuICogVGhlIHJlZ2lvbiBhbmltYWxzIG1vdmUgdGhyb3VnaCB0byBnZXQgdG8gUGxheWVyLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgQXJlYVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBBcmVhIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIEFyZWEuanNcbiAqIEEgZ2VuZXJpYyByZWdpb24gb2YgdGhlIGdhbWUgc2NyZWVuLiBVc2VkIHRvIGFkZCB2aXN1YWwgb2JqZWN0cywgYW5kIFxuICogY3JlYXRlIGJvdW5kcyBmb3IgY29sbGlzaW9uIGRldGVjdGlvbi5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEluZm8sIEltYWdlLCBTdGF0aWNJbWFnZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBBcmVhIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdC8vIGNyZWF0ZSBhIDxkaXY+LCBhZGQgdG8gRE9NLCB3aXRoIG9wdGlvbmFsIGltYWdlXG4gXHRcdHRoaXMuYWRkVG9ET00oY29uZmlnLm5hbWUsIGNvbmZpZy5jb250YWluZXIsIGNvbmZpZy5wYXRoKTtcblxuIFx0XHQvLyBwb3NpdGlvbiB3aXRoIGFic29sdXRlIGNvb3JkaW5hdGVkXG4gXHRcdHRoaXMuc2V0RE9NUG9zaXRpb24oY29uZmlnLnBvc2l0aW9uKTsgLy9pbmhlcml0ZWQgZnJvbSBHYW1lUGllY2VcbiBcdFx0dGhpcy5zZXRET01TaXplKGNvbmZpZy5zaXplKTtcbiBcdH1cblxuIFx0Ly8gY3JlYXRlIERPTSBlbGVtZW50LCBMb2FkIGEgYmFja2dyb3VuZCBpbWFnZSwgYW5kIGluc2VydCBpbnRvIGNvbnRhaW5lclxuIFx0YWRkVG9ET00gKG5hbWUsIGNvbnRhaW5lciwgaW1nUGF0aCkge1xuIFx0XHR0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuIFx0XHR0aGlzLmRvbS5pZCA9IG5hbWUgKyAnLWFyZWEnO1xuXG4gXHRcdC8vIHBvc2l0aW9uIGFic29sdXRlbHlcbiBcdFx0dGhpcy5kb20uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuXG4gXHRcdC8vIERvbid0IGFsbG93IHBhZGRpbmcgb3IgbWFyZ2lucyBvciBib3JkZXJzIGZvciBBcmVhc1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5tYXJnaW4gPSAnMHB4JztcbiBcdFx0dGhpcy5kb20uc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuXG4gXHRcdC8vIGFkZCB0byB0aGUgRE9NXG4gXHRcdGNvbnRhaW5lci5pbnNlcnRCZWZvcmUodGhpcy5kb20sIGNvbnRhaW5lci5jaGlsZE5vZGVzWzBdKTtcblxuIFx0XHQvLyBpZiB3ZSBoYXZlIGFuIGltYWdlLCBpbnNlcnQgaW4gZWxlbWVudCBiYWNrZ3JvdW5kXG4gXHRcdGlmIChpbWdQYXRoKSB7XG5cbiBcdFx0XHR0aGlzLmltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiB0aGlzLmRvbS5pZCArICctaW1hZ2UnXG4gXHRcdFx0XHR9XG4gXHRcdFx0KTtcblxuIFx0XHRcdHRoaXMuaW1hZ2UubG9hZEJhY2tncm91bmRJbWFnZSAodGhpcy5kb20sIGltZ1BhdGgpO1xuIFx0XHR9XG5cbiBcdH1cblxuIFx0Ly8gYm91bmRzIGRldGVjdG9yIGZvciBzdXBwbGllZCBDaGFyYWN0ZXJcblxuXG4gfSIsIi8qKiBcbiAqIEJhY2tncm91bmQuanNcbiAqIEdhbWUgTG9nb3MsIExvZ29UeXBlcywgQnJhbmQgTmFtZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIGV4dGVuZHMgU3RhdGljSW1hZ2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zZXRTb3VyY2UoY29uZmlnLnNvdXJjZSk7XG5cdFx0dGhpcy5zZXRBdXRob3IoY29uZmlnLmF1dGhvcik7XG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZEltYWdlKGNvbmZpZy5kb21JZCwgY29uZmlnLnBhdGgpO1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIEJlYXIuanNcbiAqIEEgVGlnZXIsIHdobyB0cmllcyB0byBnZXQgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG4gaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBCZWFyIGV4dGVuZHMgQW5pbWFsIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcbiBcdH1cblxuXG4gfSIsIi8qKiBcbiAqIENhZ2UuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgYW5pbWFscyBhcmUgY2FnZWQuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBBcmVhXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgQXJlYSBmcm9tICcuL0FyZWEuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FnZSBleHRlbmRzIEFyZWEge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cbiBcdFx0c3VwZXIoY29uZmlnKTtcblxuIFx0fVxuXG4gfSIsIi8qKlxuICogQ2hhcmFjdGVyLmpzXG4gKiBHYW1lLWdlbmVyYXRlZCBvciB1c2VyIGF2YXRhcnMuIENoYXJhY3RlcnMgYXJlIHJlbmRlcmVkIGluIENhbnZhcywgYnV0IGhhdmUgdGhlaXJcbiAqIHBvc2l0aW9uIGNvbXB1dGVkIGFuZCB1cGRhdGVkIG91dHNpZGUgY2FudmFzLlxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG5cbiBpbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9TdGF0aWNJbWFnZS5qcyc7XG5cbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcblxuIFx0XHQvLyBTZXQgcG9zaXRpb24gYW5kIHNpemUgZnJvbSBjb25maWd1cmF0aW9uXG4gXHRcdHRoaXMucG9zaXRpb24gPSBjb25maWcucG9zaXRpb247XG4gXHRcdHRoaXMuc2l6ZSA9IGNvbmZpZy5zaXplO1xuXG4gXHRcdC8vIHN0b3JlIGEgcmVmZXJlbmNlIHRvIHRoZSBnYW1lIG9iamVjdFxuIFx0XHR0aGlzLmdhbWUgPSBjb25maWcuZ2FtZTtcblxuIFx0XHR0aGlzLmltYWdlID0gbmV3IFN0YXRpY0ltYWdlKFxuIFx0XHRcdHtcbiBcdFx0XHRcdG5hbWU6IGNvbmZpZy5uYW1lICsgJy1pbWFnZScsXG4gXHRcdFx0XHRwYXRoOiBjb25maWcucGF0aFxuIFx0XHRcdH1cbiBcdFx0KTtcblxuICAgIC8vaW5pdGlhbGl6ZSBhIE1vdmVyIG9iamVjdCAoYW5pbWF0aW9uKVxuICAgIHRoaXMubW92ZXIgPSBuZXcgTW92ZXIodGhpcyk7XG5cbiBcdFx0Ly8gSW1hZ2VzIGRvbid0IGF1dG9tYXRpY2FsbHkgbG9hZCB3aGVuIHRoZXkncmUgbm90IGF0dGFjaGVkIHRvIHRoZSBET00sXG4gXHRcdC8vIG9yIGEgQ1NTIGJhY2tncm91bmQgaW1hZ2VcbiBcdFx0dGhpcy5pbWFnZS5sb2FkKGNvbmZpZy5wYXRoLCBmdW5jdGlvbiAoKSB7Y29uc29sZS5sb2coJ2xvYWRlZDonICsgY29uZmlnLm5hbWUpO30pO1xuIFx0fVxuXG4gXHQvLyBvdmVycmlkZSBkZWZhdWx0IGRyYXcgd2l0aCBvdXIgb3duXG4gXHRkcmF3IChjb250ZXh0KSB7XG5cdFx0aWYgKHRoaXMuaW1hZ2UpIHtcblx0XHRcdHZhciBpbWcgPSB0aGlzLmltYWdlLmRhdGE7XG5cdFx0XHRjb25zb2xlLmxvZygnZHJhd2luZycpXG5cdFx0XHRpZiAoaW1nKSB7XG5cdFx0XHRcdC8vIGRyYXcgaW1hZ2UgaW50byBIVE1MNSBjYW52YXNcbiBcdFx0IFx0XHRjb250ZXh0LmRyYXdJbWFnZShpbWcsIHRoaXMucG9zaXRpb24ubGVmdCwgdGhpcy5wb3NpdGlvbi50b3ApO1xuXHRcdFx0fVxuXHRcdH1cbiBcdH1cbiB9XG4iLCIvKiogXG4gKiBAY2xhc3MgQ29sbGlkZXJcbiAqIEBkZXNjcmlwdGlvbiBjcmVhdGUgdGhlIGNvbGxpc2lvbiBtYXRyaXggZGVmaW5pbmcgd2hpY2ggb2JqZWN0cyBjYW4gY29sbGlkZSBcbiAqIHdpdGggd2hpY2ggb2JqZWN0cy4gT2JqZWN0cyB0aGF0IGNhbiBjb2xsaWRlIGhhdmUgdGhlaXIgcG90ZW50aWFsIGNvbGxpZGVycyBcbiAqIGFkZGVkIGFzIHJlZmVyZW5jZXMsIGUuZy4gUGxheWVyLnRydW1wIG9yIFRydW1wLnBsYXllci5cbiAqIEBwYXJhbSBBcnJheSBjaGFyYWN0ZXJBcnJheSB0aGUgYXJyYXkgb2YgQ2hhcmFjdGVycyB3aG8gbWlnaHQgYmUgaW52b2x2ZWQgXG4gKiBpbiBjb2xsaXNpb25zLlxuICovXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sbGlkZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY2hhcmFjdGVyQXJyYXkpIHtcbiBcdFx0dGhpcy5jaGFyYWN0ZXJBcnJheSA9IGNoYXJhY3RlckFycmF5O1xuIFx0XHR0aGlzLmFuaW1hbEFycmF5ID0gW107IC8vZmlsbGVkIHVwIGluIHNldFVwQ29sbGlzaW9uc1xuIFx0XHR0aGlzLnNldFVwQ29sbGlzaW9ucygpO1xuIFx0fVxuXG4gXHRzZXRVcENvbGxpc2lvbnMgKCkge1xuIFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jaGFyYWN0ZXJBcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuIFx0XHRcdHN3aXRjaCAodGhpcy5jaGFyYWN0ZXJBcnJheVtpXS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gXHRcdFx0XHRjYXNlICdMaW9uJzpcbiBcdFx0XHRcdGNhc2UgJ1RpZ2VyJzpcbiBcdFx0XHRcdGNhc2UgJ0JlYXInOlxuIFx0XHRcdFx0Y2FzZSAnR29yaWxsYSc6XG4gXHRcdFx0XHRcdHRoaXMuYW5pbWFsQXJyYXkucHVzaCh0aGlzLmNoYXJhY3RlckFycmF5W2ldKTtcbiBcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRjYXNlICdUcnVtcCc6XG4gXHRcdFx0XHRcdHRoaXMudHJ1bXAgPSB0aGlzLmNoYXJhY3RlckFycmF5W2ldO1xuIFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdGNhc2UgJ1BsYXllcic6XG4gXHRcdFx0XHRcdHRoaXMucGxheWVyID0gdGhpcy5jaGFyYWN0ZXJBcnJheVtpXTtcbiBcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRkZWZhdWx0OlxuIFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvL2Nyb3NzLWNvbm5lY3QgdGhlIGltcGFjdG9yc1xuIFx0XHR0aGlzLnRydW1wLnBsYXllciA9IHRoaXMucGxheWVyO1xuIFx0XHR0aGlzLnRydW1wLmFuaW1hbHMgPSB0aGlzLmFuaW1hbEFycmF5O1xuIFx0XHR0aGlzLnBsYXllci50cnVtcCA9IHRoaXMudHJ1bXA7XG5cbiBcdFx0Ly9ERUJVR1xuIFx0XHR3aW5kb3cuYW5pbWFscyA9IHRoaXMudHJ1bXAuYW5pbWFscztcbiBcdFx0XG5cbiBcdH1cbiB9IiwiLyoqIFxuICogRHluYW1pY1RleHQuanNcbiAqIFRleHQgdGhhdCBjYW4gYmUgY2hhbmdlZCBieSB1c2VyIChlLmcuIGlucHV0IGZpZWxkKSwgb3IgXG4gKiB1cGRhdGVkIGJ5IHRoZSBnYW1lIGl0c2VsZi5cbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHluYW1pY1RleHQgZXh0ZW5kcyBUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufVxuIiwiLyoqIFxuICogRW5kU2NyZWVuLmpzXG4gKiBFbmRpbmcgc2NyZWVuIGZvciB0aGUgZ2FtZS5cbiAqIEBpbmhlcml0cyBTY3JlZW4sIEdhbWVQaWVjZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG4gXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW5kU2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpO1xuXG4gXHRcdC8vIGxvYWQgdGhlIGJhY2tncm91bmQgaW1hZ2VcbiBcdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvZW5kLXNjcmVlbi5wbmcnKTtcblxuIFx0XHQvLyBMb2FkIEVuZFNjcmVlbiBzdWItb2JqZWN0c1xuIFx0XHR0aGlzLmxvYWRJbnB1dFNjb3JlKCk7XG4gXHRcdHRoaXMubG9hZEhpZ2hTY29yZXMoKTtcblxuIFx0XHQvLyBCaW5kIFwicGxheSBhZ2FpblwiIGFuZCBcImluc3RydWN0aW9uc1wiIGJ1dHRvbnMuXG4gXHRcdHRoaXMuYmluZFJlcGxheSgpO1xuIFx0XHR0aGlzLmJpbmRJbnN0cnVjdGlvbnMoKTtcbiBcdH1cblxuIFx0bG9hZElucHV0U2NvcmUgKCkge1xuXG4gXHR9XG5cbiBcdGxvYWRIaWdoU2NvcmVzICgpIHtcblxuIFx0fVxuXG4gXHRiaW5kUmVwbGF5ICgpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VuZC1zY3JlZW4tcGxheS1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0Ly9hbGVydChcImluIGhhbmRsZXIsIGdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5nYW1lLnN0YXJ0R2FtZSgpO1xuXG5cdFx0XHR9LmJpbmQodGhpcykpO1xuXHR9XG5cblx0YmluZEluc3RydWN0aW9ucyAoKSB7XG5cdFx0Y29uc29sZS5sb2coXCJpbiBiaW5kU3RhcnQsIHRoaXMuZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHQvLyB3ZSB1c2UgYmluZCgpIHRvIGxpbmsgdGhlIGZ1bmN0aW9uIGJlbG93IHRvIFN0YXJ0U2NyZWVuIChvdGhlcndpc2UsIGl0IHRoaW5rcyBpdCBpcyBpbnNpZGUgd2luZG93KVxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlbmQtc2NyZWVuLWluc3RydWN0aW9ucy1idXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFxuXHRcdFx0ZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0Ly9hbGVydChcImluIGhhbmRsZXIsIGdhbWU6XCIgKyB0aGlzLmdhbWUpXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5nYW1lLmxvYWRHYW1lKCk7XG5cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cbiB9IiwiLyoqXG4gKiBHYW1lLmpzXG4gKiBUaGUgZW50aXJlIEdhbWUgb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IFN0YXRpY0ltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4vSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4vQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4vVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4vR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4vSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi9QbGF5ZXJBcmVhLmpzJztcblxuLy9pbXBvcnQgQ29sbGlkZXIgYW5kIFNvdW5kZXIgb2JqZXRjc1xuaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xuaW1wb3J0IFNvdW5kZXIgZnJvbSAnLi9Tb3VuZGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIEdhbWVQaWVjZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdC8vZ2FtZSBjb3B5cmlnaHRcblx0XHR0aGlzLndhcm5pbmcgPSAnVGhpcyBnYW1lIGJlbG9uZ3MgdG8gdXMsIGFuZCBub2JvZHkgZWxzZS4nO1xuXG5cdFx0Ly9nYW1lIHJldmVydHMgdG8gU3RhcnRTY3JlZW4gaWYgdW5wbGF5ZWRcblx0XHR0aGlzLlRJTUVPVVQgPSA1NTU1O1xuXG5cdFx0Ly8gZGVmaW5lIElkIGxpbmsgdG8gRE9NXG5cdFx0dGhpcy5TVEFSVF9TQ1JFRU5fSUQgPSAnc3RhcnQtc2NyZWVuJztcblx0XHR0aGlzLkdBTUVfU0NSRUVOX0lEID0gJ2dhbWUtc2NyZWVuJztcblx0XHR0aGlzLkVORF9TQ1JFRU5fSUQgPSAnZW5kLXNjcmVlbic7XG5cblx0XHQvLyBtb2RlbCBzdG9yYWdlLCBzY3JlZW5zXG5cdFx0dGhpcy5zY3JlZW5zID0gW107XG5cblx0XHQvLyBtb2RlbCBzdG9yYWdlLCBkeW5hbWljIGNoYXJhY3RlcnNcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzID0gW107XG5cblx0XHQvLyBpbml0aWFsaXplIGdhbWUsIGxvYWQgc3RhcnQgc2NyZWVuXG5cdFx0dGhpcy5pbml0KCk7XG5cblx0fSAvL2VuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdGluaXQgKCkge1xuXG5cdFx0Ly8gR3JhYiB0aGUgSFRNTCBzY3JlZW4gZWxlbWVudHMgYW5kIGVuY2Fwc3VsYXRlIGluIGEgU2NyZWVuIGNsYXNzXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXSA9IG5ldyBTdGFydFNjcmVlbih7bmFtZTogJ1N0YXJ0IFNjcmVlbicsIGlkOiB0aGlzLlNUQVJUX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkdBTUVfU0NSRUVOX0lEXSA9IG5ldyBHYW1lU2NyZWVuKHtuYW1lOiAnR2FtZSBTY3JlZW4nLCBpZDogdGhpcy5HQU1FX1NDUkVFTl9JRCwgZ2FtZTogdGhpc30pO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdID0gbmV3IEVuZFNjcmVlbih7bmFtZTogJ0VuZCBTY3JlZW4nLCBpZDogdGhpcy5FTkRfU0NSRUVOX0lELCBnYW1lOiB0aGlzfSk7XG5cblx0XHQvLyBsb2FkIHRoZSBjYW52YXNcblx0XHR0aGlzLmxvYWRDYW52YXMoKTtcblxuXHRcdC8vIG1ha2UgdGhlIHN0YXJ0IHNjcmVlbiB2aXNpYmxlXG5cdFx0dGhpcy5sb2FkR2FtZSgpO1xuXHR9XG5cblx0Ly8gZ2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBIVE1MNSBjYW52YXMgY29udGV4dFxuXHRsb2FkQ2FudmFzICgpIHtcblx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnYW1lLXNjcmVlbi1hcmVuYSBjYW52YXMnKTtcblx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cdH1cblxuXHQvKipcblx0ICogTG9hZCBDaGFyYWN0ZXJzXG5cdCAqIGR5bmFtaWMgQ2hhcmFjdGVycyAoZS5nLiB0aG9zZSB0aGF0IGFuaW1hdGUpIGFyZSBsb2FkZWQgYnkgR2FtZS5cblx0ICogT3RoZXIgc3RhdGljIHZpc3VhbCBvYmplY3RzIGFyZSBsb2FkZWQgYnkgU2NyZWVuIGNsYXNzZXMuXG5cdCAqL1xuXHRsb2FkUGxheWVycyAoKSB7XG5cdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5wdXNoKFxuXHRcdFx0bmV3IFBsYXllcihcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdQbGF5ZXInLCBwb3NpdGlvbjoge3RvcDogNTEwLCBsZWZ0OiAyMDB9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvcGxheWVycy9wbGF5ZXIucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0bG9hZEFuaW1hbHMgKCkge1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBMaW9uKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0xpb24nLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogOTR9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvYW5pbWFscy9saW9uLnBuZycsXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXG5cdFx0XHRuZXcgVGlnZXIoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnVGlnZXInLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAxNSwgbGVmdDogMzMzfSxcblx0XHRcdFx0XHRwYXRoOiAnaW1nL2FuaW1hbHMvdGlnZXIucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBCZWFyKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0JlYXInLCBwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDU3MH0sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL2JlYXIucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHRoaXMuZGlzcGxheUNoYXJhY3RlcnMucHVzaChcblx0XHRcdG5ldyBHb3JpbGxhKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ0dvcmlsbGEnLCBwb3NpdGlvbjoge3RvcDogMTUsIGxlZnQ6IDgxMn0sXG5cdFx0XHRcdFx0cGF0aDogJ2ltZy9hbmltYWxzL2dvcmlsbGEucG5nJyxcblx0XHRcdFx0XHRnYW1lOiB0aGlzXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXG5cdH1cblxuXHRsb2FkVHJ1bXBzICgpIHtcblx0XHR0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLnB1c2goXG5cdFx0XHRuZXcgVHJ1bXAoXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnVHJ1bXAnLCBwb3NpdGlvbjoge3RvcDogNDUwLCBsZWZ0OiAyMDB9LFxuXHRcdFx0XHRcdHBhdGg6ICdpbWcvdHJ1bXBzL3RydW1wLnBuZycsXG5cdFx0XHRcdFx0Z2FtZTogdGhpc1xuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblxuXHR9XG5cblx0bG9hZEdhbWUgKCkge1xuXG5cdFx0Ly9sb2FkIEluZm8gYXNzZXRzXG5cblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBzcGxhc2ggc2NyZWVuJyk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuRU5EX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpXG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuU1RBUlRfU0NSRUVOX0lEXS5zaG93U2NyZWVuKCk7XG5cdH1cblxuXHRzdGFydEdhbWUgKCkge1xuXG5cdFx0Ly9sb2FkIENoYXJhY3RlcnNcblx0XHR0aGlzLmxvYWRBbmltYWxzKCk7XG5cdFx0dGhpcy5sb2FkUGxheWVycygpO1xuXHRcdHRoaXMubG9hZFRydW1wcygpO1xuXG5cdFx0Ly8gYWRkIGNvbGxpc2lvbiBtYXRyaXhcblx0ICB0aGlzLmNvbGxpZGVyID0gbmV3IENvbGxpZGVyKHRoaXMuZGlzcGxheUNoYXJhY3RlcnMpO1xuXHQgIC8vbG9hZCBhdWRpbyBzYW1wbGVzXG4gICAgdGhpcy5zb3VuZFBvb2wgPSBuZXcgU291bmRlcigpO1xuXG5cdFx0Ly9sb2FkIGF1ZGlvIHNhbXBsZXNcbiAgICB0aGlzLnNvdW5kUG9vbCA9IG5ldyBTb3VuZGVyKCk7XG4gICAgdGhpcy5zb3VuZFBvb2wuYWRkU291bmQoJ2tpY2snLCAwLjcpO1xuICAgIHRoaXMuc291bmRQb29sLmFkZFNvdW5kKCdsaW9uJywgMC43KTtcbiAgICB0aGlzLnNvdW5kUG9vbC5hZGRTb3VuZCgndGlnZXInLCAwLjcpO1xuICAgIHRoaXMuc291bmRQb29sLmFkZFNvdW5kKCdiZWFyJywgMC43KTtcbiAgICB0aGlzLnNvdW5kUG9vbC5hZGRTb3VuZCgnZ29yaWxsYScsIDAuNyk7XG5cdFx0XG5cdFx0Ly9tYWtlIEdhbWVTY3JlZW4gdmlzaWJsZVxuXG5cdFx0Ly8gaW5pdGlhbGl6ZSBlbGFwc2VkIHRpbWVcblx0XHR0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5cblx0XHQvLyBzaG93IEdhbWVTY3JlZW4sIGhpZGUgb3RoZXJzXG5cdFx0Y29uc29sZS5sb2coJ3N0YXJ0aW5nIGdhbWUnKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5TVEFSVF9TQ1JFRU5fSURdLmhpZGVTY3JlZW4oKTtcblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5FTkRfU0NSRUVOX0lEXS5oaWRlU2NyZWVuKCk7XG5cdFx0dGhpcy5zY3JlZW5zW3RoaXMuR0FNRV9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcblx0XHR0aGlzLmdhbWVMb29wKCk7XG5cdH1cblxuXHRlbmRHYW1lICgpIHtcblxuXHRcdGNvbnNvbGUubG9nKCdlbmRpbmcgZ2FtZScpO1xuXG5cdFx0Ly8gcmVzZXQgdGltZXJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cblx0XHQvLyB0dXJuIG9mZiBhbmltYXRpb25cblx0XHRjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmdsb2JhbElkKTtcblx0XHR0aGlzLmdsb2JhbElkID0gbnVsbDtcblxuXHRcdC8vIGdvIHRvIGVuZCBzY3JlZW5cblx0XHR0aGlzLnNjcmVlbnNbdGhpcy5HQU1FX1NDUkVFTl9JRF0uaGlkZVNjcmVlbigpO1xuXHRcdHRoaXMuc2NyZWVuc1t0aGlzLkVORF9TQ1JFRU5fSURdLnNob3dTY3JlZW4oKTtcblx0fVxuXG5cdGVsYXBzZWQgKCkge1xuXG5cdFx0Ly8gcmVjb3JkIHRpbWUgd2UgaGF2ZSBiZWVuIGluIGdhbWVMb29wXG5cdFx0dGhpcy5lbmRUaW1lID0gbmV3IERhdGUoKTtcblxuXHRcdC8vIHRpbWUgZGlmZmVyZW5jZSBpbiBtc1xuXG5cdFx0dmFyIHRpbWVEaWZmID0gKHRoaXMuZW5kVGltZSAtIHRoaXMuc3RhcnRUaW1lKSAvIDEwMDA7XG5cblx0XHQvLyBnZXQgc2Vjb25kcyAoT3JpZ2luYWwgaGFkICdyb3VuZCcgd2hpY2ggaW5jb3JyZWN0bHkgY291bnRzIDA6MjgsIDA6MjksIDE6MzAgLi4uIDE6NTksIDE6MClcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCh0aW1lRGlmZiAlIDYwKTtcblx0fVxuXG5cdGNoZWNrSWZDb21wbGV0ZSAoKSB7XG5cblx0XHQvLyBnYW1lIGxvZ2ljIHRvIHNlZSBpZiB0aGUgZ2FtZSBzaG91bGQgcmVzZXRcblx0XHQvLy8vLy8vLy8vLy8vY29uc29sZS5sb2coJ0VMQVBTRUQ6JyArIHRoaXMuZWxhcHNlZCgpKTtcblxuXHRcdGlmICh0aGlzLmVsYXBzZWQoKSA+IHRoaXMuVElNRU9VVCkge1xuXHRcdFx0Ly8gaWYgaWRsZSB0b28gbG9uZywgcmVzZXQgZ2FtZSB0byBzdGFydFxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dXBkYXRlICgpIHtcblxuXHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cblx0XHRcdHZhciBjaGFyYWN0ZXIgPSB0aGlzLmRpc3BsYXlDaGFyYWN0ZXJzW2ldO1xuXG5cdFx0XHRzd2l0Y2ggKGNoYXJhY3Rlci5nZXRDbGFzcygpKSB7XG5cdFx0XHRcdGNhc2UgJ1BsYXllcic6XG5cdFx0XHRcdGNhc2UgJ1RydW1wJzpcblx0XHRcdFx0Y2FzZSAnTGlvbic6XG5cdFx0XHRcdGNhc2UgJ1RpZ2VyJzpcblx0XHRcdFx0Y2FzZSAnQmVhcic6XG5cdFx0XHRcdGNhc2UgJ0dvcmlsbGEnOlxuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHRjaGFyYWN0ZXIudXBkYXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0ZHJhdyAoKSB7XG5cblx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5kaXNwbGF5Q2hhcmFjdGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0dGhpcy5kaXNwbGF5Q2hhcmFjdGVyc1tpXS5kcmF3KHRoaXMuY29udGV4dCk7XG5cdFx0fVxuXHR9XG5cblx0Z2FtZUxvb3AgKCkge1xuXG5cdFx0aWYgKHRoaXMuY2hlY2tJZkNvbXBsZXRlKCkpIHtcblx0XHRcdHRoaXMuZW5kR2FtZSgpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0dGhpcy5kcmF3KCk7XG5cblx0XHQvL2NvbnNvbGUubG9nKCdsb29waW5nLi4uJylcblx0XHR0aGlzLmdsb2JhbElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ2FtZUxvb3AuYmluZCh0aGlzKSk7XG5cdH1cblxufVxuIiwiLyoqIFxuICogR2FtZVBpZWNlLmpzXG4gKiBCYXNpYyBHYW1lIG9iamVjdFxuICpcbiAqIFRvIG1ha2UgdGhpcyB3b3JrLCB5b3UgbXVzdCBiZSBydW5uaW5nIHRoZSBCYWJlbCB0cmFuc3BpbGVyLCBcbiAqIGFuZCB3YXRjaGluZyBmb3IgY2hhbmdlcyBpbiB0aGlzIGZpbGUgd2l0aCBicm93c2VyaWZ5LiBUd28gXG4gKiBUZXJtaW5hbCB3aW5kb3dzIG5lZWQgdG8gYmUgb3BlbjpcbiAqIDEuIG9uZSB3aW5kb3cgd2hlcmUgeW91IHR5cGVkIHRoZSBjb21tYW5kIFwiZ3J1bnRcIlxuICogMi4gb25lIHdpbmRvdyB3aGVyZSB5b3UgdHlwZWQgdGhlIGNvbW1hbmQgXCJucG0gc3RhcnRcIlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lUGllY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgICAgICAvL1RPRE86IHVzZSBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBjb25maWcubmFtZTtcbiAgICAgICAgdGhpcy51dWlkID0gdGhpcy5zZXRJZCgpO1xuICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTsgLy8gY2hhbmdlIHRvIGZhbHNlIGZvciBkZWZlcnJlZCBsb2Fkc1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBTZXQgYSBwb3NpdGlvbiBmb3IgdGhlIG9iamVjdCwgYWxzbyB0aGUgcG9zaXRpb24gb2YgdGhlIFxuICAgICAqIERPTSByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XG4gICAgICovXG4gICAgc2V0RE9NUG9zaXRpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuZG9tKSB7XG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS50b3AgPSBwb3NpdGlvbi50b3AgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5kb20uc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIFNldCB0aGUgb2JqZWN0IHNpemUsIGFsc28gaXRzIERPTSBzaXplXG4gICAgICovXG4gICAgc2V0RE9NU2l6ZSAoc2l6ZSkge1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICBpZiAodGhpcy5kb20pIHtcbiAgICAgICAgICAgIHRoaXMuZG9tLnN0eWxlLndpZHRoID0gc2l6ZS53aWR0aCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmRvbS5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogR2VuZXJhdGUgYSB1bmlxdWUgSUQgZm9yIGV2ZXJ5IGdhbWUgb2JqZWN0LlxuICAgICAqIEBsaW5rIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2NyZWF0ZS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdFxuICAgICAqL1xuICAgIHNldElkICgpIHtcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuICAgICAgICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG4gICAgICAgICAgICBkID0gTWF0aC5mbG9vcihkLzE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYz09J3gnID8gciA6IChyJjB4M3wweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdXVpZDtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogUmV0dXJuIHRoZSBnaXZlbiBuYW1lIG9mIHRoaXMgb2JqZWN0XG4gICAgICovXG4gICAgZ2V0TmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIHJldHVybiB0aGUgY2xhc3Mgb2YgdGhlIG9iamVjdFxuICAgICAqL1xuICAgIGdldENsYXNzICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogUmV0dXJuIHRoZSB1bmlxdWUgaWQgb2YgdGhpcyBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0SWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51dWlkO1xuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBHZXQgdGhlIGVuY2xvc2luZyBib3ggb3V0c2lkZSB0aGUgb2JqZWN0IGZvciBleHRlcm5hbCBjb2xsaXNpb25zXG4gICAgICovXG4gICAgZ2V0Q29sbGlzaW9uUmVjdCAoKSB7XG5cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogR2V0IHRoZSBpbnRlcm5hbCBib3ggd2hlbiB0aGlzIG9iamVjdCBhY3RzIGFzIGEgY29udGFpbmVyIGZvciBhbm90aGVyXG4gICAgICovXG4gICAgZ2V0Qm91bmRzUmVjdCAoKSB7XG5cbiAgICB9XG5cdFxuXHQvKiogXG5cdCAqIEdlbmVyaWMgJ3JlYWR5JyBmdW5jdGlvbiAoZS5nLiBmb3IgZGVsYXllZCBhc3NldCBsb2Fkcylcblx0ICovXG5cdHNldFJlYWR5ICh2YWwpIHtcblx0XHR0aGlzLnJlYWR5ID0gdmFsO1xuXHR9XG5cbiAgICAvKiogXG4gICAgICogR2VuZXJpYyB1cGRhdGUgKG92ZXJyaWRlKVxuICAgICAqL1xuICAgIHVwZGF0ZSAoKSB7XG5cbiAgICB9XG5cbiAgICAgLyoqIFxuICAgICAgKiBnZW5lcmljIGRyYXcgKG92ZXJyaWRlKVxuICAgICAgKi9cbiAgICBkcmF3ICgpIHtcblxuICAgIH1cbn1cblxuXG4iLCIvKiogXG4gKiBHYW1lU2NyZWVuLmpzXG4gKiBNYWluIGdhbWUgc2NyZWVuIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZSwgU2NyZWVuXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbiBpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG4gaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcbiBpbXBvcnQgUGxheWVyQXJlYSBmcm9tICcuL1BsYXllckFyZWEuanMnO1xuIGltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZS5qcyc7XG5cblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVTY3JlZW4gZXh0ZW5kcyBTY3JlZW4ge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0dGhpcy5jYWdlcyA9IFtdO1xuIFx0XHR0aGlzLmFuaW1hbEFyZWFzID0gW107XG4gXHRcdHRoaXMucGxheWVyQXJlYXMgPSBbXTtcblxuIFx0XHQvL0dhbWVTY3JlZW4gc2hvdWxkIGhpZGUgaXRzIGxvY2FsIGhlYWRlciBhbmQgZm9vdGVyXG4gXHRcdHRoaXMuaGlkZUhlYWRlcigpO1xuIFx0XHR0aGlzLmhpZGVGb290ZXIoKTtcblxuIFx0XHQvLyBsb2FkIHRoZSBiYWNrZ3JvdW5kIGltYWdlXG4gXHRcdHRoaXMubG9hZEJhY2tncm91bmQoJ2ltZy9zY3JlZW5zL2dhbWUtc2NyZWVuLnBuZycpO1xuXG4gXHRcdC8vIGdldCB0aGUgc2VjdGlvbiB0aGF0IGhhcyB0aGUgY2FudmFzIGZvciBvdmVybGF5XG4gXHRcdHZhciBhcmVuYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLXNjcmVlbi1hcmVuYScpO1xuXG4gXHRcdC8vIGxvYWQgc3ViLW9iamVjdHMgaW50byB0aGUgQXJlbmFcbiBcdFx0dGhpcy5jYWdlcyAgID0gdGhpcy5sb2FkQ2FnZXMoYXJlbmEsICdpbWcvYXJlYXMvY2FnZS5wbmcnKTtcbiBcdFx0dGhpcy5hbmltYWxBcmVhID0gdGhpcy5sb2FkQW5pbWFsQXJlYSgpO1xuIFx0XHR0aGlzLnBsYXllckFyZWEgPSB0aGlzLmxvYWRQbGF5ZXJBcmVhKCk7XG5cbiBcdH1cblxuIFx0bG9hZENhZ2VzIChjb250YWluZXIsIGltZ1BhdGgpIHtcbiBcdFx0Ly8gbG9hZCA0IENhZ2VzXG4gXHRcdHRoaXMuY2FnZXMucHVzaChcbiBcdFx0XHRuZXcgQ2FnZShcbiBcdFx0XHRcdHtcbiBcdFx0XHRcdFx0bmFtZTogJ2xpb24tY2FnZScsIFxuIFx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNzB9LCBcbiBcdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LCBcbiBcdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuIFx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXG4gXHRcdFx0XHR9XG4gXHRcdFx0KVxuIFx0XHQpO1xuXHRcdHRoaXMuY2FnZXMucHVzaChcblx0XHRcdG5ldyBDYWdlKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ3RpZ2VyLWNhZ2UnLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogMzEwfSwgXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LCBcblx0XHRcdFx0XHRjb250YWluZXI6IGNvbnRhaW5lciwgXG5cdFx0XHRcdFx0cGF0aDogaW1nUGF0aFxuXHRcdFx0XHR9XG5cdFx0XHQpXG5cdFx0KTtcblx0XHR0aGlzLmNhZ2VzLnB1c2goXG5cdFx0XHRuZXcgQ2FnZShcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG5hbWU6ICdiZWFyLWNhZ2UnLCBcblx0XHRcdFx0XHRwb3NpdGlvbjoge3RvcDogMCwgbGVmdDogNTUwfSwgXG5cdFx0XHRcdFx0c2l6ZToge3dpZHRoOiAxMDAsIGhlaWdodDoxMDB9LFxuXHRcdFx0XHRcdGNvbnRhaW5lcjogY29udGFpbmVyLCBcblx0XHRcdFx0XHRwYXRoOiBpbWdQYXRoXG5cdFx0XHRcdH1cblx0XHRcdClcblx0XHQpO1xuXHRcdHRoaXMuY2FnZXMucHVzaChcblx0XHRcdG5ldyBDYWdlKFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ2dvcmlsbGEtY2FnZScsIFxuXHRcdFx0XHRcdHBvc2l0aW9uOiB7dG9wOiAwLCBsZWZ0OiA3OTB9LCBcblx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDEwMCwgaGVpZ2h0OjEwMH0sXG5cdFx0XHRcdFx0Y29udGFpbmVyOiBjb250YWluZXIsIFxuXHRcdFx0XHRcdHBhdGg6IGltZ1BhdGhcblx0XHRcdFx0fVxuXHRcdFx0KVxuXHRcdCk7XG4gXHR9XG5cbiBcdGxvYWRBbmltYWxBcmVhICgpIHtcbiBcdFx0Ly8gbG9hZCBBbmltYWwgbW92ZW1lbnQgYXJlYVxuIFx0XHR0aGlzLmFuaW1hbEFyZWFzLnB1c2goXG4gXHRcdFx0bmV3IEFuaW1hbEFyZWEoXG4gXHRcdFx0XHR7XG4gXHRcdFx0XHRcdG5hbWU6ICdab28nLCBcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDEwNCwgbGVmdDogNn0sIFxuIFx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDk3MCwgaGVpZ2h0OiA0MTB9LFxuIFx0XHRcdFx0XHRjb250YWluZXI6IHRoaXMuZG9tLCBcbiBcdFx0XHRcdFx0cGF0aDogbnVsbFxuIFx0XHRcdFx0fVxuIFx0XHRcdClcbiBcdFx0KTtcbiBcdH1cblxuIFx0bG9hZFBsYXllckFyZWEgKCkge1xuIFx0XHQvLyBsb2FkIHRoZSBQbGF5ZXJcbiBcdFx0dGhpcy5wbGF5ZXJBcmVhcy5wdXNoKFxuIFx0XHRcdG5ldyBQbGF5ZXJBcmVhKFxuIFx0XHRcdFx0e1xuIFx0XHRcdFx0XHRuYW1lOiAnUGxheWVyIEFyZWEnLCBcbiBcdFx0XHRcdFx0cG9zaXRpb246IHt0b3A6IDUxNCwgbGVmdDogNn0sIFxuIFx0XHRcdFx0XHRzaXplOiB7d2lkdGg6IDk3MCwgaGVpZ2h0OiAxMDB9LFxuIFx0XHRcdFx0XHRjb250YWluZXI6IHRoaXMuZG9tLCBcbiBcdFx0XHRcdFx0cGF0aDogbnVsbFxuIFx0XHRcdFx0fVxuIFx0XHRcdClcbiBcdFx0KTtcbiBcdH1cblxuIH1cblxuIiwiLyoqIFxuICogR29yaWxsYS5qc1xuICogQSBHb3JpbGxhLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29yaWxsYSBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIEhlYWx0aC5qc1xuICogVGhlIGNyaXR0ZXJzIHRoYXQgVHJ1bXAgdHJpZXMgdG8gc3RvcCBmcm9tIGdldHRpbmcgdGhlIFBsYXllci5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFsdGggZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuXG4gfSIsIi8qKiBcbiAqIElkZW50aXR5LmpzXG4gKiBHYW1lIExvZ29zLCBMb2dvVHlwZXMsIEJyYW5kIE5hbWVcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UuanMnO1xuIGltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL1N0YXRpY0ltYWdlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSWRlbnRpdHkgZXh0ZW5kcyBTdGF0aWNJbWFnZSB7XG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cblx0XHR0aGlzLnNldFNvdXJjZShjb25maWcuc291cmNlKTtcblx0XHR0aGlzLnNldEF1dGhvcihjb25maWcuYXV0aG9yKTtcblx0XHR0aGlzLmxvYWRJbWFnZVRvRE9NKGNvbmZpZy5kb21JZCwgY29uZmlnLnBhdGgpO1xuXG5cdFx0Ly9IaWRlIGFueSA8aDI+IHRleHQgZXF1aXZhbGVudCBvZiBpZGVudGl0eSBpbiB0aGlzIENTUyBib3hcblx0XHR2YXIgdGV4dElkZW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignIycgKyBjb25maWcuZG9tSWQgKyAnIGgyJyk7XG5cdFx0dGV4dElkZW50aXR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdH1cblxufVxuIiwiLyoqIFxuICogU3RhdGljSW1hZ2UuanNcbiAqIEltYWdlLXN0eWxlIEluZm9ybWF0aW9uIHRoYXQgY2Fubm90IGJlIGNoYW5nZWQgb25jZSB0aGUgZ2FtZSBpcyBsb2FkZWRcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgSW5mbyB7XG5cblx0Ly8gc2F2ZSBzY29wZVxuXHQvLyBUT0RPOiByZWZhY3RvciB3aXRoIGFycm93IGZ1bmN0aW9uXG5cblx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuXHRcdHN1cGVyKGNvbmZpZyk7XG5cdFx0dGhpcy5yZWFkeSA9IGZhbHNlOyAvL292ZXItcmlkZSBHYW1lUGllY2UgYW5kIGluZm8gd2l0aCBkZWZlcnJhbHNcblx0XHR0aGlzLmltYWdlID0gbnVsbDtcblx0XHR0aGlzLnBhdGggPSBjb25maWcucGF0aDtcblx0XHR0aGlzLmF1dGhvciA9IGNvbmZpZy5hdXRob3I7XG5cdFx0dGhpcy5zb3VyY2UgPSBjb25maWcuc291cmNlO1xuXHR9XG5cblx0Ly8gbG9hZCBhbiBpbWFnZVxuXHRsb2FkIChwYXRoLCBjYWxsYmFjaykge1xuXHRcdHZhciB0aGF0ID0gdGhpcztcblx0XHR0aGF0LnNldFJlYWR5KGZhbHNlKTtcblx0XHRjb25zb2xlLmxvZygnZW50ZXJpbmcgbG9hZCBpbkltYWdlJyk7XG5cdFx0dmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdGltZy5zcmMgPSBwYXRoO1xuXHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGF0Lm5hbWUgKyAnIGltYWdlIGxvYWRlZCBmcm9tOicgKyBwYXRoICsgJyB3OicgKyBpbWcud2lkdGggKyAnIGg6JyArIGltZy5oZWlnaHQpXG5cdFx0XHR0aGF0LnNldFJlYWR5KHRydWUpO1xuXHRcdFx0dGhhdC5kYXRhID0gaW1nO1xuXHRcdFx0XG5cdFx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpbWcub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnZXJyb3IgbG9hZGluZyBpbWcgZnJvbTonICsgcGF0aCk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gbG9hZCBpbWFnZSwgYXBwZW5kIHRvIGV4aXN0aW5nIERPTSBlbGVtZW50XG5cdC8vIE5PVEU6IHRoaXMgaXMgb3Zlci13cml0dGVuIGluIENoYXJhY3Rlci5qcywgd2hpY2ggbG9hZHMgaW1hZ2VzIGludG8gQ2FudmFzXG5cdGxvYWRJbWFnZVRvRE9NIChkb21JZCwgcGF0aCwgY2FsbGJhY2spIHtcblx0XHR2YXIgdGhhdCA9IHRoaXM7XG5cdFx0dGhpcy5sb2FkKHBhdGgsIGZ1bmN0aW9uICgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdmb3JlZ3JvdW5kIGltYWdlICcgKyBwYXRoICsgJyBsb2FkZWQnKVxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZG9tSWQpLmFwcGVuZENoaWxkKHRoYXQuZGF0YSk7XG5cdFx0XHRpZiAoY2FsbGJhY2spIHtcblx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHR9XG5cblx0Ly8gbG9hZCBpbWFnZSBhcyBhIENTUyBiYWNrZ3JvdW5kIGltYWdlIGludG8gZXhpc3RpbmcgRE9NIGVsZW1lbnQuIFxuXHQvLyBOT1RFOiBubyBsb2NhbCByZWZlcmVuY2UgdG8gaW1hZ2UgaW4gdGhpcyBjYXNlXG5cdGxvYWRCYWNrZ3JvdW5kSW1hZ2UgKGNvbnRhaW5lciwgcGF0aCwgY2FsbGJhY2spIHtcblx0XHRjb25zb2xlLmxvZygnbG9hZGluZyBiYWNrZ3JvdW5kIGltYWdlOicgKyBwYXRoKVxuXHRcdGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybCgnICsgcGF0aCArICcpJztcblx0XHR0aGlzLnNldFJlYWR5KHRydWUpO1xuXHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0Y2FsbGJhY2soKTtcblx0XHR9XG5cdH1cblxuXHQvLyBEcmF3IHRoZSBpbWFnZSB0byBhIHN1cHBsaWVkIGNhbnZhcyBjb250ZXh0XG5cdGRyYXdUb0NhbnZhcyAoY29udGV4dCwgcG9zaXRpb24sIHNpemUpIHtcblx0XHRjb250ZXh0LmRyYXdJbWFnZShpbWcsIHBvc2l0aW9uLnRvcCwgcG9zaXRpb24ubGVmdCwgc2l6ZS53aWR0aCwgc2l6ZS5oZWlnaHQpO1xuXHR9XG5cblx0Ly8gRHJhdyB0byB0aGUgRE9NLiBBc3N1bWUgdGhlIEltYWdlIHdhcyBhbHJlYWR5IGF0dGFjaGVkIHRvIHRoZSBET01cblx0ZHJhd1RvRE9NIChwb3NpdGlvbiwgc2l6ZSkge1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUudG9wID0gcG9zaXRpb24udG9wO1xuXHRcdHRoaXMuaW1hZ2Uuc3R5bGUubGVmdCA9IHBvc2l0aW9uLmxlZnQ7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS53aWR0aCA9IHNpemUud2lkdGg7XG5cdFx0dGhpcy5pbWFnZS5zdHlsZS5oZWlnaHQgPSBzaXplLmhlaWdodDtcblx0fVxuXG59XG4iLCIvKiogXG4gKiBJbmZvLmpzXG4gKiBHZW5lcmljIGluZm9ybWFpdG9uIG9iamVjdFxuICogQGluaGVyaXRzIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyBleHRlbmRzIEdhbWVQaWVjZSB7XG5cblx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxuXG5cdHNldEF1dGhvciAoYXV0aG9yKSB7XG5cdFx0dGhpcy5hdXRob3IgPSBhdXRob3I7XG5cdH1cblxuXHRzZXRTb3VyY2UgKHNvdXJjZSkge1xuXHRcdHRoaXMuc291cmNlID0gc291cmNlO1xuXHR9XG5cbn0iLCIvKiogXG4gKiBJbnN0cnVjdGlvbnMuanNcbiAqIFRleHQgd2hpY2ggdGVsbHMgdGhlIFBsYXllciBob3cgdG8gcGxheSB0aGUgZ2FtZS5cbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbiBpbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuL1N0YXRpY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbnMgZXh0ZW5kcyBTdGF0aWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufVxuIiwiLyoqIFxuICogTGlvbi5qc1xuICogQSBMaW9uLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlvbiBleHRlbmRzIEFuaW1hbCB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIgKGNvbmZpZyk7XG4gXHR9XG4gfSIsIi8qKiBcbiAqIEBjbGFzcyBNb3ZlclxuICogQGRlc2NyaXB0aW9uIHVwZGF0ZSBwb3NpdGlvbiBvZiBvYmplY3QgYmVpbmcgYW5pbWF0ZWQgYnkgR2FtZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92ZXIge1xuXG5cdGNvbnN0cnVjdG9yIChnYW1lT2JqKSB7XG5cdFx0dGhpcy5vYmogPSBnYW1lT2JqO1xuXG4gICAgICAgIC8vIENoYXJhY3RlciBoYXMgcmVmZXJlbmNlIHRvIEdhbWVcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZU9iai5nYW1lO1xuXG4gICAgICAgIC8vIE1vdmVtZW50IHR5cGVzXG4gICAgICAgIHRoaXMudHlwZSA9IDA7XG4gICAgICAgIHRoaXMuU0xFVyA9IDE7XG4gICAgICAgIHRoaXMuUkFORE9NID0gMjtcbiAgICAgICAgdGhpcy5QSU5HUE9JTkcgPSAzO1xuXG4gICAgICAgIGlmICghdGhpcy5nYW1lLnNvdW5kUG9vbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdubyBzb3VuZHMgaW5pdGlhbGl6ZWQuIEdhbWUgd2lsbCBwbGF5IHNpbGVudGx5Jyk7XG4gICAgICAgIH1cblxuXHR9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCB0cnVuY2F0b3JcbiAgICAgKiBAZGVzY3JpcHRpb24gdHJ1bmNhdGUgKG5vdCByb3VuZCkgbnVtYmVyIHRvIGZpeGVkIG51bWJlciBvZiBkZWNpbWFsc1xuICAgICAqIEBwYXJhbSBOdW1iZXIgbnVtIGZsb2F0aW5nLXBvaW50IG51bWJlclxuICAgICAqIEBwYXJhbSBJbnRlZ2VyIGRlY2ltYWxzIHRoZSBudW1iZXIgb2YgZGVjaW1hbHMgcG9pbnRzIHRvIHJvdW5kIHRvXG4gICAgICogQHJldHVybnMgTnVtYmVyIHRoZSB0cnVuY2F0ZWQgbnVtYmVyXG4gICAgICovXG4gICAgdHJ1bmNhdG9yIChudW0sIGRlY2ltYWxzKSB7ICAgIFxuICAgICAgICB2YXIgbnVtUG93ZXIgPSBNYXRoLnBvdygxMCwgZGVjaW1hbHMpOyAvLyBcIm51bVBvd2VyQ29udmVydGVyXCIgbWlnaHQgYmUgYmV0dGVyXG4gICAgICAgIHJldHVybiB+fihudW0gKiBudW1Qb3dlcikvbnVtUG93ZXI7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgcmFuZG9taXplclxuICAgICAqIEBkZXNjcmlwdGlvbiByYW5kb21pemUgYSBudW1iZXJcbiAgICAgKi9cbiAgICByYW5kb21pemVyICgpIHtcbiAgICAgICAgdmFyIGQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgKGQgPSBwYXJzZUludChkKSAtIGQpO1xuICAgICAgICBkID0gdGhpcy50cnVuY2F0b3IoZCwgMikgLyAxMDtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgZ2V0Q2VudGVyXG4gICAgICovXG4gICAgZ2V0Q2VudGVyICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiB4ICsgKHdpZHRoLzIpLFxuICAgICAgICAgICAgeTogeSArIChoZWlnaHQvMilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIGluaXRTbGV3XG4gICAgICogQGRlc2NyaXB0aW9uIHNsZXcgb2JqZWN0IGhvcml6b250YWxseSB3aXRoIGtleXByZXNzZXMuIEFkZHMgZXZlbnQgXG4gICAgICogbGlzdGVuZXJzIGZvciBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMuIFVzZWQgZm9yIFxuICAgICAqIFBsYXllciBjaGFyYWN0ZXJzIG1vdmluZyBob3Jpem9udGFsbHkgaW4gdGhlIFBsYXllckFyZWFcbiAgICAgKi9cblx0aW5pdFNsZXcgKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBTbGV3IG1vdGlvbicpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlNMRVc7XG5cblxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcbiAgICAgICAgdGhpcy50aWNrZXIgPSAwO1xuICAgICAgICB0aGlzLmxhc3REaXIgPSAxO1xuXG4gICAgICAgIC8vIGFkZCBib3R0b20sIHJpZ2h0IHRvIG1ha2UgYSBSZWN0IGZvciB0aGUgUGxheWVyQXJlYVxuICAgICAgICB0aGlzLmJvdW5kcyA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnBvc2l0aW9uO1xuICAgICAgICB0aGlzLmJvdW5kcy53aWR0aCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnNpemUud2lkdGg7XG4gICAgICAgIHRoaXMuYm91bmRzLmhlaWdodCA9IHRoaXMuZ2FtZS5zY3JlZW5zWydnYW1lLXNjcmVlbiddLnBsYXllckFyZWFzWzBdLnNpemUuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5ib3R0b20gPSB0aGlzLmJvdW5kcy50b3AgKyB0aGlzLmJvdW5kcy5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLnJpZ2h0ID0gdGhpcy5ib3VuZHMubGVmdCArIHRoaXMuYm91bmRzLndpZHRoO1xuXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLm9iai5pbWFnZTtcblxuICAgICAgICAvLyB0b2dnbGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBQbGF5ZXIgd2hlbiBraWNraW5nXG4gICAgICAgIHRoaXMudW5LaWNrID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuICAgICAgICB0aGlzLmluS2ljayA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtIDY7XG5cbiAgICAgICAgLy8gTk9URTogVHJ1bXAgaXMgYWRkZWQgdG8gUGxheWVyIGluIENvbGxpZGVyXG5cbiAgICAgICAgLy8gZmxhZyBvdXIgaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuXG4gICAgICAgIC8vIGxpc3RlbiBmb3IgdXNlciBldmVudHNcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFxuICAgICAgICAgICAgZXZlbnQgPT4gdGhpcy5zbGV3KGV2ZW50KSwgZmFsc2UpO1xuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJyxcbiAgICAgICAgICAgIGV2ZW50ID0+IHRoaXMudW5raWNrKGV2ZW50KSwgZmFsc2UpO1xuXHR9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBpbml0UmFuZG9tV2Fsa1xuICAgICAqIEBkZXNjcmlwdGlvbiBpbml0IHJhbmRvbSBtb3Rpb25zIGFsb25nIGEgcGF0aCBmcm9tIHRoZSBcbiAgICAgKiB0b3AgdG8gdGhlIGJvdHRvbSBvZiB0aGUgc2NyZWVuLiBVc2VkIGZvciBcbiAgICAgKiBBbmltYWwgY2hhcmFjdGVycyBtb3ZpbmcgdGhyb3VnaCB0aGUgQW5pbWFsQXJlYS5cbiAgICAgKiBAcGFyYW0gTnVtYmVyIHByZWZTcGVlZCB0aGUgc3BlZWQgb2YgbW92ZW1lbnRcbiAgICAgKiBAcGFyYW0gU3RyaW5nIGRpcmVjdGlvbiB0aGUgZGlyZWN0aW9uIHRoZSBBbmltYWwgdWx0aW1hdGVseSBtb3ZlcywgXG4gICAgICogLSAndG9wJzogb3ZlcmFsbCBtb3ZlbWVudCB1cCB0aGUgc2NyZWVuXG4gICAgICogLSAnbGVmdCc6IG92ZXJhbGwgbW92ZW1lbnQgdG8gdGhlIHNjcmVlbiBsZWZ0XG4gICAgICogLSAnYm90dG9tJzogb3ZlcmFsbCBtb3ZlbWVudCB0byB0aGUgc2NyZWVuIGJvdHRvbSAoREVGQVVMVClcbiAgICAgKiAtICdyaWdodCc6IG92ZXJhbGwgbW92ZW1lbnQgdG8gdGhlIHNjcmVlbiByaWdodFxuICAgICAqIC0gJ3JldHVybic6IHJldHVybiBpbW1lZGlhdGVseSB0byB0aGUgQ2FnZSBhcmVhXG4gICAgICogLSAnY2FnZWQnOiBzdGF5IGluIHRoZSBDYWdlIGFyZWFcbiAgICAgKi9cbiAgICBpbml0UmFuZG9tV2FsayAocHJlZlNwZWVkLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgUmFuZG9tV2FsaycpO1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLlJBTkRPTTtcblxuICAgICAgICB0aGlzLnNwZWVkID0gcHJlZlNwZWVkICogdGhpcy50aW1lU3RhbXBSYW5kb20oKTtcbiAgICAgICAgdGhpcy5kZWxheSA9IHRoaXMudGltZVN0YW1wUmFuZG9tKCkgKiAzMDA7XG4gICAgICAgIHRoaXMub2JqLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcbiAgICAgICAgdGhpcy5kZWxheUNvdW50ZXIgPSAwO1xuICAgICAgICB0aGlzLk1BWCA9IDMwO1xuICAgICAgICB0aGlzLk1BWF9ERUxBWSA9IDMwMDtcblxuICAgICAgICAvLyBvbmUtdGltZSBwbGF5IG9mIEFuaW1hbCBzb3VuZFxuICAgICAgICB0aGlzLmZpcnN0TW92ZSA9IHRydWU7XG5cbiAgICAgICAgLy8gYWRkIGJvdHRvbSwgcmlnaHQgdG8gbWFrZSBhIFJlY3QgZm9yIHRoZSBBbmltYWxBcmVhXG4gICAgICAgIHRoaXMuYm91bmRzID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0ucG9zaXRpb247XG4gICAgICAgIHRoaXMuYm91bmRzLndpZHRoID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS53aWR0aDtcbiAgICAgICAgdGhpcy5ib3VuZHMuaGVpZ2h0ID0gdGhpcy5nYW1lLnNjcmVlbnNbJ2dhbWUtc2NyZWVuJ10uYW5pbWFsQXJlYXNbMF0uc2l6ZS5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRzLmJvdHRvbSA9IHRoaXMuYm91bmRzLnRvcCArIHRoaXMuYm91bmRzLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMucmlnaHQgPSB0aGlzLmJvdW5kcy5sZWZ0ICsgdGhpcy5ib3VuZHMud2lkdGg7XG5cbiAgICAgICAgLy8gcmVtZW1iZXIgd2hlcmUgd2Ugc3RhcnRlZCAoaW4gdGhlIGNhZ2UpXG4gICAgICAgIHRoaXMuc3RhcnRUb3AgPSB0aGlzLm9iai5wb3NpdGlvbi50b3A7XG4gICAgICAgIHRoaXMuc3RhcnRMZWZ0ID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdDtcblxuICAgICAgICAvLyBjYWNoZSBwb3NpdGlvbiBkdXJpbmcgbmV3IHJhbmRvbSBtb3Zlc1xuICAgICAgICB0aGlzLm5ld1RvcCA9IDAsIHRoaXMubmV3TGVmdCA9IDA7XG5cbiAgICAgICAgLy8gZ2V0IGJvdHRvbSBhbmQgcmlnaHQgZnJvbSBDaGFyYWN0ZXIgZnJvbSBpdHMgSW1hZ2VcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMub2JqLmltYWdlO1xuXG4gICAgICAgIC8vIGZsYWcgb3VyIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBpbml0UGluZ1BvbmdcbiAgICAgKiBAZGVzY3JpcHRpb24gaW5pdCBhIHBpbmctcG9uZyBzdHlsZSBtb3Rpb24uIFVzZWQgZm9yIFxuICAgICAqIFRydW1wIGNoYXJhY3RlcnMgbW92aW5nIHRocm91Z2ggdGhlIEFuaW1hbEFyZWEuXG4gICAgICovXG4gICAgaW5pdFBpbmdQb25nIChwcmVmU3BlZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgUGluZ1BvbmcgbW90aW9uJyk7XG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMuUElOR1BPTkc7XG5cbiAgICAgICAgLy9BbmltYWwgYXJlYVxuICAgICAgICAvLyBhZGQgYm90dG9tLCByaWdodCB0byBtYWtlIGEgUmVjdCBmb3IgdGhlIEFuaW1hbEFyZWFcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5ib3VuZHMud2lkdGggPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLndpZHRoO1xuICAgICAgICB0aGlzLmJvdW5kcy5oZWlnaHQgPSB0aGlzLmdhbWUuc2NyZWVuc1snZ2FtZS1zY3JlZW4nXS5hbmltYWxBcmVhc1swXS5zaXplLmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZHMuYm90dG9tID0gdGhpcy5ib3VuZHMudG9wICsgdGhpcy5ib3VuZHMuaGVpZ2h0O1xuICAgICAgICB0aGlzLmJvdW5kcy5yaWdodCA9IHRoaXMuYm91bmRzLmxlZnQgKyB0aGlzLmJvdW5kcy53aWR0aDtcblxuICAgICAgICB0aGlzLm9iai5zdGFydFRvcCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcblxuICAgICAgICAvLyBnZXQgYm90dG9tIGFuZCByaWdodCBmcm9tIENoYXJhY3RlciBmcm9tIGl0cyBJbWFnZVxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5vYmouaW1hZ2U7XG5cbiAgICAgICAgdGhpcy5vYmouc3BlZWQgPSAwO1xuICAgICAgICB0aGlzLm9iai5keCA9IDA7XG4gICAgICAgIHRoaXMub2JqLmR5ID0gMDtcblxuICAgICAgICAvLyBOT1RFOiBBbmltYWxzIGFuZCBQbGF5ZXJzIGFyZSBhZGRlZCB0byBUcnVtcCBpbiBDb2xsaWRlclxuXG4gICAgICAgIC8vIGZsYWcgb3VyIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICB9XG5cblx0LyoqIFxuXHQgKiBAbWV0aG9kIHNsZXcgXG5cdCAqIE1vdmUgb2JqZWN0IHNsaWdodGx5IHVwIGZvciBkdXJhdGlvbiBvZiBzcGFjZSBiYXIgcHJlc3NlZCBkb3duXG4gICAgICogQ2FsbGJhY2sgZm9yIGtleWRvd24gYWRkRXZlbnRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSBFdmVudCBlIHRoZSBrZXlkb3duIGV2ZW50XG4gICAgICovXG5cdHNsZXcgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMua2ljayhlKTtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vcHJldmVudCBzY3JvbGxcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzc6XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCsrO1xuICAgICAgICAgICAgICAgIHRoaXMudGlja2VyID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0RGlyID0gLTE7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRpY2tlciA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IDE7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvL3ByZXZlbnQgc2Nyb2xsXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cdH1cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVNsZXdcbiAgICAgKiBAZGVzY3JpcHRpb24gbW92ZSBiYWNrIGFuZCBmb3J0aCBob3Jpem9udGFsbHksIHdpdGggYSBzaW1wbGUgZWFzaW5nIG1vdGlvblxuICAgICAqIHdoZW4gbGVmdCBhbmQgcmlnaHQgYXJyb3cga2V5cyBhcmUgcHJlc3NlZC4gSGFuZGxlIGNvbGxpc2lvbnMgd2l0aCB0aGUgbGVmdCBcbiAgICAgKiBhbmQgcmlnaHQgd2FsbHMgb2YgdGhlIFBsYXllckFyZWEuXG4gICAgICogQ2FsbCBpbiBhbiB1cGRhdGUgZnVuY3Rpb24gaW5zaWRlIHRoZSBDaGFyYWN0ZXIsIGUuZy4gXG4gICAgICogdXBkYXRlICgpIHsgdXBkYXRlUmFuZG9tV2FsaygpOyB9XG4gICAgICogVGhlIG1haW4gR2FtZSBvYmplY3QgYXV0b21hdGljYWxseSBmaW5kcyBhbmQgJ2ZpcmVzJyB1cGRhdGUoKSBmdW5jdGlvbiBpbiBcbiAgICAgKiBhbGwgQ2hhcmFjdGVycy5cbiAgICAgKi9cbiAgICB1cGRhdGVTbGV3ICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluaXRlZCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUGxheWVyIFNsZXcgTk9UIGluaXRpYWxpemVkIChkaWQgeW91IGxlYXZlIG91dCBvZiBjb25zdHJ1Y3Rvcj8pJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aWNrZXIrKztcbiAgICAgICAgaWYgKHRoaXMuc3BlZWQgPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50aWNrZXIgPiAxMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLz0gMjtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgKz0gKHRoaXMubGFzdERpciAqIHRoaXMuc3BlZWQpO1xuXG4gICAgICAgIC8vY2hlY2sgYm91bmRzXG4gICAgICAgIGlmICh0aGlzLmJvdW5kcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2UuZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhciB3ID0gdGhpcy5pbWFnZS5kYXRhLndpZHRoO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgdGhpcy5ib3VuZHMubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3REaXIgPSAxO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC89IDEuMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuYm91bmRzLmxlZnQgKyAodGhpcy5zcGVlZCAqIDEuNSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID4gdGhpcy5ib3VuZHMucmlnaHQgLSB3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdERpciA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC89IDEuMjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24ubGVmdCA9IHRoaXMuYm91bmRzLnJpZ2h0IC0gdyAtICh0aGlzLnNwZWVkICogMS41KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogQG1ldGhvZCBraWNrXG4gICAgICogQGRlc2NyaXB0aW9uIGlmIGZvb3QgaXMgbmVhciBUcnVtcCwga2ljayBoaW0gaW50byB0aGUgQW5pbWFsXG4gICAgICovXG4gICAga2ljayAoZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCc6Ojo6VEhJUyBUUlVNUDo6Ojo6JyArIHRoaXMub2JqLnRydW1wKVxuICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLmluS2ljaztcblxuICAgICAgICBpZiAoIXRoaXMub2JqLnRydW1wKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjogbWlzc2luZyBjb2xsaXNpb24gbWF0cml4IChkaWQgeW91IGluY2x1ZGUgQ29sbGlkZXI/KScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc2VlIGlmIHdlJ3JlIGNsb3NlIGVub3VnaCB0byBraWNrIGluIHRoZSB5IGF4aXNcbiAgICAgICAgdmFyIHRydW1wWURpc3QgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgLSB0aGlzLm9iai50cnVtcC5pbWFnZS5kYXRhLndpZHRoIC0gdGhpcy5vYmoudHJ1bXAucG9zaXRpb24udG9wO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd0cnVtcFlEaXN0OicgKyB0cnVtcFlEaXN0KVxuXG4gICAgICAgIC8vIElmIFBsYXllciBpcyBjbG9zZSBpbiBZLCBhbmQgaW5zaWRlIFggcmFuZ2UsIGtpY2sgdGhlIFRydW1wIGludG8gQW5pbWFsQXJlYVxuICAgICAgICBpZiAodHJ1bXBZRGlzdCA8IDEwKSB7XG5cbiAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBUcnVtcCBtb3ZpbmcsIHNwZWVkXG4gICAgICAgICAgICB0aGlzLm9iai50cnVtcC5zcGVlZCA9IDQwO1xuXG4gICAgICAgICAgICAvLyBpZiB0b28gY2xvc2UgdG8gbGVmdCB3YWxsLCBwcmUtYXNzaWduIGEgdmFsdWVcbiAgICAgICAgICAgIGlmICh0aGlzLm9iai50cnVtcC5wb3NpdGlvbi5sZWZ0IDwgKHRoaXMuYm91bmRzLmxlZnQgKyAyMCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj4+VHJ1bXA6IGxlZnQgYm91bmQgY29ycmVjdGlvblwiKVxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gLTAuMjtcbiAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDAuODtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbXB1dGUgZHggYW5kIGR5IGZvciBUcnVtcFxuICAgICAgICAgICAgdmFyIGRpc3QgPSAodGhpcy5vYmoucG9zaXRpb24ubGVmdCAtIHRoaXMub2JqLnRydW1wLnBvc2l0aW9uLmxlZnQpIC8gNTA7XG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMoZGlzdCkgPCAxLjApIHtcbiAgICAgICAgICAgICAgICB2YXIgZHggPSBkaXN0O1xuICAgICAgICAgICAgICAgIGlmKGR4ID4gMC4wMDMgJiYgZHggPCAwLjgpIHtcbiAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IGR4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDEuMCAtIGR4O1xuICAgICAgICAgICAgICAgICAgICAvLyBzdGFydCB0aGUga2lja2luZyBzb3VuZFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZHggPCAwICYmIGR4ID4gLTAuOCkge1xuICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR4ID0gZHg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMS4wICsgZHg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChNYXRoLmFicyhkeCkgPCAwLjAwMykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMucmFuZG9taXplcigpO1xuICAgICAgICAgICAgICAgICAgICBkID0gZCAtIHRoaXMucmFuZG9taXplcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keCA9IGQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLnRydW1wLmR5ID0gMS4wICsgZHg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHN0YXJ0IHRoZSBraWNraW5nIHNvdW5kXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoudHJ1bXAuZHggPSAwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai50cnVtcC5keSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gc3RhcnQgdGhlIGtpY2tpbmcgc291bmRcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nYW1lLnNvdW5kUG9vbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUuc291bmRQb29sLnBsYXlTb3VuZCgna2ljaycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSAvLyBlbmQgb2YgZnVuY3Rpb25cblxuICAgIC8qKiBcbiAgICAgKiBAbWV0aG9kIHVua2lja1xuICAgICAqIEBkZXNjcmlwdGlvbiBzZXQgcG9zaXRpb24gb2YgUGxheWVyIGJhY2sgdG8gb3JpZ2luYWxcbiAgICAgKi9cbiAgICB1bmtpY2sgKGUpIHtcbiAgICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgICBjYXNlIDM4OlxuICAgICAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCA9IHRoaXMudW5LaWNrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdGltZVN0YW1wUmFuZG9tXG4gICAgICogQGRlc2NyaXB0aW9uIHJhbmRvbWl6ZSBpbiBhIDEwLWZvbGQgcmFuZ2UgdXNpbmcgd2luZG93LnBlcmZvcm1hbmNlXG4gICAgICovXG5cdHRpbWVTdGFtcFJhbmRvbSAoKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB0eXBlb2Ygd2luZG93LnBlcmZvcm1hbmNlLm5vdyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcbiAgICAgICAgfVxuXHRcdHZhciBudW0gPSAneHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHIgPSAoZCArIE1hdGgucmFuZG9tKCkqMTApJTEwIHwgMDtcbiAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTApO1xuICAgICAgICAgICAgcmV0dXJuIChjPT0neCcgPyByIDogKHImMHgzfDB4OCkpLnRvU3RyaW5nKDEwKTtcbiAgICAgICAgfSk7XG4gICAgICByZXR1cm4gbnVtIC8gMTAwMDA7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKVxuXHQgKiBAbGluayBcblx0ICovXG5cdGdldFJhbmRvbShtaW4sIG1heCkge1xuICAgXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcblx0fVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdXBkYXRlUmFuZG9tV2Fsa1xuICAgICAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZSBhIHJhbmRvbSB3YWxrLCB3aXRoIG9uZSBwcmVmZXJyZWQgZGlyZWN0aW9uLCBcbiAgICAgKiBnaXZpbmcgdGhlIG1lYW5kZXJpbmcgbW90aW9uIHVzZWQgYnkgQW5pbWFscy4gXG4gICAgICogQ2FsbCBpbiBhbiB1cGRhdGUgZnVuY3Rpb24gaW5zaWRlIHRoZSBDaGFyYWN0ZXIsIGUuZy4gXG4gICAgICogdXBkYXRlICgpIHsgdXBkYXRlUmFuZG9tV2FsaygpOyB9XG4gICAgICogVGhlIG1haW4gR2FtZSBvYmplY3QgYXV0b21hdGljYWxseSBmaW5kcyBhbmQgJ2ZpcmVzJyB1cGRhdGUoKSBmdW5jdGlvbiBpbiBcbiAgICAgKiBhbGwgQ2hhcmFjdGVycy5cbiAgICAgKi9cblx0dXBkYXRlUmFuZG9tV2FsayAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuaW1hbCBSYW5kb21XYWxrIE5PVCBpbml0aWFsaXplZCAoZGlkIHlvdSBsZWF2ZSBvdXQgb2YgY29uc3RydWN0b3I/KScpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cdFx0dGhpcy5jb3VudGVyKys7XG5cdFx0dGhpcy5kZWxheUNvdW50ZXIrKztcblx0XHRpZiAodGhpcy5kZWxheUNvdW50ZXIgPCB0aGlzLmRlbGF5KSB7XG5cdFx0XHQvL2NvbnNvbGUubG9nKCdkZWxheUNvdW50ZXI6JyArIHRoaXMuZGVsYXlDb3VudGVyICsgJyBNQVg6JyArIHRoaXMuTUFYX0RFTEFZKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cbiAgICAgICAgLy8gUGxheSBhbmltYWwncyBvcGVuaW5nIHNvdW5kIE9OQ0UgYXQgc3RhcnQgb2YgbW92ZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RNb3ZlICYmIHRoaXMuZ2FtZS5zb3VuZFBvb2wpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5zb3VuZFBvb2wucGxheVNvdW5kKHRoaXMub2JqLmNvbnN0cnVjdG9yLm5hbWUudG9Mb3dlckNhc2UoKSwgMC43KTtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RNb3ZlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb21wdXRlIGR4IGFuZCBkeSBmcm9tIHJhbmRvbSB3YWxrLiBzdG9yZSBpbml0aWFsIHBvc2l0aW9uXG4gICAgICAgIHRoaXMub2xkTGVmdCA9IHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIHRoaXMub2xkVG9wID0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuXG4gICAgICAgIC8vIHRoaXMub2JqLmRpcmVjdGlvbiB3YXMgc2V0IGluIGluaXRSYW5kb21XYWxrXG5cdFx0c3dpdGNoICh0aGlzLm9iai5kaXJlY3Rpb24pIHtcblx0XHRcdGNhc2UgJ3RvcCc6XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCAtPSAodGhpcy5zcGVlZCArICgwLjEgKiB0aGlzLmdldFJhbmRvbSgxLCB0aGlzLnNwZWVkKSkpO1xuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09IDEwICogKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkLzIpKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdsZWZ0Jzpcblx0XHRcdFx0dGhpcy5vYmoucG9zaXRpb24ubGVmdCAtPSAodGhpcy5zcGVlZCArICgwLjUgKiB0aGlzLmdldFJhbmRvbSgwLCB0aGlzLnNwZWVkKSkpO1xuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi50b3AgKz0gMTAgKih0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2JvdHRvbSc6XG4gXHRcdFx0XHRpZiAodGhpcy5jb3VudGVyID4gdGhpcy5NQVgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5NQVggPSB0aGlzLmdldFJhbmRvbSgyLCAxNSk7XG5cdFx0XHRcdFx0dGhpcy5uZXdMZWZ0ID0gKHRoaXMuZ2V0UmFuZG9tKC10aGlzLnNwZWVkLCB0aGlzLnNwZWVkKSk7XG5cdFx0XHRcdFx0dGhpcy5jb3VudGVyID0gMDtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmNvdW50ZXIgPiB0aGlzLk1BWCAvIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuZ2V0UmFuZG9tKC0wLjIsIDEuMikgLy9OT1RFOiBmaW5lLXR1bmUgdGhpcyB0byBtYWtlIGdhbWVwbGF5IGhhcmRlclxuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIHZhciByID0gdGhpcy5nZXRSYW5kb20oLTEsIDEpO1xuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IC09IHIgKiB0aGlzLm5ld0xlZnQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAncmlnaHQnOlxuXHRcdFx0XHR0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICs9ICh0aGlzLnNwZWVkICsgKDAuNSAqIHRoaXMuZ2V0UmFuZG9tKDAsIHRoaXMuc3BlZWQpKSk7XG5cdFx0XHRcdHRoaXMub2JqLnBvc2l0aW9uLnRvcCArPSAxMCAqICh0aGlzLmdldFJhbmRvbSgtdGhpcy5zcGVlZCwgdGhpcy5zcGVlZCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3JldHVybic6XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBjYXVzZWQgYnkgYSBUcnVtcCBjb2xsaWRlciBydW5uaW5nIGludG8gdGhlIEFuaW1hbFxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHJldHVybiBBbmltYWwgdG8gaXRzIGNhZ2VcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5kaXJlY3Rpb24gPSAnY2FnZWQnO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdyaXRlIHJldHVybiBhcmNcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NhZ2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ID0gdGhpcy5zdGFydExlZnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy5zdGFydFRvcDtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB3aGVuIGNhZ2VkLCByZXNldCB1bnRpbCBpdCBpcyB1bmNhZ2VkIGFnYWluXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuXHRcdFx0XHRjb25zb2xlLmVycm9yKCdNb3Zlci5zZXRQcmVmRGlyZWN0aW9uOiBpbnZhbGlkIGRpcmVjdGlvbjonICsgdGhpcy5vYmouZGlyZWN0aW9uKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG4gICAgICAgIC8vIENvbXB1dGUgZHggYW5kIGR5IGZvciBBbmltYWxzXG4gICAgICAgIHZhciB4ZGlzdCA9IHRoaXMub2xkTGVmdCAtIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQ7XG4gICAgICAgIHZhciB5ZGlzdCA9IHRoaXMub2xkVG9wIC0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuICAgICAgICB2YXIgc3VtID0geGRpc3QgKyB5ZGlzdDtcbiAgICAgICAgaWYgKHN1bSA+IDAuMDAwMSkge1xuICAgICAgICAgICAgdGhpcy5vYmouZHggPSB4ZGlzdCAvIHN1bTtcbiAgICAgICAgICAgIHRoaXMub2JqLmR5ID0geWRpc3QgLyBzdW07ICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub2JqLmR4ID0gMDtcbiAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNhdmUgb3VyIG5ldyBwb3NpdGlvblxuICAgICAgICB0aGlzLm9sZExlZnQgPSB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0O1xuICAgICAgICB0aGlzLm9sZFRvcCA9IHRoaXMub2JqLnBvc2l0aW9uLnRvcDtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKCcgZHg6JyArIHRoaXMub2JqLmR4ICsgJyBkeTonICsgdGhpcy5vYmouZHkgKyAnIHN1bTonICsgc3VtKVxuICAgIH1cblxuICAgIGNhbGN1bGF0ZUNvbGxpc2lvbiAodHJ1bXAsIGFuaW1hbCkge1xuICAgICAgICB2YXIgdyA9IHRoaXMub2JqLmltYWdlLmRhdGEud2lkdGg7XG4gICAgICAgIHZhciBoID0gdGhpcy5vYmouaW1hZ2UuZGF0YS5oZWlnaHQ7XG4gICAgICAgIHZhciBhdyA9IGFuaW1hbC5pbWFnZS5kYXRhLndpZHRoO1xuICAgICAgICB2YXIgYWggPSBhbmltYWwuaW1hZ2UuZGF0YS5oZWlnaHQ7XG5cbiAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPCBhbmltYWwucG9zaXRpb24ubGVmdCArIGF3ICYmXG4gICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi5sZWZ0ICsgdyA+IGFuaW1hbC5wb3NpdGlvbi5sZWZ0ICYmXG4gICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPCBhbmltYWwucG9zaXRpb24udG9wICsgYWggJiZcbiAgICAgICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLnRvcCArIGggPiBhbmltYWwucG9zaXRpb24udG9wKSB7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vZ2V0IFRydW1wIGNlbnRlcmFsIHBvaW50XG4gICAgICAgICAgICAgICAgdmFyIHRYQ2VudGVyID0gdGhpcy5vYmoucG9zaXRpb24ubGVmdCArIHcvMjtcbiAgICAgICAgICAgICAgICB2YXIgdFlDZW50ZXIgPSB0aGlzLm9iai5wb3NpdGlvbi50b3AgICsgaC8yO1xuXG4gICAgICAgICAgICAgICAgLy9nZXQgQW5pbWFsIGNlbnRyYWwgcG9pbnRcbiAgICAgICAgICAgICAgICB2YXIgYVhDZW50ZXIgPSBhbmltYWwucG9zaXRpb24ubGVmdCArIGF3LzI7XG4gICAgICAgICAgICAgICAgdmFyIGFZQ2VudGVyID0gYW5pbWFsLnBvc2l0aW9uLnRvcCArIGFoLzI7XG5cbiAgICAgICAgICAgICAgICAvL2NvbXB1dGUgeCBhbmQgeSB2ZWN0b3IgYmV0d2VlbiBjZW50ZXJzXG4gICAgICAgICAgICAgICAgdmFyIGNYRGlmZiA9IHRYQ2VudGVyIC0gYVhDZW50ZXI7XG4gICAgICAgICAgICAgICAgdmFyIGNZRGlmZiA9IHRZQ2VudGVyID0gYVlDZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAvLyBUcnVtcCBkb2Vzbid0IHJlYWN0IGlmIG5vdCBtb3ZpbmcgKGV2ZW4gaWYgYW5pbWFsIGRvZXMpXG4gICAgICAgICAgICAgICAgaWYgKHRydW1wLnNwZWVkICE9IDAgJiYgdHJ1bXAuZHggIT0gMCAmJiB0cnVtcC5keSAhPSAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbW92ZSBvYmplY3Qgc28gaXQgaXNuJ3QgY29sbGlkaW5nIGFueW1vcmVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNYRGlmZiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi54ICs9IChjWERpZmYgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLnBvc2l0aW9uLnggLT0gKGNYRGlmZiArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNZRGlmZiA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVtcC5wb3NpdGlvbi55ICs9IChjWURpZmYgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLnBvc2l0aW9uLnkgLT0gKGNZRGlmZiArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbm9ybWFsaXplIG5ldyB2ZWN0b3JzXG4gICAgICAgICAgICAgICAgICAgIHRydW1wLmR4ID0gLWNYRGlmZiAvIGNZRGlmZjtcbiAgICAgICAgICAgICAgICAgICAgdHJ1bXAuZHkgPSAtY1lEaWZmIC8gY1hEaWZmO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHJvdW5kaW5nIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZGlmID0gTWF0aC5hYnModHJ1bXAuZHggKyB0cnVtcC5keSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZGlmID4gMS4wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ1bXAuZHggPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLmR5IC09IGRkaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydW1wLmR5ICs9IGRkaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vZW5kIG9mIFRydW1wIGlzIG1vdmluZ1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2R4Ojo6Ojo6JyArIHRydW1wLmR4ICsgJyBkeTo6Ojo6OicgKyB0cnVtcC5keSlcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEBtZXRob2QgdXBkYXRlUGluZ1BvbmdcbiAgICAgKiBAZGVzY3JpcHRpb24gbW92ZSBpbiBhIHBpbmctcG9uZyBzdHlsZS5cbiAgICAgKiBDYWxsIGluIGFuIHVwZGF0ZSBmdW5jdGlvbiBpbnNpZGUgdGhlIENoYXJhY3RlciwgZS5nLiBcbiAgICAgKiB1cGRhdGUgKCkgeyB1cGRhdGVSYW5kb21XYWxrKCk7IH1cbiAgICAgKiBUaGUgbWFpbiBHYW1lIG9iamVjdCBhdXRvbWF0aWNhbGx5IGZpbmRzIGFuZCAnZmlyZXMnIHVwZGF0ZSgpIGZ1bmN0aW9uIGluIFxuICAgICAqIGFsbCBDaGFyYWN0ZXJzLlxuICAgICAqIFBvc3NpYmxlIHVwZGF0ZXMgZm9yIG1vdGlvbjpcbiAgICAgKiAxLiBDb2xsaXNpb24gd2l0aCBhIFBsYXllciAodmlhIGtpY2soKSBtZXRob2QpIHN0YXJ0cyB0aGUgVHJ1bXAgY2hhcmFjdGVyIG1vdmluZ1xuICAgICAqIDIuIFRydW1wIHdpbGwgYm91bmNlIG9uIGFsbCB3YWxscyBFWENFUFQgdGhlIGJvdHRvbSB3YWxsXG4gICAgICogMy4gV2hlbiB0aGUgVHJ1bXAgaW50ZXJzZWN0cyB0aGUgYm90dG9tIHdhbGwsIHRoZXkgc3RvcCBtb3ZpbmdcbiAgICAgKiA0LiBJZiB0aGV5IGNvbGxpZGUgd2l0aCBhbiBBbmltYWwsIHRoZXkgYm91bmNlLCBhbmQgdGhlIEFuaW1hbCByZXR1cm5zIHRvIGl0cyBDYWdlLlxuICAgICAqL1xuICAgIHVwZGF0ZVBpbmdQb25nICgpIHtcblxuICAgICAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUcnVtcCBQaW5nUG9uZyBOT1QgaW5pdGlhbGl6ZWQgKGRpZCB5b3UgbGVhdmUgb3V0IG9mIGNvbnN0cnVjdG9yPyknKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKCdkeDonICsgdGhpcy5vYmouZHggKyAnIGR5OicgKyB0aGlzLm9iai5keSk7XG4gICAgICAgIHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgLT0gdGhpcy5vYmouc3BlZWQgKiB0aGlzLm9iai5keDtcbiAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wIC09IHRoaXMub2JqLnNwZWVkICogdGhpcy5vYmouZHk7XG5cbiAgICAgICAgLy9jaGVjayBib3VuZHMgKEFuaW1hbEFyZWEpXG4gICAgICAgIGlmICh0aGlzLmJvdW5kcykge1xuICAgICAgICAgICAgaWYgKHRoaXMub2JqLmltYWdlLmRhdGEpIHtcblxuICAgICAgICAgICAgICAgIHZhciB3ID0gdGhpcy5vYmouaW1hZ2UuZGF0YS53aWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaCA9IHRoaXMub2JqLmltYWdlLmRhdGEuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgLy8gY2F0Y2ggY2FzZXMgd2hlcmUgVHJ1bXAgZ2V0cyBpbnRvIHRoZSBDYWdlIGFyZWFcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmoucG9zaXRpb24udG9wIDwgdGhpcy5ib3VuZHMudG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5keSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub2JqLmR5ID0gLXRoaXMub2JqLmR5O1xuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5wb3NpdGlvbi50b3AgPSB0aGlzLmJvdW5kcy50b3AgKyAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHJ1biB0aGlzIG9ubHkgaWYgd2UgYXJlIG1vdmluZyBkb3duIHRoZSBzY3JlZW5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmouZHkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi50b3AgPiAodGhpcy5vYmouc3RhcnRUb3AgLSAodGhpcy5vYmouZHkgKiB0aGlzLm9iai5zcGVlZCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMub2JqLmR5ID0gLXRoaXMub2JqLmR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmoucG9zaXRpb24udG9wID0gdGhpcy5vYmouc3RhcnRUb3A7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3QgPSB0aGlzLmJvdW5kcy5ib3R0b20gLSBoIC0gdGhpcy5vYmoucG9zaXRpb24udG9wO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3BkID0gLXRoaXMub2JqLmR5ICogdGhpcy5vYmouc3BlZWQgKiA0O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBkZWNlbGVyYXRlIGJlZm9yZSBzdG9wcGluZyBhdCBib3R0b20gb2YgQW5pbWFsQXJlYVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IHNwZCAmJiBzcGQgPiAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5zcGVlZCAvPSAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvL2VuZCBvZiBkeSBuZWdhdGl2ZSAoZ29pbmcgZG93bilcblxuICAgICAgICAgICAgICAgIC8vIGJvdW5jZSBvbiB0aGUgb3RoZXIgMyB3YWxsc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5wb3NpdGlvbi5sZWZ0IDwgdGhpcy5ib3VuZHMubGVmdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keCA9IC10aGlzLm9iai5keDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLnRvcCA8IHRoaXMuYm91bmRzLnRvcCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5keSA9IC10aGlzLm9iai5keTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnBvc2l0aW9uLmxlZnQgPiB0aGlzLmJvdW5kcy5yaWdodCAtIHcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmouZHggPSAtdGhpcy5vYmouZHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgZW5jb3VuZGVyIGFuIGFuaW1hbCwgYm91bmNlLCBBTkQgJ2tpY2snIHRoZSBhbmltYWwgYmFjayBpbnRvIGl0cyBjYWdlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLmFuaW1hbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMub2JqLmFuaW1hbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmltYWwgPSB0aGlzLm9iai5hbmltYWxzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxjdWxhdGVDb2xsaXNpb24odGhpcy5vYmosIGFuaW1hbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3NldCB0aGUgQW5pbWFsJ3Mgc3RhdGUgdG8gcmV0dXJuIGhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPj4+UkVUVVJOSU5HIEFOSU1BTCBUTyBDQUdFJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYWwuZGlyZWN0aW9uID0gJ3JldHVybic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqLnNwZWVkIDwgMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9iai5zcGVlZCA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9icmVhayBvdXQgb2YgaG9yaXpvbnRhbCBtb3ZlXG4gICAgICAgIGlmICh0aGlzLm9iai5keSA8IDAuMDAxICYmIHRoaXMub2JqLmR4ID4gMC4wMDEpIHtcbiAgICAgICAgICAgIHZhciBkID0gdGhpcy5yYW5kb21pemVyKCk7XG4gICAgICAgICAgICB0aGlzLm9iai5keSArPSBkIC0gdGhpcy5yYW5kb21pemVyKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufSAvLyBlbmQgb2YgY2xhc3NcbiIsIi8qKlxuICogUGxheWVyLmpzXG4gKiBVc2VyLWNvbnRyb2xsZWQgQ2hhcmFjdGVyXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgQ2hhcmFjdGVyIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlciAoY29uZmlnKTtcblxuICAgIHRoaXMubW92ZXIuaW5pdFNsZXcoKTsgLy9lbmFibGVzIFBsYXllciBtb3ZlbWVudFxuIFx0fVxuXG4gIHVwZGF0ZSAoKSB7XG4gICAgdGhpcy5tb3Zlci51cGRhdGVTbGV3KCk7IC8vc21vb3RocyBtb3Rpb24sIGFwcGxpZXMgQ29sbGlkZXJcbiAgfVxuIH1cbiIsIi8qKiBcbiAqIFBsYXllckFyZWEuanNcbiAqIFRoZSByZWdpb24gd2hlcmUgdGhlIFBsYXllciBjYW4gbW92ZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIEFyZWFcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXJBcmVhIGV4dGVuZHMgQXJlYSB7XG5cbiBcdGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiBcdFx0c3VwZXIoY29uZmlnKTtcbiBcdH1cblxuIH0iLCIvKiogXG4gKiBTY29yZS5qc1xuICogRGlzcGxheSB1c2VyIHNjb3JlXG4gKiBAaW5oZXJpdHMgRHluYW1pY1RleHQsIFRleHQsIEluZm8sIEdhbWVQaWVjZVxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZSBleHRlbmRzIER5bmFtaWNUZXh0IHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblx0fVxufSIsIi8qKiBcbiAqIFNjcmVlbi5qc1xuICogR2VuZXJpYyBTY3JlZW4gb2JqZWN0XG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLmpzXG4gKi9cbiBpbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcblxuIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbiBpbXBvcnQgU3RhdGljSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG4gaW1wb3J0IElkZW50aXR5IGZyb20gJy4vU3RhdGljSW1hZ2UuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuIGV4dGVuZHMgR2FtZVBpZWNlIHtcblxuIFx0Y29uc3RydWN0b3IgKGNvbmZpZykge1xuIFx0XHRzdXBlcihjb25maWcpOyAvL2luaXQgJ3BhcmVudCcgR2FtZVBpZWNlXG5cbiBcdFx0Ly8gc2F2ZSBhIHJlZmVyZW5jZSB0byBvdXIgcGFyZW50IEdhbWUgb2JqZWN0XG4gXHRcdHRoaXMuZ2FtZSA9IGNvbmZpZy5nYW1lO1xuXG4gXHRcdHdpbmRvdy5jb25maWcgPSBjb25maWc7IC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9ERUJVRyBPTkxZXG5cbiBcdFx0Ly8gU2NyZWVucyBhcmUgZGVmaW5lZCBpbiBIVE1MLCBzbyBzYXZlIGEgcmVmZXJlbmNlIHRvIG91ciBET00gaWRcbiBcdFx0dGhpcy5kb21JZCA9IGNvbmZpZy5pZDtcblxuIFx0XHQvLyBzYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBET00gZWxlbWVudCB3ZSdyZSBjb25uZWN0ZWQgdG9cbiBcdFx0dGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmRvbUlkKTtcblxuIFx0XHQvLyBpbnNlcnQgdGhlIGNvcHlyaWdodCBpbmZvIGZyb20gdGhlIG1haW4gR2FtZSBvYmplY3RcbiBcdFx0dGhpcy5hZGRXYXJuaW5nKCk7XG4gXHR9XG5cbiBcdC8vIGxvYWQgYSBiYWNrZ3JvdW5kIGltYWdlIGludG8gdGhlIFNjcmVlblxuIFx0bG9hZEJhY2tncm91bmQgKHBhdGgsIGNhbGxiYWNrKSB7XG4gXHRcdGNvbnNvbGUubG9nKFwibG9hZGluZzpcIiArIHRoaXMuZG9tSWQpO1xuIFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZSA9IG5ldyBTdGF0aWNJbWFnZShcbiBcdFx0XHR7XG4gXHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUgKyAnLWltYWdlJyxcbiBcdFx0XHRcdGRvbUlkOiB0aGlzLmlkICsgJy1pbWFnZScsXG4gXHRcdFx0XHRwYXRoOiBwYXRoLFxuIFx0XHRcdFx0Y2FsbGJhY2s6IGNhbGxiYWNrXG4gXHRcdFx0fVxuIFx0XHQpO1xuIFx0XHR0aGlzLmJhY2tncm91bmRJbWFnZS5sb2FkQmFja2dyb3VuZEltYWdlKHRoaXMuZG9tLCBwYXRoLCBjYWxsYmFjayk7XG4gXHR9XG5cbiBcdC8vIHNob3cgYW5kIGhpZGUgcmVnaW9ucyBvZiB0aGUgU2NyZWVuXG4gXHRzaG93U2NyZWVuICgpIHtcbiBcdFx0Y29uc29sZS5sb2coXCJzaG93aW5nOlwiICsgdGhpcy5kb21JZCk7XG4gXHRcdHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gXHR9XG5cbiBcdGhpZGVTY3JlZW4gKCkge1xuIFx0XHRjb25zb2xlLmxvZyhcImhpZGluZzpcIiArIHRoaXMuZG9tSWQpO1xuIFx0XHR0aGlzLmRvbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gXHR9XG5cbiBcdHNob3dIZWFkZXIgKCkge1xuIFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiBcdH1cblxuIFx0aGlkZUhlYWRlciAoKSB7XG5cdFx0dGhpcy5kb20ucXVlcnlTZWxlY3RvcignLmhlYWRlcicpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuIFx0fVxuXG4gXHRzaG93Rm9vdGVyICgpIHtcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuIFx0fVxuXG4gXHRoaWRlRm9vdGVyICgpIHtcblx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gXHR9XG5cbiBcdGFkZFdhcm5pbmcgKCkge1xuIFx0XHR0aGlzLmRvbS5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJykuaW5uZXJIVE1MID0gdGhpcy5nYW1lLndhcm5pbmc7XG4gXHR9XG5cbiB9OyIsIi8qKiBcbiAqIEBjbGFzcyBTb3VuZGVyLmpzXG5cbiAqIEBkZXNjcmlwdGlvbiBwcm92aWRlIHNvdW5kcyB0aGF0IG90aGVyIG9iamVjdHMgY2FuIHBsYXkuIERldGVjdHMgdGhlIGtpbmRzIFxuICogb2YgYXVkaW8gZmlsZXMgdGhlIHdlYiBicm93ZXIgY2FuIHBsYXksIGFuZCBzZXJ2ZXMgdGhlIGZpcnN0IGZpbGUgaXQgZmluZHMgaW4gXG4gKiB0aGUgL2F1ZGlvIGZvbGRlciBvZiB0aGUgZGlzdHJpYnV0aW9uLiBBdWRpbyBmaWxlcyBhcmUgYWNjZXNzZWQgYnkgY3VzdG9tIG5hbWVzIFxuICogZm9yIHBsYXliYWNrLlxuXG4gKiBBZGFwdGVkIGZyb21cbiAqIEBodHRwOi8vYmxvZy5za2xhbWJlcnQuY29tL2h0bWw1LWNhbnZhcy1nYW1lLWh0bWw1LWF1ZGlvLWFuZC1maW5pc2hpbmctdG91Y2hlcy9cblxuICogU291bmRlci5qcyBzaG91bGQgYmUgbG9hZGVkIGluIHRoZSBtYWluIEdhbWUgaW5pdGlhbGl6YXRpb24gcHJvY2Vzcy5cblxuICogSW4gYWRkaXRpb24sIHRoZSBkaXN0cmlidXRpb24gTVVTVCBoYXZlIGFuIC9hdWRpbyBkaXJlY3Rvcnkgd2l0aCBmaWxlcyBpbiBtdWx0aXBsZSBcbiAqIGF1ZGlvIGZvcm1hdHM6XG4gKiBNUDMgKC5tcDMpXG4gKiBPZ2ctVm9yYmlzICgub2dnKVxuICogV0FWICgud2F2KVxuXG4gKiBBdWRpbyBFZGl0b3JzOlxuICogQXVkYWNpdHkgKGZyZWUpXG4gKiBAbGluayBodHRwOi8vd3d3LmF1ZGFjaXR5dGVhbS5vcmcvXG4gKiBQcm9Ub29scyAoJCQkKVxuICogQGxpbmsgaHR0cDovL3d3dy5hdmlkLmNvbS9wcm8tdG9vbHNcblxuICogQXVkaW8gY29udmVydGVyczpcbiAqIEBsaW5rIGh0dHA6Ly9tZWRpYS5pby9cbiAqIEBsaW5rIGh0dHBzOi8vc291cmNlZm9yZ2UubmV0L3Byb2plY3RzL2F1ZGFjaXR5L1xuICogQGxpbmsgaHR0cDovL3d3dy5tZWRpYWh1bWFuLmNvbS9hdWRpby1jb252ZXJ0ZXIvXG4gKiBAbGluayBodHRwOi8vd3d3Lmh0bWw1YXVkaW9jb252ZXJ0ZXIuY29tL1xuIFxuICogQXVkaW8gU2FtcGxlczpcbiAqIEBsaW5rIGh0dHA6Ly93d3cuZ3JzaXRlcy5jb20vYXJjaGl2ZS9zb3VuZHMvY2F0ZWdvcnkvMjUvP29mZnNldD0yMFxuICogQGxpbmsgaHR0cHM6Ly93d3cuZnJlZXNvdW5kLm9yZ1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VuZGVyIHtcblxuXHRjb25zdHJ1Y3RvciAoKSB7XG5cblx0XHQvLyBDcmVhdGUgYW4gYXJyYXkgb2YgbG9hZGVkIHNvdW5kc1xuXHRcdHRoaXMucGF0aCA9ICdhdWRpby8nO1xuXG5cdFx0dGhpcy5zb3VuZHMgPSBbXTtcblx0XHR0aGlzLmNoZWNrQXVkaW8oKTtcblx0fVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBjaGVja0F1ZGlvXG5cdCAqIEBkZXNjcmlwdGlvbiBzZWUgd2hpY2ggYXVkaW8gZmlsZSBmb3JtYXRzIGNhbiBiZSBwbGF5ZWQgYnkgdGhlIGJyb3dzZXIuXG5cdCAqL1xuXHRjaGVja0F1ZGlvICgpIHtcblx0XHR2YXIgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2F1ZGlvJyk7XG5cdFx0dmFyIGJvb2wgPSBmYWxzZTtcblxuXHRcdHRyeSB7XG5cdFx0XHRpZiAoYm9vbCA9ICEhZWxlbS5jYW5QbGF5VHlwZSkge1xuXHRcdFx0XHRib29sID0gbmV3IEJvb2xlYW4oYm9vbCk7XG5cdFx0XHRcdGJvb2wub2dnID0gZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpLnJlcGxhY2UoL15ubyQvLCcnKTtcblx0XHRcdFx0Ym9vbC5tcDMgPSBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby9tcGVnOycpLnJlcGxhY2UoL15ubyQvLCcnKTtcblx0XHRcdFx0Ym9vbC53YXYgPSBlbGVtLmNhblBsYXlUeXBlKCdhdWRpby93YXY7IGNvZGVjcz1cIjFcIicpLnJlcGxhY2UoL15ubyQvLCcnKTtcblx0XHRcdFx0Ym9vbC5tNGEgPSAoZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8veC1tNGE7JykgfHwgZWxlbS5jYW5QbGF5VHlwZSgnYXVkaW8vYWFjOycpKS5yZXBsYWNlKC9ebm8kLywnJyk7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdC8vIGxpc3Qgc3VwcG9ydGVkIGF1ZGlvIHR5cGVzXG5cdFx0XHQvL2VsZW0gPSBudWxsOyBcblx0XHRcdHRoaXMudHlwZSA9IGJvb2w7XG5cblx0XHRcdGZvciAodmFyIGkgaW4gdGhpcy50eXBlKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGkgKyAnIHN1cHBvcnQ6JyArIHRoaXMudHlwZVtpXSk7XG5cdFx0XHR9XG5cdH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2Qgc2V0U291bmRcblx0ICogQGRlc2NyaXB0aW9uIGNhbGxiYWNrIGZvciBsb2FkaW5nIHNvdW5kLCBhZGRzIHRvIHRoZSBcblx0ICogc291bmRzIGFycmF5IGZvciBsYXRlciBwbGF5YmFjay5cblx0ICovXG5cdHNldFNvdW5kIChlLCBuYW1lLCB2b2x1bWUpIHtcblx0XHRpZiAoIXZvbHVtZSkge1xuXHRcdFx0dm9sdW1lID0gMC41O1xuXHRcdH1cblx0XHR0aGlzLnNvdW5kc1tuYW1lXSA9IGUudGFyZ2V0O1xuXHRcdHRoaXMuc291bmRzW25hbWVdLnZvbHVtZSA9IHZvbHVtZTtcblx0fVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBzb3VuZEVycm9yXG5cdCAqIEBkZXNjcmlwdGlvbiBjYWxsYmFjayBmb3IgZmFpbGVkIGxvYWRzIG9mIHNvdW5kIGZpbGVzLlxuXHQgKi9cblx0c291bmRFcnJvciAoZSwgbmFtZSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ0F1ZGlvICcgKyBuYW1lICsgJyBmYWllZCB0byBsb2FkJyk7XG5cdFx0dGhpcy5zb3VuZHNbbmFtZV0gPSBudWxsO1xuXHR9XG5cblx0LyoqIFxuXHQgKiBAbWV0aG9kIGFkZFNvdW5kXG5cdCAqIEBkZXNjcmlwdGlvbiBhZGQgYSBuZXcgc291bmQuIFxuXHQgKiBAcGFyYW0gU3RyaW5nIG5hbWUgdGhlIG5hbWUgb2YgdGhlIHNvdW5kLiBUaGUgc291bmQgbmFtZSBcblx0ICogbXVzdCBtYXRjaCB0aGUgZmlsZSBjb250YWluaW5nIHRoZSBhdWRpbywgZS5nLiBmb3IgYSBzb3VuZCBjYWxsZWQgXG5cdCAqICdraWNrJyB0aGVyZSBtdXN0IGJlIGEgZmlsZSAvYXVkaW8va2ljay5tcDMgXG5cdCAqIFBvc3NpYmxlIGZvcm1hdHMgKGNyZWF0ZSB0aGVtIGFsbCBkdXJpbmcgcHJvZHVjdGlvbilcblx0ICogLSBNUDMgKC5tcDMpXG5cdCAqIC0gT2dnLVZvcmJpcyAoLm9nZylcblx0ICogLSBXQVYgKC53YXYpXG5cdCAqIEBwYXJhbSBOdW1iZXIgdm9sdW1lIHRoZSBsb3VkbmVzcyBvZiB0aGUgc291bmQsIGJldHdlZW4gMCAoc2lsZW50KSBcblx0ICogYW5kIDEuMCAoYXMgbG91ZCBhcyBwb3NzaWJsZSkuXG5cdCAqL1xuXHRhZGRTb3VuZCAobmFtZSwgdm9sdW1lKSB7XG5cdFx0aWYgKCFuYW1lKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCd0cmllZCB0byBsb2FkIGF1ZGlvIGZpbGUgd2l0aG91dCBhIG5hbWUgYW5kL29yIHBhdGgsIGFib3J0aW5nJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIHRyeSBjcmVhdGluZyB0aGUgc291bmRcblx0XHR2YXIgc25kO1xuXHRcdC8vIGdldCB0aGUgZXh0ZW5zaW9uIGFuZCByZW1haW5pbmcgcGF0aFxuXHRcdGZvciAodmFyIGkgaW4gdGhpcy50eXBlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygndGhpcy50eXBlWycgKyBpICsgJ109JyArIHRoaXMudHlwZVtpXSk7XG5cdFx0XHRpZiAodGhpcy50eXBlW2ldICE9IFwiXCIpIHsgLy9yZXR1cm5lZCBkYXRhVHlwZSBmb3IgZWxlbS5jYW5QbGF5VHlwZSguLi4pXG5cblx0XHRcdFx0dmFyIGZpbGVQYXRoID0gdGhpcy5wYXRoICsgbmFtZSArICcuJyArIGk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiVFJZSU5HIFRPIExPQUQ6XCIgKyB0aGlzLnBhdGggKyBuYW1lICsgJy4nICsgaSk7XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBBdWRpbyBvYmplY3Rcblx0XHRcdFx0c25kID0gbmV3IEF1ZGlvKGZpbGVQYXRoKTtcblxuXHRcdFx0XHQvLyB0cmFwIGxvYWQgYW5kIGVycm9yIGV2ZW50c1xuXHRcdFx0XHRzbmQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkZGF0YScsIFxuXHRcdFx0XHRcdGV2ZW50ID0+IHRoaXMuc2V0U291bmQoZXZlbnQsIG5hbWUsIHZvbHVtZSksIGZhbHNlKTtcblxuXHRcdFx0XHRzbmQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBcblx0XHRcdFx0XHRldmVudCA9PiB0aGlzLnNvdW5kRXJyb3IoZXZlbnQsIG5hbWUpLCBmYWxzZSk7XG5cblx0XHRcdFx0Ly8gc3RhcnQgbG9hZGluZyB0aGUgc291bmRcblx0XHRcdFx0c25kLmxvYWQoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghc25kKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdzb3VuZCBmaWxlIGZvcjonICsgbmFtZSArICcgbm90IGZvdW5kIGluIGF1ZGlvJyk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKiogXG5cdCAqIEBtZXRob2QgcGxheVNvdW5kXG5cdCAqIEBkZXNjcmlwdGlvblxuXHQgKiBAcGFyYW1zIFN0cmluZyBuYW1lIHRoZSBuYW1lIG9mIHRoZSBzb3VuZC4gTXVzdCBtYXRjaCB0aGUgZmlsZW5hbWUgXG5cdCAqIFdJVEhPVVQgYSBmaWxlIGV4dGVuc2lvbiBpbiB0aGUgL2F1ZGlvIGZvbGRlciBmb3IgdGhlIGdhbWUuXG5cdCAqL1xuXHRwbGF5U291bmQgKG5hbWUpIHtcblx0XHRpZiAodGhpcy5zb3VuZHNbbmFtZV0pIHtcblx0XHRcdHRoaXMuc291bmRzW25hbWVdLnBsYXkoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS5lcnJvcignbm8gc291bmQgZmlsZSB3aXRoIG5hbWU6JyArIG5hbWUgKyAnIGluIGF1ZGlvIGZvbGRlcicpO1xuXHRcdH1cblx0fVxuXG5cdC8qKiBcblx0ICogQG1ldGhvZCBmaWxlRXhpc3RzXG5cdCAqIEBkZXNjcmlwdGlvbiBkZXRlY3QgaWYgYSBmaWxlIGlzIHByZXNlbnQgb24gdGhlIHNlcnZlci4gVXNlcyBhbiBcblx0ICogc3luY2hyb25vdXMgQWpheCB0ZWNobmlxdWUsIHNvIFNMT1cgaWYgeW91IGFyZSB1c2luZyBhIHJlbW90ZSBzZXJ2ZXIuIFxuXHQgKiBObyBjb21wYXJhYmxlIG1ldGhvZCBleGlzdHMgZm9yIGRldGVybWluaW5nIGlmIGEgZm9sZGVyIGV4aXN0cyBpbiBcblx0ICogY2xpZW50LXNpZGUgdmFuaWxsYSBKYXZhU2NyaXB0LlxuXHQgKiBAcGFyYW0gU3RyaW5nIHVybCB0aGUgcGF0aCB0byB0aGUgZmlsZSBvbiB0aGUgc2VydmVyLlxuXHQgKi9cblx0ZmlsZUV4aXN0cyh1cmwpIHtcblx0XHR2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0eGhyLm9wZW4oJ0hFQUQnLCB1cmwsIGZhbHNlKTtcblx0XHR4aHIuc2VuZCgpO1xuXHRcdGlmICh4aHIuc3RhdHVzID09ICc0MDQnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG59IC8vIGVuZCBvZiBjbGFzcyIsIi8qKiBcbiAqIFN0YXJ0U2NyZWVuLmpzXG4gKiBPcGVuaW5nIHNjcmVlbiBmb3IgZ2FtZS5cbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIFNjcmVlblxuICovXG5pbXBvcnQgR2FtZVBpZWNlIGZyb20gJy4vR2FtZVBpZWNlLmpzJztcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8uanMnO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcbmltcG9ydCBTdGF0aWNUZXh0IGZyb20gJy4vU3RhdGljVGV4dC5qcyc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBTdGF0aWNJbWFnZSBmcm9tICcuL0ltYWdlLmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcbmltcG9ydCBCYWNrZ3JvdW5kIGZyb20gJy4vQmFja2dyb3VuZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblxuXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG5cdFx0c3VwZXIoY29uZmlnKTtcblxuXHRcdC8vIHRoaXMuZG9tIGRlZmluZWQgaW4gU2NyZWVuXG5cblx0XHQvLyBMb2FkIFN0YXJ0U2NyZWVuIHN1Yi1vYmplY3RzXG5cdFx0dGhpcy5sb2FkQmFja2dyb3VuZCgnaW1nL3NjcmVlbnMvc3RhcnQtc2NyZWVuLnBuZycpO1xuXG5cdFx0Ly8gbG9hZCBpZGVudGl0eSBpbWFnZVxuXHRcdHRoaXMubG9hZElkZW50aXR5KCk7XG5cblx0XHQvLyBsb2FkIGluc3RydWN0aW9uc1xuXHRcdHRoaXMubG9hZEluc3RydWN0aW9ucygpO1xuXG5cdFx0Ly8gTWFrZSB0aGUgc3RhcnQgYnV0dG9uIG9wZW4gdGhlIG1haW4gZ2FtZSBzY3JlZW5cblx0XHR0aGlzLmJpbmRTdGFydCgpO1xuXHR9XG5cblx0bG9hZElkZW50aXR5ICgpIHtcblx0XHR0aGlzLmlkZW50aXR5ID0gbmV3IElkZW50aXR5KFxuXHRcdFx0e1xuXHRcdFx0XHRuYW1lOiAnaWRlbnRpdHknLCBcblx0XHRcdFx0ZG9tSWQ6ICdzdGFydC1zY3JlZW4taWRlbnRpdHknLFxuXHRcdFx0XHRwYXRoOiAnaW1nL2lkZW50aXR5L2xvZ28ucG5nJywgXG5cdFx0XHRcdGF1dGhvcjogJ3BldGUgbWFya2lld2ljeicsIFxuXHRcdFx0XHRzb3VyY2U6ICdwbHlvanVtcCdcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0Ly8gc2V0IHBvc2l0aW9uIG9mIElkZW50aXR5XG5cdFx0dGhpcy5pZGVudGl0eS5zZXRET01Qb3NpdGlvbiAoXG5cdFx0XHR7XG5cdFx0XHRcdHRvcDogMCxcblx0XHRcdFx0bGVmdDogMFxuXHRcdFx0fVxuXHRcdCk7XG5cblx0fVxuXG5cdGxvYWRJbnN0cnVjdGlvbnMgKCkge1xuXG5cdFx0dGhpcy5pbnN0cnVjdGlvbnMgPSBuZXcgU3RhdGljVGV4dChcblx0XHRcdHtcblx0XHRcdFx0bmFtZTogJ2dhbWUgaW5zdHJ1Y3Rpb25zJyxcblx0XHRcdFx0ZG9tSWQ6ICdpbnN0cnVjdGlvbnMnLFxuXHRcdFx0XHR0ZXh0OiAnUGxheSB0byB3aW4uIFRoYXQgaXMgYWxsIFRydW1wIGNhcmVzIGFib3V0LCBhbmQgc28gc2hvdWxkIHlvdS4nXG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuaW5zdHJ1Y3Rpb25zLnNldERPTVBvc2l0aW9uKFxuXHRcdFx0e1xuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdGxlZnQ6IDAsXG5cdFx0XHR9XG5cdFx0KTtcblxuXHR9XG5cblx0YmluZFN0YXJ0ICgpIHtcblx0XHRjb25zb2xlLmxvZyhcImluIGJpbmRTdGFydCwgdGhpcy5nYW1lOlwiICsgdGhpcy5nYW1lKVxuXHRcdC8vIHdlIHVzZSBiaW5kKCkgdG8gbGluayB0aGUgZnVuY3Rpb24gYmVsb3cgdG8gU3RhcnRTY3JlZW4gKG90aGVyd2lzZSwgaXQgdGhpbmtzIGl0IGlzIGluc2lkZSB3aW5kb3cpXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0LXNjcmVlbi1wbGF5LWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgXG5cdFx0XHRmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHQvL2FsZXJ0KFwiaW4gaGFuZGxlciwgZ2FtZTpcIiArIHRoaXMuZ2FtZSlcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR0aGlzLmdhbWUuc3RhcnRHYW1lKCk7XG5cblx0XHRcdH0uYmluZCh0aGlzKSk7XG5cdH1cbn0iLCIvKiogXG4gKiBTdGF0aWNJbWFnZS5qc1xuICogSW1hZ2Utc3R5bGUgSW5mb3JtYXRpb24gdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBvbmNlIHRoZSBnYW1lIGlzIGxvYWRlZFxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcbiBpbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRpY0ltYWdlIGV4dGVuZHMgSW1hZ2Uge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zdGF0aWMgPSB0cnVlO1xuXHR9XG5cbn1cbiIsIi8qKiBcbiAqIFN0YXRpY1RleHQuanNcbiAqIFRleHQgdGhhdCBjYW5ub3QgYmUgY2hhbmdlZCBhZnRlciBsb2FkZWQgYnkgdGhlIGdhbWVcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG4gaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljVGV4dCBleHRlbmRzIFRleHQge1xuXG5cdGNvbnN0cnVjdG9yIChjb25maWcpIHtcblx0XHRzdXBlcihjb25maWcpO1xuXG5cdFx0dGhpcy5zdGF0aWMgPSB0cnVlO1xuXG5cdH1cblxufVxuIiwiLyoqIFxuICogVGV4dC5qc1xuICogQ3JlYXRlcyBhIHRleHQtdHlwZSBJbmZvIG9iamVjdFxuICogQGluaGVyaXRzIEluZm8sIEdhbWVQaWVjZVxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IEluZm8gZnJvbSAnLi9JbmZvLmpzJztcblxuIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBJbmZvIHtcblxuIFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG4gXHRcdHN1cGVyKGNvbmZpZyk7XG5cbiBcdFx0Ly8gc2V0IHRoZSB0ZXh0XG4gXHRcdHRoaXMuc2V0VGV4dChjb25maWcudGV4dCk7XG5cbiBcdFx0Ly8gc2V0IHRoZSBET01JZFxuIFx0XHR0aGlzLmFkZFRvRE9NKGNvbmZpZy5kb21JZCk7XG4gXHR9XG5cbiBcdHNldFRleHQgKHR4dCkge1xuIFx0XHR0aGlzLnRleHQgPSB0eHQ7XG4gXHR9XG5cbiBcdGFkZFRvRE9NIChkb21JZCkge1xuXG4gXHRcdHRoaXMuZG9tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gXHRcdHRoaXMuZG9tLmlkID0gbmFtZSArICctVGV4dCc7XG4gXHRcdHRoaXMuZG9tLmlubmVySFRNTCA9IHRoaXMudGV4dDtcblxuIFx0XHQvLyBjb250YWluZXJcbiBcdFx0dmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRvbUlkKTtcblxuIFx0XHQvLyBhZGQgdG8gdGhlIERPTVxuIFx0XHRjb250YWluZXIuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tLCBjb250YWluZXIuY2hpbGROb2Rlc1swXSk7XG5cblx0fVxuXG4gfSIsIi8qKiBcbiAqIFRpZ2VyLmpzXG4gKiBBIFRpZ2VyLCB3aG8gdHJpZXMgdG8gZ2V0IHRoZSBQbGF5ZXIuXG4gKiBAaW5oZXJpdHMgR2FtZVBpZWNlLCBDaGFyYWN0ZXJcbiAqL1xuIGltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuIGltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9DaGFyYWN0ZXIuanMnO1xuIGltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlnZXIgZXh0ZW5kcyBBbmltYWwge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuIFx0fVxuIH0iLCIvKipcbiAqIFRydW1wLmpzXG4gKiBUaGUgYmFsbC1saWtlIENoYXJhY3RlciB5b3Uga2ljayBpbnRvIEFuaW1hbHNcbiAqIEBpbmhlcml0cyBHYW1lUGllY2UsIENoYXJhY3RlclxuICovXG4gaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuL0dhbWVQaWVjZS5qcyc7XG4gaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5cbiBpbXBvcnQgTW92ZXIgZnJvbSAnLi9Nb3Zlci5qcyc7XG4gaW1wb3J0IENvbGxpZGVyIGZyb20gJy4vQ29sbGlkZXIuanMnO1xuXG4gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBDaGFyYWN0ZXIge1xuXG4gXHRjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gXHRcdHN1cGVyIChjb25maWcpO1xuXG4gICAgLy9UcnVtcCBnZXRzIFBpbmdQb25nIG1vdGlvblxuICAgIHRoaXMubW92ZXIuaW5pdFBpbmdQb25nKDAsIHRoaXMpOyAvL3Bpbmdwb25nIHdvbid0IHN0YXJ0IHlldFxuIFx0fVxuXG4gIHVwZGF0ZSAoKSB7XG4gICB0aGlzLm1vdmVyLnVwZGF0ZVBpbmdQb25nKCk7IC8vYWxsb3dzIHBpbmdwb25nIG1vdGlvblxuICB9XG4gfVxuIiwiLyoqXG4gKiBDcmVhdGUgdGhlIGdhbWUuIEltcG9ydCB0aGUgcHJpbWFyeSBjbGFzc2VzLCBhbmQgJ2NvbXBvc2l0ZSdcbiAqIHRoZSBvdmVyYWxsIEdhbWUgb2JqZWN0IG91dCBvZiBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzZXMuXG4gKi9cbmltcG9ydCBHYW1lUGllY2UgZnJvbSAnLi9HYW1lUGllY2UuanMnO1xuXG4vL1RoZSBlbnRpcmUgZ2FtZVxuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lLmpzJztcblxuLy9TY3JlZW4gaW5oZXJpdGFuY2VcbmltcG9ydCBTY3JlZW4gZnJvbSAnLi9TY3JlZW4uanMnO1xuaW1wb3J0IFN0YXJ0U2NyZWVuIGZyb20gJy4vU3RhcnRTY3JlZW4uanMnO1xuaW1wb3J0IEdhbWVTY3JlZW4gZnJvbSAnLi9HYW1lU2NyZWVuLmpzJztcbmltcG9ydCBFbmRTY3JlZW4gZnJvbSAnLi9FbmRTY3JlZW4uanMnO1xuXG4vL0luZm8gaW5oZXJpdGFuY2VcbmltcG9ydCBJbmZvIGZyb20gJy4vSW5mby5qcyc7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuanMnO1xuaW1wb3J0IFN0YXRpY1RleHQgZnJvbSAnLi9TdGF0aWNUZXh0LmpzJztcbmltcG9ydCBJZGVudGl0eSBmcm9tICcuL0lkZW50aXR5LmpzJztcbmltcG9ydCBJbnN0cnVjdGlvbnMgZnJvbSAnLi9JbnN0cnVjdGlvbnMuanMnO1xuaW1wb3J0IER5bmFtaWNUZXh0IGZyb20gJy4vRHluYW1pY1RleHQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xuXG4vL0NoYXJhY3RlciBpbmhlcml0YW5jZVxuaW1wb3J0IENoYXJhY3RlciBmcm9tICcuL0NoYXJhY3Rlci5qcyc7XG5pbXBvcnQgVHJ1bXAgZnJvbSAnLi9UcnVtcC5qcyc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vUGxheWVyLmpzJztcbmltcG9ydCBBbmltYWwgZnJvbSAnLi9BbmltYWwuanMnO1xuaW1wb3J0IExpb24gZnJvbSAnLi9MaW9uLmpzJztcbmltcG9ydCBUaWdlciBmcm9tICcuL1RpZ2VyLmpzJztcbmltcG9ydCBCZWFyIGZyb20gJy4vQmVhci5qcyc7XG5pbXBvcnQgR29yaWxsYSBmcm9tICcuL0dvcmlsbGEuanMnO1xuaW1wb3J0IEhlYWx0aCBmcm9tICcuL0hlYWx0aC5qcyc7XG5cbi8vQXJlYSBpbmhlcml0YW5jZS5cbmltcG9ydCBBcmVhIGZyb20gJy4vQXJlYS5qcyc7XG5pbXBvcnQgQ2FnZSBmcm9tICcuL0NhZ2UuanMnO1xuaW1wb3J0IEFuaW1hbEFyZWEgZnJvbSAnLi9BbmltYWxBcmVhLmpzJztcbmltcG9ydCBQbGF5ZXJBcmVhIGZyb20gJy4vUGxheWVyQXJlYS5qcyc7XG5cbi8vVGVzdCBmaWxlICh2ZXJ5IHNpbXBsZSB0ZXN0cnVubmVyKVxuaW1wb3J0IFRlc3RzIGZyb20gJy4uLy4uL3Rlc3RzL1Rlc3RzLmpzJztcblxuLyoqXG4gKiBTZXQgdXAgdGVzdHMuXG4gKi9cbnZhciBteVRlc3RzID0gbmV3IFRlc3RzKCk7XG5cbi8qKlxuICogU2V0IHVwIHRoZSBHYW1lXG4gKi9cbnZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcblxuLyoqXG4gKiBFWFBPUlQgVE8gV0VCIENPTlNPTEVcbiAqIFRvIG1ha2Ugc29tZXRoaW5nIHZpc2libGUgaW4gV2ViIGNvbnNvbGUgZm9yIGRlYnVnZ2ludCwgYXR0YWNoIHRvIHdpbmRvdyBvYmplY3RcbiAqIE5PVEU6IFByb2Zlc3Npb25hbCBjb2RlIHVzZXMgc3BlY2lhbGl6ZWQgdGVzdGluZyBtb2R1bGVzIGxpa2UgTW9jaGEsIEthcm1hLCBhbmRcbiAqIHNpbWlsYXIgdGVzdGluZyBsaWJyYXJpZXMuXG4gKi9cblxuLy8gd2UgY2FuIHJ1biB0aGlzIHRlc3QgbWFudWFsbHkgd2l0aCB0ZXN0cy5ydW4oKTtcbndpbmRvdy50ZXN0cyA9IG15VGVzdHM7XG5cbi8vIG1ha2UgdGhlIGdhbWUgb2JqZWN0IHZpc2libGUgc28gd2UgY2FuIGluc3BlY3QgaXQuXG53aW5kb3cuZ2FtZSA9IG15R2FtZTtcblxuY29uc29sZS5sb2coJ1pPT0tJTExTT0NDRVIgR2FtZSBpbml0aWFsaXplZC4gQWNjZXNzIGdhbWUgdmlhIFwiZ2FtZVwiLiBVc2UgVGVzdHMucnVuKCkgdG8gdGVzdC4nKVxuIiwiaW1wb3J0IEdhbWVQaWVjZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWVQaWVjZS5qcyc7XG5cbi8vVGhlIGVudGlyZSBnYW1lXG5pbXBvcnQgR2FtZSBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWUuanMnO1xuXG4vL1NjcmVlbiBpbmhlcml0YW5jZVxuaW1wb3J0IFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL1NjcmVlbi5qcyc7XG5pbXBvcnQgU3RhcnRTY3JlZW4gZnJvbSAnLi4vbW9kdWxlcy9qcy9TdGFydFNjcmVlbi5qcyc7XG5pbXBvcnQgR2FtZVNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL0dhbWVTY3JlZW4uanMnO1xuaW1wb3J0IEVuZFNjcmVlbiBmcm9tICcuLi9tb2R1bGVzL2pzL0VuZFNjcmVlbi5qcyc7XG5cbi8vSW5mbyBpbmhlcml0YW5jZVxuaW1wb3J0IEluZm8gZnJvbSAnLi4vbW9kdWxlcy9qcy9JbmZvLmpzJztcbmltcG9ydCBUZXh0IGZyb20gJy4uL21vZHVsZXMvanMvVGV4dC5qcyc7XG5pbXBvcnQgU3RhdGljVGV4dCBmcm9tICcuLi9tb2R1bGVzL2pzL1N0YXRpY1RleHQuanMnO1xuaW1wb3J0IElkZW50aXR5IGZyb20gJy4uL21vZHVsZXMvanMvSWRlbnRpdHkuanMnO1xuaW1wb3J0IEluc3RydWN0aW9ucyBmcm9tICcuLi9tb2R1bGVzL2pzL0luc3RydWN0aW9ucy5qcyc7XG5pbXBvcnQgRHluYW1pY1RleHQgZnJvbSAnLi4vbW9kdWxlcy9qcy9EeW5hbWljVGV4dC5qcyc7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vbW9kdWxlcy9qcy9TY29yZS5qcyc7XG5cbi8vQ2hhcmFjdGVyIGluaGVyaXRhbmNlXG5pbXBvcnQgQ2hhcmFjdGVyIGZyb20gJy4uL21vZHVsZXMvanMvQ2hhcmFjdGVyLmpzJztcbmltcG9ydCBUcnVtcCBmcm9tICcuLi9tb2R1bGVzL2pzL1RydW1wLmpzJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9QbGF5ZXIuanMnO1xuaW1wb3J0IEFuaW1hbCBmcm9tICcuLi9tb2R1bGVzL2pzL0FuaW1hbC5qcyc7XG5pbXBvcnQgTGlvbiBmcm9tICcuLi9tb2R1bGVzL2pzL0xpb24uanMnO1xuaW1wb3J0IFRpZ2VyIGZyb20gJy4uL21vZHVsZXMvanMvVGlnZXIuanMnO1xuaW1wb3J0IEJlYXIgZnJvbSAnLi4vbW9kdWxlcy9qcy9CZWFyLmpzJztcbmltcG9ydCBHb3JpbGxhIGZyb20gJy4uL21vZHVsZXMvanMvR29yaWxsYS5qcyc7XG5pbXBvcnQgSGVhbHRoIGZyb20gJy4uL21vZHVsZXMvanMvSGVhbHRoLmpzJztcblxuLy9BcmVhIGluaGVyaXRhbmNlLlxuaW1wb3J0IEFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9BcmVhLmpzJztcbmltcG9ydCBDYWdlIGZyb20gJy4uL21vZHVsZXMvanMvQ2FnZS5qcyc7XG5pbXBvcnQgQW5pbWFsQXJlYSBmcm9tICcuLi9tb2R1bGVzL2pzL0FuaW1hbEFyZWEuanMnO1xuaW1wb3J0IFBsYXllckFyZWEgZnJvbSAnLi4vbW9kdWxlcy9qcy9QbGF5ZXJBcmVhLmpzJztcblxuLyoqIFxuICogVEVTVEJFRCAtIFRlc3QgYWxsIG91ciBvYmplY3RzLiBUaGlzIGlzIGEgdmVyeSBiYXNpYyB0ZXN0aW5nIHN5c3RlbS4gXG4gKiBOT1RFOiBQcm9mZXNzaW9uYWwgY29kZSB1c2VzIHRlc3RpbmcgbGlicmFyaWVzIGxpa2UgS2FybWEgYW5kIE1vY2hhLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0cyB7XG5cblx0Y29uc3RydWN0b3IgKCkge1xuXHR9XG5cblx0Ly8gQmVjYXVzZSB3ZSBtYWtlIHRoZXNlIG9iamVjdHMgd2l0aCAndmFyJyB0aGV5IGFyZSBzY29wZWQgdG8gdGhlIHJ1bigpIGZ1bmN0aW9uLlxuXHRydW4gKCkge1xuXG5cdFx0dmFyIGNvbmZpZyA9IHtuYW1lOidGb3Jlc3QgVHJ1bXAgb3IgRG9uYWxkIEd1bXAgcnVseid9O1xuXG5cdFx0Ly8gTWFrZSBzb21lIHRlc3QgZ2FtZSBvYmplY3RzXG5cdFx0dmFyIGdhbWUgPSBuZXcgR2FtZShjb25maWcpO1xuXHRcdGNvbnNvbGUubG9nKGdhbWUuZ2V0TmFtZSgpKTtcblxuXHRcdC8vdGVzdCBHYW1lIE9iamVjdFxuXHRcdHZhciBteUdhbWUgPSBuZXcgR2FtZSh7bmFtZTogXCJab29LaWxsU29jY2VyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUdhbWUuZ2V0TmFtZSgpKTtcblxuXHRcdC8vb3RoZXIgb2JqZWN0c1xuXHRcdHZhciBteVNjcmVlbiA9IG5ldyBTY3JlZW4oe25hbWU6IFwiT3BlbmluZyBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlTdGFydFNjcmVlbiA9IG5ldyBTdGFydFNjcmVlbih7bmFtZTogXCJTdGFydCBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U3RhcnRTY3JlZW4uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUdhbWVTY3JlZW4gPSBuZXcgR2FtZVNjcmVlbih7bmFtZTogXCJHYW1lIFNjcmVlblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlHYW1lU2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlFbmRTY3JlZW4gPSBuZXcgRW5kU2NyZWVuKHtuYW1lOiBcIkVuZCBTY3JlZW5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15RW5kU2NyZWVuLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlJbmZvID0gbmV3IEluZm8oe25hbWU6IFwiR2VuZXJpYyBJbmZvcm1hdGlvblwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlJbmZvLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlUZXh0ID0gbmV3IFRleHQoe25hbWU6IFwiR2VuZXJpYyBUZXh0IE9iamVjdFwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlUZXh0LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlTdGF0aWNUZXh0ID0gbmV3IFN0YXRpY1RleHQoe25hbWU6IFwiR2VuZXJpYyBTdGF0aWMgVGV4dCBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U3RhdGljVGV4dC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15SWRlbnRpdHkgPSBuZXcgSWRlbnRpdHkoe25hbWU6IFwiR2VuZXJpYyBJZGVudGl0eSBPYmplY3RcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SWRlbnRpdHkuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUluc3RydWN0aW9ucyA9IG5ldyBJbnN0cnVjdGlvbnMoe25hbWU6IFwiR2VuZXJpYyBJbnN0cnVjdGlvbnMgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUluc3RydWN0aW9ucy5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15RHluYW1pY1RleHQgPSBuZXcgRHluYW1pY1RleHQoe25hbWU6IFwiR2VuZXJpYyBEeW5hbWljIFRleHQgT2JqZWN0XCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUR5bmFtaWNUZXh0LmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlTY29yZSA9IG5ldyBTY29yZSh7bmFtZTogXCJzY29yZXMuLi5cIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15U2NvcmUuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUNoYXJhY3RlciA9IG5ldyBDaGFyYWN0ZXIoe25hbWU6IFwiR2VuZXJpYyBDaGFyYWN0ZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15Q2hhcmFjdGVyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlUcnVtcCA9IG5ldyBUcnVtcCh7bmFtZTogXCJEb25hbGQgVHJ1bXBcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15VHJ1bXAuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVBsYXllciA9IG5ldyBQbGF5ZXIoe25hbWU6IFwiRW5kIFVzZXJcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15UGxheWVyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlBbmltYWwgPSBuZXcgQW5pbWFsKHtuYW1lOiBcIkdlbmVyaWMgQW5pbWFsXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUFuaW1hbC5nZXROYW1lKCkpO1xuXG5cdFx0dmFyIG15TGlvbiA9IG5ldyBMaW9uKHtuYW1lOiBcIkNvd2FyZGx5IHRoZSBMaW9uXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUxpb24uZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVRpZ2VyID0gbmV3IFRpZ2VyKHtuYW1lOiBcIkNob21wZXIgdGhlIFRpZ2VyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVRpZ2VyLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlCZWFyID0gbmV3IEJlYXIoe25hbWU6IFwiTWF1bGVyIHRoZSBCZWFyXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUJlYXIuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUdvcmlsbGEgPSBuZXcgR29yaWxsYSh7IG5hbWU6IFwiU3B1bmt5IHRoZSBHb3JpbGxhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUdvcmlsbGEuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUhlYWx0aCA9IG5ldyBIZWFsdGgoe25hbWU6IFwiT25lIEhlYWx0aCBLaXRcIn0pO1xuXHRcdGNvbnNvbGUubG9nKG15SGVhbHRoLmdldE5hbWUoKSk7XG5cblx0XHQvL0FyZWEgaW5oZXJpdGFuY2UuXG5cdFx0dmFyIG15QXJlYSA9IG5ldyBBcmVhKHtuYW1lOiBcIkdlbmVyaWMgQXJlYVwifSk7XG5cdFx0Y29uc29sZS5sb2cobXlBcmVhLmdldE5hbWUoKSk7XG5cblx0XHR2YXIgbXlDYWdlID0gbmV3IENhZ2Uoe25hbWU6IFwiR2VuZXJpYyBBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUNhZ2UuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteUFuaW1hbEFyZWEgPSBuZXcgQW5pbWFsQXJlYSh7bmFtZTogXCJBbmltYWxBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteUFuaW1hbEFyZWEuZ2V0TmFtZSgpKTtcblxuXHRcdHZhciBteVBsYXllckFyZWEgPSBuZXcgUGxheWVyQXJlYSh7bmFtZTogXCJQbGF5ZXJBcmVhXCJ9KTtcblx0XHRjb25zb2xlLmxvZyhteVBsYXllckFyZWEuZ2V0TmFtZSgpKTtcblx0fVxufVxuIl19
