const _signalsJson = require('../static/senales.json')

module.exports = {
  retrieveAllSignals() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(_signalsJson.signals);
      }, 500);
    })
  },
  retrieveSignalById(id) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(_signalsJson.signals.find(s => s.id === id));
      }, 500);
    })
  }
}
