/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-21 07:10:28
* @Last Modified by:   Matthew Zygowicz
*/

import five from 'johnny-five';
import Tessel from 'tessel-io';
import Barcli from 'barcli'

const board = new five.Board({
  io: new Tessel(),
  // repl: false,
  // debug: false
});

board.on('ready', ()=>{
  const light = new five.Light('a7');
  const nightlight = new five.Led('b5');
  let dimmest = 1023;
  let brightest = 0;
  // const graph = new Barcli({
  //   color: 'white',
  //   label: 'Light Level',
  //   range: [0,1]
  // })

  light.on('change', ()=>{
    // graph.update(light.level)
    let relativeValue;
    if(light.value < dimmest)
      dimmest = light.value;
    if(light.value > brightest)
      brightest = light.value;
    relativeValue = five.Fn.scale(light.value, dimmest, brightest, 0, 511);
    if(relativeValue <=255)
      nightlight.brightness(255-relativeValue);
    else
      nightlight.off();
  })
})