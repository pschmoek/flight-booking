const codes = require('./default-codes');
const uuid = require('uuid/v4');

module.exports = {
  async findCode(code) {
    return codes.find(c => c.code === code);
  },
  
  async findCodeById(id) {
    return codes.find(c => c.id === id);
  },

  async getCodes() {
    return codes;
  },

  async filter(from, to) {
    return codes.filter(c => (!from || c.from === from) 
      && (!to || c.to === to));
  },

  async addCode(code) {
    const alreadyExistingCode = codes.find(c => c.code === code.code);
    if (alreadyExistingCode) {
      throw {
        message: 'Der Code existiert bereits.',
        code: alreadyExistingCode
      }
    }

    const newCode = {
      id: uuid(),
      code: code.code,
      airline: code.airline,
      from: code.from,
      to: code.to,
      time: code.time
    };

    codes.push(newCode);

    return newCode;
  }
};
