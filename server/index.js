const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

const flightRoutes = require('./routes/flights');
const codeRoutes = require('./routes/codes');

app.use(bodyParser.json({ type: 'application/json' }))

app.use('/api/flights', flightRoutes);
app.use('/api/codes', codeRoutes);

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('Server up and running on port 3000');
});
