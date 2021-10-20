<template lang="pug">
    div.ia-content-head-title
        .ia-container-content__header.ia-padding-x-25.ia-padding-y-25.d-flex
            div.ia-container-content__header--titulo-seccion
                div.ia-transitioner(:class="transition ? 'aparecer' : 'desaparecer' ")
                    // Módulo actual
                    h2 {{ currentitle }}
            div.ia-container-content__header--titulo-siguiente.ia-padding-r-40(@click="propEventReceived")
                // Siguiente módulo
                h2 {{ nextitle }}
</template>

<script>
export default {
    name: 'ia-content-head-title',
    props: ['transition', 'currentitle', 'nextitle', 'eventgonext'],
    data: () => ({

    }),
    methods: {
        propEventReceived () {
            if (this.eventgonext) {
                this.eventgonext()
            } else {
                console.warn("No event Received from props, please configure event from prop")
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './ia-content-head-title.styl'
@import './ia-content-head-title-mobile.styl'
@import './ia-content-head-title-tablet.styl'
@import './ia-content-head-title-laptop.styl'
</style>
