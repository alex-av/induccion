<template lang="pug">
  div.datos-component
    //div(v-html="data")
    .data(v-html="data")
    .row.justify-center
      .col-3
      .col-9
        .img-contenedor
          .buttons
            .col-4.rutas-btn-cont.btn1(@click.stop="incidente=true")
            .col-4.rutas-btn-cont.btn2(@click.stop="accidente=true")
            .col-4.rutas-btn-cont.btn3(@click.stop="emergencia=true")
    .row
      v-dialog(v-model="incidente" v-if="incidente", width="40%", overlay-color="rgb(255,255,255)", overlay-opacity="0.8")

        div.rutas-contenedor-base.pa-5
          h3.pb-3  La Universidad Vivida
          p Análisis del contexto socioeducativo y diagnóstico institucional
          p Esta fase culminó con un análisis de los avances, desarrollos y asuntos pendientes a lo largo de la vida académica institucional

      v-dialog(v-model="accidente" v-if="accidente", width="40%", overlay-color="rgb(255,255,255)", overlay-opacity="0.8")
       div.rutas-contenedor-base.pa-5
          h3.pb-3 La Universidad Deseada
          p Bajo revisión participativa, se realiza revisión de identidad institucional, principios, valores, propósitos, compromisos institucionales con la formación profesional integral, política académica curricular y política de desarrollo docente
          h4.pb-3 Esta fase tuvo un triple propósito :
          ul
            li Reflexionar con todos los estamentos de la institución sobre la Universidad del siglo XXI
            li Compartir los resultados de la primera fase de " La Universidad vivida".
            li Revisar los principales aspectos que forman parte del PEI
      v-dialog(v-model="emergencia" v-if="emergencia", width="40%", overlay-color="rgb(255,255,255)", overlay-opacity="0.8")
        div.rutas-contenedor-base.pa-5
          h3.pb-3 La Universidad del Siglo XXI
          p Se realiza articulación con el Plan de Desarrollo Institucional (PDI), Facultades y Programas.
          p Se construye una nueva propuesta de PEI donde la institución se compromete a formar profesionales integrales, críticos, comprometidos con la ciudadanía, la democracía (...)
</template>

<script>
export default {
  name: 'rutas',
  props: ['data'],
  data: () => ({
    name: 'Rutas',
    incidente: false,
    accidente: false,
    emergencia: false
  })
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './datos_styles'

</style>
