/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-21 08:05:09
* @Last Modified by:   Matthew Zygowicz
*/

import five from 'johnny-five';
import Tessel from 'tessel-io';

const board = new five.Board({
  io: new Tessel()
});

board.on('ready', () => {
  const leds = new five.Leds(['a5', 'a6', 'b5']);
  const animation = new five.Animation(leds);

  const animateForever = () => {
    animation.enqueue({
      duation: 2000,
      cuePoints: [0, 0.05, 1.0],
      keyFrames: [
        [ {intensity: 100}, {intensity: 0}, {intensity: 100} ],
        [ {intensity: 0}, {intensity: 100}, {intensity: 0} ],
        [ {intensity: 100}, {intensity: 0}, {intensity: 100} ],
      ],
      oncomplete() {
        console.log('Lets go again!!! I <3 recursion!');
        animateForever();
      }
    })
  };
  animateForever();
})