/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-21 07:55:05
* @Last Modified by:   Matthew Zygowicz
*/

import five from 'johnny-five';
import Tessel from 'tessel-io';

const board = new five.Board({
  io: new Tessel()
});

const easingFunctions = [
  "linear",
  "inQuad",
  "outQuad",
  "inCube",
  "outCube",
  "inOutCube",
  "inQuart",
  "outQuart",
  "inOutQuart",
  "inQuint",
  "outQuint",
  "inOutQuint",
  "inExpo",
  "outExpo",
  "inOutExpo",
  "inCirc",
  "outCirc",
  "inOutCirc",
  "inBounce",
  "outBounce",
  "inOutBounce",
];

board.on('ready', () => {
  const leds = new five.Leds(['a5', 'a6', 'b5']);
  const duration = 2000;
  let index = 0;
  const fader = ()=>{
    if(!easingFunctions.length)
      process.exit();
    const easing = easingFunctions.shift();
    leds.fadeOut(500, ()=>{
      leds.fadeIn({easing, duration}, fader);
    })
  };
  fader();
})