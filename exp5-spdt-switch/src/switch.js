/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-20 17:12:45
* @Last Modified by:   Matthew Zygowicz
*/

import Tessel from 'tessel-io';
import five from 'johnny-five';

const board = five.Board({
  io: new Tessel()
})

board.on('ready', ()=>{
  const spdt = new five.Switch('a5');
  const led = new five.Led('b5')
  spdt.on('close', ()=>{
    console.log('switch closed'); 
    led.off();
  });
  spdt.on('open', ()=>{
    console.log('switch opened');
    led.on();
  });
});