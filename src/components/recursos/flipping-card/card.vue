<template lang="pug">
    div.box
      div.card-container
        div.front.face(:style="[cssGlobal, estilosCara(imgFrontal, fondoColorF, textoColorF, fondoF, sizeTextoF, bgpF ) ]")
          div
            slot(name="front")
        div.back.face(:style="[cssGlobal,  estilosCara(imgPosterior, fondoColorB, textoColorB, fondoB, sizeTextoB, bgpB ) ]")
          div
            slot(name="back")
</template>
<script>
/**
 * Props del componente
 * w = ancho del componente
 * h = alto de la card
 * fondoF = ajustes del tamaño del fondo frontal, usar valores de la propiedad background-size de css
 * fondoB = ajustes del tamaño del fondo posterior, usar valores de la propiedad background-size de css
 * imgFrontal = imagen de fondo frontal, recibe una url
 * imgPosterior = imagen de fondo de la cara posterior
 * textoColorF = color de la cara Frontal recibe valores de propiedades CSS
 * textoColorB = color de la cara  Posterior recibe valores de propiedades CSS
 * fondoColorF = color de fondo Frontal recibe valores de propiedades CSS
 * fondoColorB = color de fondo Posterior recibe valores de propiedades CSS
 * sizeTextoF = tamaño del texto Frontal
 * sizeTextoB = tamaño del texto Posterior
 * bgpB = posicion del fondo posterior
 * bgpF = posicion del fondo frontal
 */
export default {
  props: [
    'fondoF',
    'fondoB',
    'imgFrontal',
    'imgPosterior',
    'textoColorF',
    'textoColorB',
    'fondoColorF',
    'fondoColorB',
    'sizeTextoF',
    'sizeTextoB',
    'bgpB',
    'bgpF',
    'w',
    'h' ],
  components: { },
  name: 'card',
  data: () => {
    return {
      nombre: 'card',
      cssGlobal: {
      },
      cssBase: {
        width: '211px',
        height: '293px',
        backgroundSize: 'cover',
        fontSize: '16px',
        backgroundPosition: 'center center'
      }
    }
  },
  methods: {
    estilosCara (imagenFondo, colorFondo, colorTexto, sizeFondo, sizeTexto, bgp) {
      let img = `url(${imagenFondo})` || 'none'
      let color = colorFondo || '#BFBFBF'
      let txt = colorTexto || '#000'
      let ancho = `${this.w}px` || this.cssBase.width
      let alto = `${this.h}px` || this.cssBase.height
      let bgZ = sizeFondo || this.backgroundSize
      let txtSize = sizeTexto || this.cssBase.fontSize
      let bgPos = bgp || this.cssBase.backgroundPosition
      return {
        backgroundImage: img,
        backgroundColor: color,
        backgroundSize: bgZ,
        color: txt,
        width: ancho,
        height: alto,
        fontSize: txtSize,
        backgroundPosition: bgPos
      }
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../stylus/ia_variables'
@import './card_styles'

</style>
