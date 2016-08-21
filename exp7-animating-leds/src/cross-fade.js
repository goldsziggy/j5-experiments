/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-21 07:48:51
* @Last Modified by:   Matthew Zygowicz
*/

import five from 'johnny-five';
import Tessel from 'tessel-io';

const board = new five.Board({
  io: new Tessel()
});

board.on('ready', () => {
  const leds = new five.Leds(['a5', 'a6', 'b5']);
  let index = 0;
  const fader = ()=>{
    if(index > 0){
      leds[index-1].fadeOut(1000);
    }
    if(index < leds.length){
      leds[index++].fadeIn(1000,fader);
    }
  };
  fader();
})