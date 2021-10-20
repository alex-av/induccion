<template lang="pug">
  div
    //div(v-html="data")
    .row.justify-center
      .col-3.rutas-btn-cont(@click.stop="incidente=true")
        img( alt="Rutas" src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/incidente/M3-QUEBHACERINCIDENTE.png")
      .col-3.rutas-btn-cont(@click.stop="accidente=true")
        img( alt="Rutas" src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/incidente/M3-QUEHACERACCIDENTE.png")
      .col-3.rutas-btn-cont(@click.stop="emergencia=true")
        img( alt="Rutas" src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/incidente/M3-QUEHACERE.png")
    .row
      v-dialog(v-model="incidente" v-if="incidente", width="80%", overlay-color="rgb(255,255,255)", overlay-opacity="0.8")
        div.rutas-contenedor-base.pa-5
          img( alt="Incidente" src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/incidente/M3-INCIDENTE.jpg" )

      v-dialog(v-model="accidente" v-if="accidente", width="80%", overlay-color="rgb(255,255,255)", overlay-opacity="0.8")
       div.rutas-contenedor-base.pa-5
          img( alt="Accidente" src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/incidente/M3-ACCIDENTE.jpg" )

      v-dialog(v-model="emergencia" v-if="emergencia", width="80%", overlay-color="rgb(255,255,255)", overlay-opacity="0.8")
       div.rutas-contenedor-base.pa-5
          img( alt="Emergencias" src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/incidente/M3-CASODEEMERGENCIA.jpg" )
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
@import './rutas_styles'
</style>
