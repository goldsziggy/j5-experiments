/*
* @Author: Matthew Zygowicz
* @Date:   2016-08-20 17:22:32
* @Last Modified by:   Matthew Zygowicz
*/

import Tessel from 'tessel-io';
import five from 'johnny-five';
import nodemailer from 'nodemailer';
import config from './config/config';

const transporter = nodemailer.createTransport('smtps://' + config.gmail.username + ':' + config.gmail.password + '@smtp.gmail.com');
const mailOptions = {
  from: config.email.from,
  to: config.email.to,
  subject: 'The gates have been closed!',
  text: 'Hurray the gates!',
  html: '<strong>Hurray</strong> the gates!'
}
const board = five.Board({
  io: new Tessel()
})

board.on('ready', ()=>{
  const led = new five.Led('b5')
  const door = new five.Switch({
    pin: 'a2',
    invert: true
  })

  door.on('open', ()=>{
    led.on();
  })

  door.on('close', ()=>{
    led.off();
    // send mail with defined transport object 
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        console.log('The sentries have been alerted!');
    });
  })
});