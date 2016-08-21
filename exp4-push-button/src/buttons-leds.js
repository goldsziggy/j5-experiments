/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-20 16:30:48
* @Last Modified by:   Matthew Zygowicz
*/

import Tessel from 'tessel-io';
import five from 'johnny-five';

const board = new five.Board({
  io: new Tessel()
})

board.on('ready', ()=>{
  const leds = new five.Led(['b2', 'b3']);
  const buttons = new five.Button(['a5', 'a6']);
  

  buttons.on('press', (button)=> {
    leds.off();
    leds[buttons.indexOf(button)].on();
  });
  // button.on('hold', ()=> {led.pulse(500)});
  // button.on('release', ()=> {led.stop().off()});

  // button.on('press', ()=> {console.log('Button Pressed!')});
  // button.on('release', ()=> {console.log('Button Released!')});
});