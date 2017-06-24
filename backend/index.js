const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const routes = require('./routes')(io);

app.use('/api', routes);

http.listen(3000, function(){
  console.log('Server up and running on port 3000');
});
