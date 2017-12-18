const _assessmentsJson = require('../static/assessments.json')

module.exports = {
  retrieveAllAssessments() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(_assessmentsJson.assessments);
      }, 500);
    })
  },
  retrieveAssessmentById(id) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(_assessmentsJson.assessments.find(a => a.id === id));
      }, 500);
    })
  }
}
