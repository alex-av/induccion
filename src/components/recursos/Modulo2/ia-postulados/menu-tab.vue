<template lang="pug">
    v-row.align-center.no-gutters
      v-row.col-10.tabs-menu.no-gutters
        v-col
          v-tabs(
          v-model="tab",
          background-color="#fff",
          color="#00B893",
          light= true,
          :grow="grow",
          vertical,
          :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined",
          :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined")
            v-tabs-slider
            // Pestañas
            v-tab(href="#tab-1")
              v-icon(left, v-if="icons").ia-icon mdi-arrow-decision-outline
              span Fines

            v-tab(href="#tab-2")
              v-icon(left, v-if="icons").ia-icon mdi-thumb-up
              span Postulados

            // Items de la tabla
            // Item 1
            v-tab-item(value="tab-1").px-10.py-0
              v-row.pa-0
                v-col.px-3.py-0
                  h5.pa-0 Fines
              v-row
                v-col(sm="12" md="11" lg="11")
                  v-container.pa-0.overflow-y-auto.ia-tab-container
                    ul
                      li Ser un marco común de los valores que orientan a la comunidad universitaria hacia una visión ética compartida, donde se promueva el vivir y el habitar bien en la institución y en la sociedad a la que pertenecen.
                      li Establecer los principios de acción para cada uno de los valores definidos, los cuales orientan las conductas y comportamientos que debe tener un miembro de la comunidad Universitaria sin importar su rol.
                      li Ser un medio que propicie el fortalecimiento del ambiente ético e íntegro en pro de la construcción de confianza y credibilidad social.

            // Item 2
            v-tab-item(value="tab-2").px-10.py-0
              v-row.pa-0
                v-col.px-3.py-0
                  h5.pa-0 Postulados
              v-row

                v-col(sm="12" md="11" lg="11")
                  v-container.pa-0.overflow-y-auto.ia-tab-container
                    div.py-5
                      ul
                        li Cultura de transparencia y legalidad
                        li Marco de referencia para que personalmente evaluemos nuestras actuaciones
                        li Es un Acuerdo, una apuesta colectiva
                        li Cumplimiento de pautas éticas y de integridad que permitan ser ejemplo a través de las acciones como parte de una formación integral
                        li Fortalecer y proteger la autonomía
      // Personaje
      .col-2.ia-personaje
          img(src='https://cdn-univirtual.utp.edu.co/img/induccion/personaje4.png', )

</template>
<script>
export default {
  name: 'Modulo1Tabs',
  data: () => ({
    player: true,
    iconSound: 'mdi-volume-high',
    isPlayingAudio: false,
    // Configuración del componente tab
    tab: null,
    text: '',
    icons: true,
    centered: false,
    grow: false,
    vertical: false,
    prevIcon: false,
    nextIcon: false,
    right: false,
    tabs: 1
    // Config colors
  })
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './menu-tab_animations'
@import './menu-tab_styles'

</style>
