const _signalsJson = require('../static/senales.json')

module.exports = {
  retrieveAllSignals() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(_signalsJson.signals);
      }, 5000);
    })
  },
  retrieveSignalById(id) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(_signalsJson.signals.find(s => s.id === id));
      }, 5000);
    })
  }
}
