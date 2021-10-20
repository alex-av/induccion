<template lang="pug">
    div
      v-dialog(
        v-if="modal"
        v-model="modal",
        max-width="800",
        overlay-color="rgba(255,255,255,1)",
        overlay-opacity=0.92,
        light)
        div.ia-modal-border
          div.text-center.py-2.ia-bienvenidos {{title}}
          iframe(width='560', height='315', :src="url", frameborder='0', allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture', allowfullscreen='')

</template>

<script>
export default {
  props: ['url', 'title'],
  name: 'Iamodalintro',
  data: () => ({
    modal: false
  }),
  mounted () {
    this.modal = true
  }

}
</script>
<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './ia-video_styles'
</style>
