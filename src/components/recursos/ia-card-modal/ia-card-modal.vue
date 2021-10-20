<template lang="pug">
  div
    v-card(:max-width="anchoCard", elevation="2", height="650", :hover="true").mx-auto
      v-img(
      :src="imgmini || 'https://i.picsum.photos/id/289/600/600.jpg'",
      class="white--text align-end imagen-ia-card",
      @click.stop="visible = true",
      height="250",
      transition="true")
        v-card-title(v-if="title") {{ title || 'Sin Título' }}
      v-card-text
        v-card-subtitle(v-if="subtitle") {{ subtitle || 'Sin sub-Título' }}
        v-row
          v-col(:style="{height: '360px', overflow: 'auto' }")
            slot
    v-dialog(v-model="visible", :max-width="anchoModal || anchoPorDefecto", dark)
        v-container.ia-modal-container
          v-row
            v-col(sm="12")
              v-img(:src="imgmax || 'https://i.picsum.photos/id/289/800/800.jpg'")
          v-row
            v-col
              slot(name='modal-contenido')
</template>

<script>
/**
 * PROPS
 * title: nombre que aparece en la tarjeta
 * subtitle: opcional (depreciado)
 * anchoModal: el ancho máximo del modal
 * imgmini: muestra la miniatura
 * migmax: muestra la imagen ampliada del modal
 * SLOTS
 * modal-contenido Inserta el contenido dentro del modal ejemplo <p slot="modal-contenido">A
 */
export default {
  props: [ 'title', 'subtitle', 'anchoModal', 'imgmini', 'imgmax' ],
  name: 'iaCardModal',
  data: () => ({
    name: 'Cards + Modal',
    visible: false,
    anchoPorDefecto: 700,
    anchoCard: 350
  })
}
</script>

<style lang="stylus" scoped>
@import '../../../stylus/ia_variables'
@import './ia-card-modal_styles'
</style>
