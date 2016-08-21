/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-20 08:43:24
* @Last Modified by:   Matthew Zygowicz
*/

import five from 'johnny-five';
import Tessel from 'tessel-io';


const board = new five.Board({
  io: new Tessel()
});

board.on('ready', ()=>{
  const sensor = new five.Sensor('a7');

  sensor.on('change', ()=> console.log(sensor.value));
});