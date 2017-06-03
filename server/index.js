const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

app.use(bodyParser.json({ type: 'application/*+json' }))

require('./controllers/codes')(app);
require('./controllers/flights')(app);

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('Server up and running on port 3000');
});

// http://localhost:3000/api/flights?from=FRA&to=BER&date=2017-07-07
