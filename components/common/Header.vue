<template>
  <!-- START: Header -->
  <header class="b-main-header">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div id="logo" class="b-logo">
            <a href="/">
              <i class="fa fa-car" aria-hidden="true"></i>
              <!--<span>ConductorGenial</span>-->
            </a>

          </div>
          <nav class="b-main-navigation">
            <ul id="js-main-navigation" class="b-main-navigation__items">
              <li class="b-main-navigation__item" v-for="item of pages">
                <nuxt-link class="b-main-navigation__link" :to="item.route">
                  <i :class="item.iconClass" class="b-main-navigation__icon" aria-hidden="true"></i>
                  <span class="b-main-navigation__text">{{item.displayName}}</span>
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <!-- END: Header -->
</template>
<script>
  export default {
    data() {
      return {
        pages: [
          {
            name: 'home',
            displayName: 'Inicio',
            route: '/',
            iconClass: 'fa fa-home'
          }, {
            name: 'senales',
            displayName: 'Señales',
            route: '/senales',
            iconClass: 'fa fa-wheelchair-alt'
          }, {
            name: 'examen',
            displayName: 'Examen',
            route: '/examen-prueba',
            iconClass: 'fa fa-question-circle'
          }, {
            name: 'pruebas',
            displayName: 'Pruebas',
            route: '/pruebas',
            iconClass: 'fa fa-check'
          }
        ]
      }
    }
  }
</script>
<style></style>
