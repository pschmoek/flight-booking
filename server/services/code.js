const codes = require('./default-codes');

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
  }
};
