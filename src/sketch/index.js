// How do we convince this to use the p5 TS types.

const Player = require('./player');
// Included just to type hint the sketch. Probably worth doing everywhere?
const p5 = require('p5');

/**
 * 
 * @param {p5} s 
 */
export default function sketch(s) {
    let x, y, backgroundColor;

    
    const width = 500;
    const height = 500;

    s.setup = () => {
        s.createCanvas(width, height);
        backgroundColor = s.color(s.random(255), s.random(255), s.random(255));

        x = s.random(width);
        y = height / 2;
        let player  = new Player({ x, y });
        player.toString();
    };

    s.draw = () => {
        s.background(backgroundColor);
        s.fill(s.color(255, 0, 0));
        s.ellipse(x, y, 100, 100);

        x = (x + 1) % width;
    };

    s.mousePressed = () => {
        backgroundColor = s.color(s.random(255), s.random(255), s.random(255));
    };
}
