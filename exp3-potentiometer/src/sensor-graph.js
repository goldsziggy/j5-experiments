/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-20 08:49:43
* @Last Modified by:   Matthew Zygowicz
*/

import Barcli from 'barcli';
import five from 'johnny-five';
import Tessel from 'tessel-io';


const board = new five.Board({
  io: new Tessel(),
  repl: false,
  debug: false
});

board.on('ready', ()=>{
  const range = [0, 100];
  const graph = new Barcli({
    label: 'My Data',
    range
  })
  const sensor = new five.Sensor({
    pin: 'a7',
    threshold: 5
  });

  sensor.on('change', ()=> {
    graph.update(sensor.scaleTo(range));
  });
});