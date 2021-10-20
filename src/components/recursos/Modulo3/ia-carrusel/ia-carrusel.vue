<template lang="pug">
    div.py-4
      v-carousel
        v-carousel-item(
          v-for="item in items",
          :key="item.id",
          reverse-transition="fade-transition",
          transition="fade-transition",
          :src="item.src"
          )
</template>
<script>
export default {
  name: 'carrusel',
  props: ['items'],
  data: () => ({
    name: 'Componente Carrusel'
  })
}
</script>
<style lang="stylus">
@import './ia-carrusel_styles'
</style>
