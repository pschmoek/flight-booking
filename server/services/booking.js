const uuid = require('uuid/v4');
const moment = require('moment');
const backend = require('./backend');

module.exports = {

  async addBooking(booking) {
    const flight = backend.flights.find(f => f.id === booking.flightId);
    if (!flight) {
      throw 'Flight does not exist.';
    }

    const newBooking = {
      id: uuid(),
      firstName: booking.firstName,
      lastName: booking.lastName,
      flightId: booking.flightId,
      timestamp: moment().utc().format()
    };

    backend.bookings.push(newBooking);

    return newBooking;
  }
};
