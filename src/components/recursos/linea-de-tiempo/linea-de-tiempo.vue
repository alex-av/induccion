<template lang="pug">
    section#recurso-id-10(ref="container")
        div.img
            img(
                src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo1/resena.png",
                ref='imagen',
                class="imagen-slide",
                :style="{transform: 'translateX(-'+ pos +'px)'}"
                )
        div.ia-boton-drag-container
          div.text-center.ia-boton-drag
            i.mdi.mdi-hand-pointing-right
            span Desliza la barra
        section.slider
            v-slider(
                height='15',
                v-model='pos',
                :max='max',
                @mousedown='configurarMax'
                )
        div
          slot(name='titulo')
          p Por medio de la Ley 41 de 1958, se crea la Universidad Tecnológica de Pereira como máxima expresión cultural y patrimonio de la región y como una entidad de carácter oficial seccional. Posteriormente, se decreta como un establecimiento de carácter académico del orden nacional, con personería jurídica, autonomía administrativa, académica, financiera y patrimonio independiente, vinculada al Ministerio de Educación Nacional, cuyo objeto es la educación superior, la investigación y la extensión.
          p La Universidad inicia labores el 4 de marzo de 1961 bajo la dirección de su fundador y primer Rector Doctor Jorge Roa Martínez. Gracias al impulso inicial y al esfuerzo de todos sus estamentos la Institución empieza a desarrollar programas académicos que la hacen merecedora de un gran prestigio a nivel regional y nacional.
          slot
          div
            h5.pb-5 Escucha el Audio
            audio(controls)
              source(src="https://cdn-univirtual.utp.edu.co/img/induccion/assets/modulo1/media/modulo1.mp3")
</template>

<script>
export default {
  name: 'lineadeTiempo',
  props: ['tipo', 'id', 'data'],
  data () {
    return {
      pos: 0,
      max: 100,
      mounted:false,
      contenedor: {
        width: 0
      }
    }
  },
  methods: {
    configurarMax (w) {
        if(this.mounted) {
            this.max = this.$refs.imagen.width - this.$refs.container.offsetWidth
        }
    },
    actualizarAncho () {
        if(this.mounted) {

            this.contenedor.width = this.$refs.container.offsetWidth
            console.log(this.$refs.container.offsetWidth)

    }
    }
  },
  computed: {
  },
  mounted () {
    const self = this
    this.mounted = true
    window.addEventListener('resize', function () {
        self.actualizarAncho()
        self.configurarMax()
    })
  },
  destroyed () {
    this.mounted = false
    window.removeEventListener('resize', function() {

    })
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../stylus/ia_variables.styl'
@import './linea-de-tiempo'

</style>
