const moment = require('moment');
const uuid = require('uuid/v4');
const flights = require('./default-flights');
const codes = require('./code');

const map = (flight, code) => {
  return Object.assign({}, {
    id: flight.id,
    code: code.code,
    from: code.from,
    to: code.to,
    departure: moment(`${flight.date}T${code.time}`).utc().format(),
    airline: code.airline,
    aircraft: flight.aircraft
  });
}

module.exports = {
  async findFlight(id) {
    const flight = flights.find(f => f.id === id);
    if (flight) {
      const code = await codes.findCode(flight.code);
      return map(flight, code);
    } else {
      throw 'Der Flug existiert nicht.';
    }
  },

  async getFlights(from, to, date) {
    const matchingCodes = await codes.filter(from, to);
    if (!matchingCodes || matchingCodes.length === 0) {
      throw `Es existiert keine Verbindung von ${from || '*'} nach ${to || '*'}.`;
    }

    const result = [];
    for (const code of matchingCodes) {
      let match = flights.find(f => (!date || f.date === date) && f.code === code.code);
      if (match) {
        result.push(map(match, code));
      }
    }

    return result;
  },

  async addFlight(from, to, departureTime) {
    const newFlight = {
      id: uuid(),
      from: from,
      to: to,
      departureTime: departureTime
    };

    flights.push(newFlight);
    
    return newFlight;
  }
}
