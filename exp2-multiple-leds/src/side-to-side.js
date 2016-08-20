/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-20 08:05:01
* @Last Modified by:   Matthew Zygowicz
*/

import five from 'johnny-five';
import Tessel from 'tessel-io';

const board = new five.Board({
  io: new Tessel()
});

board.on('ready', ()=> {
  const leds = new five.Leds(['a2', 'a3', 'a4', 'a5', 'a6', 'a7']);
  let index = 0;
  let step = 1;

  board.loop(100, ()=>{
    leds.off();
    leds[index].on();
    index += step;
    if(index === 0 || index === leds.length -1){
      step *= -1
    }
  });
});