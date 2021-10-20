<template lang="pug">
    container
      button(@click.stop="visible = true")
        v-icon mdi-dock-window
        span {{ boton || 'Abrir' }}
      v-dialog(v-model="visible", :max-width="500", dark)
      v-container.ia-modal-container
        v-row
          v-col
            slot(name='modal-contenido')
</template>

<script>
/**
 * Props:
 * boton : Define el texto del botón
 */
export default {
  name: 'ia-modal',
  props: ['boton', 'data'],
  data: () => ({
    name: 'Objeto Modal',
    visible: false
  })
}
</script>

<style lang="stylus" scoped >
@import './ia-modal_styles'

</style>
