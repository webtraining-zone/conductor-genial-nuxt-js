import Vuex from 'vuex'
import * as _signalsJson from 'static/senales.json'
import * as _assessmentsJson from 'static/assessments.json'

const signalsService = {
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
};

const createStore = () => {
  return new Vuex.Store({
    state: {
      senales: [],
      assessments: []
    },
    mutations: {
      SET_SENALES(state, {senales}) {
        console.log('Setting signals');
        state.senales = senales;
      },
      SET_SENAL(state, {id, senal}) {
        console.log('Setting signal ' + id);
        let l = state.senales.length;
        let found;
        console.log('Looking for ' + id);
        for (let i = 0; i < l; i++) {
          if (state.senales[i].id === id) {
            console.log('Found: ', JSON.stringify(state.senales[i]));
            state.senales[i] = senal;
            found = true;
            break;
          }
        }
        if (!found) {
          console.log('Not found. Appended');
          state.senales.push(senal);
        }
      },
      SET_ASSESSMENTS(state, payload) {
        console.log('Setting assessments');
        state.assessments = payload.assessments;
      },
      SET_ASSESSMENT(state, {id, assessment}) {
        console.log('Setting assessment ' + id);
        let l = state.assessments.length;
        let found;
        console.log('Looking for ' + id);
        for (let i = 0; i < l; i++) {
          if (state.assessments[i].id === id) {
            console.log('Found: ', JSON.stringify(state.assessments[i]));
            state.assessments[i] = assessment;
            found = true;
            break;
          }
        }
        if (!found) {
          console.log('Not found. Appended');
          state.assessments.push(assessment);
        }
      }
    },
    actions: {
      /*
        // This is executed server-side only
      nuxtServerInit(state, context) {
        if (context.req.session) {
          // Example
        }
      },
      */
      RETRIEVE_SENALES({commit}) {
        console.log('Retrieving all signals');
        return signalsService.retrieveAllSignals().then(senales => {
          commit('SET_SENALES', {senales});
        });
      },
      RETRIEVE_SENAL({state, commit}, id) {
        if (state.senales.find(s => s.id === id)) {
          console.log('Retrieval ignored for id ' + id);
          return
        }
        console.log('Retrieving signal' + id);
        return signalsService.retrieveSignalById(id).then(senal => {
          commit('SET_SENAL', {id, senal});
        })
      },
      RETRIEVE_ASSESSMENTS(context) {
        console.log('Retrieving assessments');
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve(_assessmentsJson.assessments);
          }, 500);
        }).then(assessments => {
          context.commit('SET_ASSESSMENTS', {assessments});
        });
      },
      RETRIEVE_ASSESSMENT({state, commit}, id) {
        if (state.assessments.find(s => s.id === id)) {
          console.log('Retrieval ignored for id ' + id);
          return
        }
        console.log('Retrieving assessment' + id);
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve(_assessmentsJson.assessments.find(a => a.id === id));
          }, 5000);
        }).then(assessment => {
          commit('SET_ASSESSMENT', {id, assessment});
        })
      }
    },
    getters: {
      allSenales: state => {
        return state.senales;
      },
      allAssessments: state => {
        return state.assessments;
      },
      getSenalById: (state, getters) => (id) => {
        return getters.allSenales.find(senal => senal.id === id);
      },
      getAssessmentById: (state, getters) => (id) => {
        return getters.allAssessments.find(assessment => assessment.id === id);
      }
    }
  })
};

export default createStore
