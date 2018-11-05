const p5 = require('p5');

class Player {

    constructor(opts) {
        this.position = new p5.Vector(opts.x, opts.y);
    }

    /**
     * My tostring
     */
    toString() {
        console.log('I am a player object');
        console.log(this.position.toString());
    }
}

module.exports.Player = Player;