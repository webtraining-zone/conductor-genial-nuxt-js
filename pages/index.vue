<template>
  <section class="b-home">
    <section class="b-section b-section--learn-signals">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <img class="img-responsive" src="/img/car-1-2x.png" alt="">
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h2>
              Aprende sobre las señales de tránsito
            </h2>
            <p>
              Encuentra el catálogo completo de señales que debes conocer para ser el mejor conductor.
              No importa si no conoces nada sobre reglamentos de tránsito, nosotros te ayudamos a que comprendas todo este nuevo mundo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="b-section b-section--practice">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h2>
              Practica para tu examen de licencia de manejo
            </h2>
            <p>
              ¿Te gustaría obtener tu licencia de manejo, pero no has encontrado material que te ayude a prepararte? Si es así, entonces
              este lugar es para ti, ingresa ahora y comienza a practicar con preguntas reales.
            </p>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <img class="img-responsive" src="/img/car-2-2x.png" alt="">

          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo
    },
    layout: 'conductor-genial'
  }
</script>

<style>

</style>
