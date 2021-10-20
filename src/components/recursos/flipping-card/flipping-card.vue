<template lang="pug">
    div.cards-container
      ia-card(
        :imgFrontal="imgFrontal",
        :imgPosterior="imgPosterior",
        :textoColorF="textoColorF",
        :textoColorB="textoColorB",
        :sizeTextoB="sizeTextoB",
        :sizeTextoF="sizeTextoF",
        :fondoColorB="fondoColorB",
        :fondoB="fondoB",
        :bgpB="bgpB",
        v-for="card in cards",
        :key="card.id"
        )
        div(slot="front") {{ card.front }}
        div(slot="back") {{ card.back }}
</template>
<script>
/**
 * El componente por defecto cuenta con la propiedad flex
 * justify : alinea el contenido interno usando flexbox
 * gutters : define el margen de separacion de cada tarjeta
 */
import iaCard from './card'

export default {
  props: [ 'justify', 'gutters', 'imgFrontal', 'imgPosterior', 'textoColorF', 'textoColorB', 'sizeTextoF', 'sizeTextoB', 'fondoColorB', 'fondoB', 'fondoF', 'bgpB', 'cards' ],
  components: { iaCard },
  name: 'flipping',
  data: () => {
    return {
      nombre: 'flipping'
    }
  },
  computed: {

  }
}
</script>

<style lang="stylus" scoped>
@import '../../../stylus/ia_variables'
@import './flipping-card_styles'

</style>
