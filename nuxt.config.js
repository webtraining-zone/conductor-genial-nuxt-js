const signalsService = require('./services/signalsService')
const assessmentsService = require('./services/assessmentsService')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Conductor Genial',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Un lugar donde aprender a ser un buen conductor'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Asap+Condensed|Open+Sans:400,700'}
    ]
  },
  /*
  ** Customize SASS files
  */
  css: ['bootswatch/cosmo/bootstrap.css', 'font-awesome/css/font-awesome.css', '@/assets/scss/main.scss'],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes: function () {
      let promises =
        [
          signalsService.retrieveAllSignals().then(signals => {
            return signals.map(s => `/senales/${s.id}`)
          }),
          assessmentsService.retrieveAllAssessments().then(assessment => {
            return assessment.map(a => `/pruebas/${a.id}`)
          })
        ];

      return Promise.all(promises).then(routesArrays => {
        let groupedRoutes = [];
        let _l = routesArrays.length;
        for (let i = 0; i < _l; i++) {
          groupedRoutes = [...groupedRoutes, ...routesArrays[i]]
        }
        return groupedRoutes;
      })
    }
  }
}
