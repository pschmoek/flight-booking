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
      let matches = flights.filter(f => (!date || f.date === date) && f.code === code.code);
      for (const match of matches) {
        result.push(map(match, code));
      }
    }

    return result;
  },

  async addFlight(flight) {
    if (!flight.code) {
      throw 'Flug kann nicht angelegt werden. Es wurde kein Flug Code geliefert.';
    }
    
    const code = await codes.findCode(flight.code);

    if (!code) {
      throw `Flug kann nicht angelegt werden. Der Code ${flight.code} existiert nicht.`;
    }

    const alreadyExistingFlight = flights.find(f => f.code === flight.code && f.date === flight.date);

    if (alreadyExistingFlight) {
      throw { message: 'Der Flug existiert bereits.', flight: alreadyExistingFlight };
    }

    const newFlight = {
      id: uuid(),
      code: code.code,
      date: flight.date,
      aircraft: flight.aircraft
    };

    flights.push(newFlight);
    
    return map(newFlight, code);
  },

  async findFlightByCode(code, date) {
    return flights.find(f => f.code === code && f.date === date);
  }
}
