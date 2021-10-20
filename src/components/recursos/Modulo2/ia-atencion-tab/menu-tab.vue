<template lang="pug">
    v-row.tabs-menu
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
            v-icon(left, v-if="icons").ia-icon mdi-account-tie
            span Atención Personalizada

          v-tab(href="#tab-2")
            v-icon(left, v-if="icons").ia-icon mdi-headset
            span Atención Telefónica  {audio pte}

          v-tab(href="#tab-3")
            v-icon(left, v-if="icons").ia-icon mdi-webcam
            span Atención Virtual

          // Items de la tabla
          // Item 1
          v-tab-item(value="tab-1").px-10.py-0
            v-row.pa-0
              v-col.px-3.py-0
                h5.pa-0 Atención Personalizada
            v-row
              v-col(sm="12" md="12" lg="12")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  ul
                    li Escuche atentamente la solicitud que se le presenta
                    li Maneje una actitud amable y comprensiva
                    li Genere un trato equitativo
                    li Hable claramente y con buena articulación verbal
                    li Brinde Información, clara, concreta y precisa con alternativas que resuelvan inquietudes

          // Item 2
          v-tab-item(value="tab-2").px-10.py-0
            v-row.pa-0
              v-col.px-3.py-0
                h5.pa-0 Atención Telefónica
            v-row

              v-col(sm="12" md="12" lg="12")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  ul
                    li Salude cortésmente a quien llama
                    li Escuche con atención la solicitud que se le realiza
                    li Maneje una actitud amable y comprensiva
                    li Hable claro y en un tono moderado
                    li Brinde Información precisa
                    li Brinde opciones y alternativas para resolver inquietudes
                  div.py-5
                    p Un buen saludo es la apertura a una agradable conversación, éste modelo le ayudará a generar mayor empatía al atender una llamada telefónica.

          // Item 3
          v-tab-item(value="tab-3").px-10.py-0
            v-row.pa-0
              v-col.px-3.py-0
                h5.pa-0 Atención Virtual
            v-row
              v-col(sm="12" md="12" lg="12")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  div
                    p La Universidad tiene a disposición del usuario, el sistema de PQR y el correo electrónico como herramientas de comunicación virtual.
                    p Tenga en cuenta las siguientes recomendaciones a fin de garantizar una comunicación efectiva y amable.

                  div.py-5
                    h5 Correo Electrónico
                  div
                    ul
                      li Salude cortésmente
                      li Use textos cortos y claros para no saturar al interlocutor
                      li Utilice letra con fuentes y tamaños cómodos a la vista del lector
                      li Agradezca por la atención prestada
                      li Despídase indicando nombre y dependencia a la que pertenece
                    p.py-5 Recuerde conservar la imagen institucional

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
