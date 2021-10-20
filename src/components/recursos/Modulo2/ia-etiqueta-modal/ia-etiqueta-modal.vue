<template lang="pug">
    v-row.label-container.ia-block
      template(v-if="imageclick")
        v-col(v-html="data", sm="12", @click.stop="visible=true", class="contenedor-slot")
      template(v-else)
        v-col(v-html="data", sm="12")
      div(:style="styles").ia-styles
        v-btn(
          @click.stop="visible = true",
          class="modal-lanzador-btn",
          color="#3e5a67",
          dark)
          v-icon(left) mdi-vector-arrange-above
          span {{ boton || 'Abrir' }}
      v-col
        slot
      v-dialog(
      v-if="visible"
      v-model="visible",
      :max-width="width || '80%'",
      light,
      overlay-color="rgb(255,255,255)",
      overlay-opacity="0.9")
        v-container.ia-modal-container
          slot(name='modal-contenido')
</template>

<script>
/**
 * Props:
 * boton : Define el texto del botón
 */
export default {
  name: 'ia-modal',
  props: ['boton', 'data', 'styles', 'imageclick', 'width'],
  data: () => ({
    name: 'Objeto Modal',
    visible: false
  }),
  computed: {
  },
  mounted () {

  }
}
</script>

<style lang="stylus" scoped >
@import '../../../../stylus/ia_variables'
@import './ia-etiqueta-modal_styles'

</style>
