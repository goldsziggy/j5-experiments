/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-20 16:17:14
* @Last Modified by:   Matthew Zygowicz
*/

import Tessel from 'tessel-io';
import five from 'johnny-five';

const board = new five.Board({
  io: new Tessel()
})

board.on('ready', ()=>{
  const button = new five.Button('a2');
  const led = new five.Led('a5');

  button.on('press', ()=> {led.on()});
  button.on('hold', ()=> {led.pulse(500)});
  button.on('release', ()=> {led.stop().off()});

  // button.on('press', ()=> {console.log('Button Pressed!')});
  // button.on('release', ()=> {console.log('Button Released!')});
});