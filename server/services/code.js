const uuid = require('uuid/v4');
const backend = require('./backend');

module.exports = {

  async getAll() {
    return backend.codes;
  },

  async addCode(code) {
    const codeAlreadyPresent = backend.codes.find(c => c.code === code.code);
    if (codeAlreadyPresent) {
      throw 'Code already exists.';
    }

    const newCode = {
      id: uuid(),
      code: code.code,
      airline: code.airline,
      from: code.from,
      to: code.to,
      time: code.time
    };

    backend.codes.push(newCode);

    return newCode;
  },

  async delete(id) {
    const codeToDelete = backend.codes.find(c => c.id === id);
    if (!codeToDelete) {
      throw 'Code does not exist.';
    }

    const flights = backend.flights.filter(f => f.codeId === codeToDelete.id);
    if (flights && flights.length > 0) {
      throw 'Code cannot be deleted. One or more flights present.';
    }

    backend.codes.splice(backend.codes.indexOf(codeToDelete), 1);

    return codeToDelete;
  }
};
