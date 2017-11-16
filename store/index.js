import Vuex from 'vuex'
import * as _signalsJson from 'static/senales.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      senales: []
    },
    mutations: {
      SET_SENALES(state, {senales}) {
        state.senales = senales;
      },
      SET_SENAL(state, {id, senal}) {
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
      }
    },
    actions: {
      nuxtServerInit(state, context) {
        // This is executed server-side only
        if (context.req.session) {
          // Example
        }
      },
      RETRIEVE_SENALES({commit}) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve(_signalsJson.signals);
          }, 1500);
        }).then(senales => {
          commit('SET_SENALES', {senales});
        });
      },
      RETRIEVE_SENAL({state, commit}, id) {
        if (state.senales.find(s => s.id === id)) {
          console.log('Retrieval ignored for id ' + id);
          return
        }
        return new Promise(function (resolve, reject) {
          console.log('Retrieving ' + id);
          setTimeout(function () {
            resolve(_signalsJson.signals.find(s => s.id === id));
          }, 5000);
        }).then(senal => {
          commit('SET_SENAL', {id, senal});
        })
      }
    },
    getters: {
      allSenales: state => {
        return state.senales;
      },
      getSenalById: (state, getters) => (id) => {
        return getters.allSenales.find(senal => senal.id === id);
      }
    }
  })
};

export default createStore
