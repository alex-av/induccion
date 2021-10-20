<template lang="pug">
  div.datos-component
    //div(v-html="data")
    .row.justify-center
      .img-contenedor
        div
          img(src='https://cdn-univirtual.utp.edu.co/img/induccion/modulo4/Recurso8.png', alt="Datos de interés")
        .buttons
          .col-4.rutas-btn-cont.btn1(@click.stop="incidente=true")
          .col-4.rutas-btn-cont.btn2(@click.stop="accidente=true")
          .col-4.rutas-btn-cont.btn3(@click.stop="emergencia=true")
    .data(v-html="data")
    .row
      v-dialog(v-model="incidente" v-if="incidente", width="40%", overlay-color="rgb(255,255,255)", overlay-opacity="0.8")
        div.rutas-contenedor-base.pa-5.text-center
          h3.pb-3 2005
          p La Universidad recibe la Acreditación Institucional de alta calidad por medio de Resolución 2550 del 30 de junio de 2005, para una vigencia de siete (7) años.

      v-dialog(v-model="accidente" v-if="accidente", width="40%", overlay-color="rgb(255,255,255)", overlay-opacity="0.8")
       div.rutas-contenedor-base.pa-5.text-center
          h3.pb-3 2011
          p La Universidad recibe  resolución de reacreditación con una vigencia de 8 años. Corresponde a la mayor vigencia recibida por una universidad nacida en la región cafetera hasta la fecha.

      v-dialog(v-model="emergencia" v-if="emergencia", width="40%", overlay-color="rgb(255,255,255)", overlay-opacity="0.8")
        div.rutas-contenedor-base.pa-5.text-center
          h3.pb-3 2019
          p La Universidad recibe acreditación internacional bajo el sello  EUR - ACE, para 3 programas de pregrado y 4 de posgrado. Convirtiendo a la UTP en la primera institución en Colombia en obtener esta certificación.
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
