<template lang="pug">
    v-container.contenedor
      .row.imagen-container
        .col
          div(v-html="data")
      .row
        div.zonas
          span.zona.zona1(@click.stop="modelzona1 = true")
          span.zona.zona2(@click.stop="modelzona2 = true")
          span.zona.zona3(@click.stop="modelzona3 = true")
         

        v-dialog(
          v-model="modelzona3",
          v-if="modelzona3",
          width="50%",
          overlay-opacity="0.8",
          overlay-color="rgb(255,255,255)"
          )
          // Modal cuerpo
          div.background-base.pa-5
            div.info-modal-container.px-5.pb-5
              div.ia-modal-header
                h3.py-5 Universidad Vivida
              div.ia-modal-body
                div.pt-5
                  p Esta fase culminó con un análisis de los avances, desarrollos y asuntos pendientes a lo largo de la vida académica institucional. 
          // Fin modal cuerpo

        v-dialog(
          v-model="modelzona2",
          v-if="modelzona2",
          width="50%",
          overlay-opacity="0.8",
          overlay-color="rgb(255,255,255)"
          )
          // Modal cuerpo
          div.background-base.pa-5
            div.info-modal-container.px-5
              div.ia-modal-header
                h3.py-5 La Universidad Deseada
              div.ia-modal-body
                div.pt-5
                  p Esta fase tuvo un triple propósito
                ul.ul-list-modal
                    li Reflexionar con todos los estamentos de la institución sobre la Universidad del Siglo XXI
                    li Compartir los resultados de la primera fase de "La Universidad vivida"
                    li Revisar los prinicipales aspectos que forman parte del PEI
                 
        
          // Fin modal cuerpo

        v-dialog(
          v-model="modelzona1",
          v-if="modelzona1",
          width="50%",
          overlay-opacity="0.8",
          overlay-color="rgb(255,255,255)"
          )
          // Modal cuerpo
          div.background-base.pa-5
            div.info-modal-container.px-5.pb-5
              div.ia-modal-header
                h3.py-5 La Universidad del Siglo XXI
              div.ia-modal-body
                div.pt-5
                  p Se construye una nueva propuesta de PEI donde la institución se compromete a formar profesionales integrales, críticos, comprometidos con la ciudadanía, la democracia(...)      
          // Fin modal cuerpo

</template>

<script>
export default {
  name: 'areas',
  props: ['data'],
  data: () => ({
    name: 'Áreas internas de trabajo',
    modelzona1: false,
    modelzona2: false,
    modelzona3: false,
  })
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './areas_styles'
</style>
