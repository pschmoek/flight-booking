const bookings = require('./default-bookings');
const uuid = require('uuid/v4');
const flight = require('./flight');
const moment = require('moment');

module.exports = {
  async getBookings(flightId) {
    return bookings.filter(b => b.flightId === flightId);
  },

  async addBooking(booking) {
    const flight = flight.findFlight(booking.flightId);
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

    bookings.push(newBooking);

    return newBooking;
  }
};
