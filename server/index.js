const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');

const flightRoutes = require('./routes/flights')(io);
const codeRoutes = require('./routes/codes')(io);
const bookingRoutes = require('./routes/bookings')(io);

app.use(bodyParser.json({ type: 'application/json' }))

app.use('/api/flights', flightRoutes);
app.use('/api/codes', codeRoutes);
app.use('/api/bookings', bookingRoutes);

http.listen(3000, function(){
  console.log('Server up and running on port 3000');
});
