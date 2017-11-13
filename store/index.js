import Vuex from 'vuex'
import * as _signalsJson from 'static/senales.json'

const createStore = () => {
  return new Vuex.Store({
    state: {
      senales: []
    },
    mutations: {
      SET_SENALES(state, {senalesArray}) {
        state.senales = senalesArray;
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
            commit('SET_SENALES', {senalesArray: _signalsJson.signals});
            resolve();
          }, 1500);
        });
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
