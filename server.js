'use strict';

/*
 * Mean stack application
 * Copyright(c) 2015 Dhanesh Mane <dhaneshmane123@gmail.com>
 * GNU Licensed
 */

// ============= Initialization
  var express = require('express');
  var app = express(); // vcreate express app
  var bodyParser = require('body-parser');
  var urlencodeParser = bodyParser.urlencoded({ extended:false});
  
  var Info = require('./models/info');
  var database = require('./config/database'); 	 // load the database config
  var mongoose = require('mongoose'); 
  mongoose.connect(database.localUrl);           // connect to mongoDB database on modulus.io

  app.use(express.static('public'));

// ============= Routes
  app.get('/',function(req, res){
     res.send('My first node server');
  });

  // route for save API
  app.post('/save_user', urlencodeParser, function(req, res){
     var response = {
      email:req.body.email,
      name:req.body.name,
      grade:req.body.grade
     }
     res.end(JSON.stringify(response));

     Info.create({
              email:req.body.email,
  		    name:req.body.name,
  		    grade:req.body.grade
          }, function (err, todo) {
              if (err)
                  res.send(err);
          });
  });

  // route for showing all records
  app.get('/all_info', urlencodeParser, function(req, res){
     
     Info.find(function(err, infos){
     	if(err)
     		res.send(err)

     	res.json(infos);
     });
  });

// ============= Server
  var server = app.listen(3000, function () {
    
    var port = server.address().port

    console.log('Example app listening on port 3000! go to http://localhost:%s',  port)
  })