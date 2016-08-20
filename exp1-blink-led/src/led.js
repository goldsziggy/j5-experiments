/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-20 07:35:20
* @Last Modified by:   Matthew Zygowicz
*/

import Tessel from 'tessel-io';
import five from 'johnny-five';

const board = new five.Board({
  io: new Tessel()
});


board.on('ready', ()=>{
  const led = new five.Led('a5');
  led.pulse(500);
})