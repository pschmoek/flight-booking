const uuid = require('uuid/v4');
const moment = require('moment');
const backend = require('./backend');

const map = (flight, code, bookings) => {
  return Object.assign({}, {
    id: flight.id,
    code: code.code,
    from: code.from,
    to: code.to,
    departure: moment(`${flight.date}T${code.time}`).utc().format(),
    airline: code.airline,
    aircraft: flight.aircraft,
    bookings: bookings
  });
}

module.exports = {

  async getFlight(id) {
    const flight = backend.flights.find(f => f.id === id);
    if (!flight) {
      throw 'Flight does not exist.';
    }

    const code = backend.codes.find(c => c.id === flight.codeId);
    const bookings = backend.bookings.filter(b => b.flightId === flight.id);

    return map(flight, code, bookings);
  },

  async filterFlights(from, to, date, code) {
    const flightsWithCode = backend.flights
      .filter(f => (!date || f.date === date))
      .map(f => {
        const code = backend.codes.find(c => c.id === f.codeId);
        const bookings = backend.bookings.filter(b => b.flightId === f.id);

        return map(f, code, bookings);
      });
    
    return flightsWithCode
      .filter(f => (!from || f.from === from)
        && (!to || f.to === to)
        && (!code || f.code === code));
  },

  async addFlight(flight) {
    const code = backend.codes.find(c => c.id === flight.codeId);
    if (!code) {
      throw `Flight cannot be created. Code does not exist.`;
    }

    const alreadyExistingFlight = backend.flights
      .find(f => f.codeId === flight.codeId && f.date === flight.date);
    if (alreadyExistingFlight) {
      throw 'Flight already present on date.';
    }

    const newFlight = {
      id: uuid(),
      codeId: code.id,
      date: flight.date,
      aircraft: flight.aircraft
    };

    backend.flights.push(newFlight);
    
    return map(newFlight, code, []);
  }
}
