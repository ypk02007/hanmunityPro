const express = require('express');
const router = express.Router();
//=======================================<
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Message = require('../models/message');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/writeMessage', function(req, res, next) {
  const date = new Date();
  const y = date.getFullYear();
  const m = date.getMonth()+1;
  const d = date.getDate();
  const h = date.getHours()
  const min = date.getMinutes();
  const newMessage = new Message({
    writer: "someone",
    content: req.body.content,
    time: y + "/" + m + "/" + d + " " + h + ":" + min
  });

  Message.addMessage(newMessage, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to write', err: err});
    } else {
      res.json({success: true, msg:'Success'});
    }
  });
});

router.get('/messageList', (req, res, next) => {
  Message.getMessageAll ((err, message) => {
   res.json({message: message});
  });
});


//==================================================>

module.exports = router;