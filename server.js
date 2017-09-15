
var express = require('express');
var app = express();
var http = require('http').Server(app);
let io = require('socket.io')(http);
var MongoClient = require('mongodb').MongoClient;


var db;



app.use('/css', express.static("css"));
app.use('/fonts', express.static("fonts"));
app.use('/img', express.static("img"));
app.use('/js', express.static("js"));

/* MongoClient.connect('mongodb://localhost:27017/mychat', function(err, database){
    if (err) 
    console.log(err);

    db = database;

}); */


http.listen(3000, function(){
  console.log('listening on *:3000');
});


app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');

});



io.on('connection', function(socket){
  console.log('connected new client');

  socket.on('message', function(data){

      var user = {
        name: data.nickname,
        message: data.text
      }

     /*   db.collection('messages').insert(user, function(err){
        if(err){
          console.log(err);
          return res.sendStatus(500);
        }
    }); */



    io.emit('new message', data);
  })
});

