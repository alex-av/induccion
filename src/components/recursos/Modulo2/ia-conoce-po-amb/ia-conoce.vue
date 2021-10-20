<template lang="pug">

    div.content-data
        // header
        div.ia-content-header

        // content
        div(v-html="data")

        // footer
        div.ia-content-footer
            h4 Buenas prácticas para el uso eficiente del agua y energía
            v-carousel(
                height=600
            )#ia-conoce-carrusel
                v-carousel-item(
                    v-for="item in items",
                    :key="item.id",
                    reverse-transition="fade-transition",
                    transition="fade-transition",
                    class="fill-height",
                    :src="item.src")

</template>

<script>
export default {
    name: 'conoce-mas',
    props: ['data'],
    data: () => (
        {
            items:[

                {
                    id:"0",
                    src:"https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/ambiental/1-Uso-energia.png"
                },

                {
                    id:"1",
                    src:"https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/ambiental/1-1-Uso-Energia.png"
                },


                {
                    id:"2",
                    src:"https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/ambiental/1-3-Uso-de-Energia.png"
                },


                {
                    id:"3",
                    src:"https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/ambiental/1-4-Uso-de-Energia.png"
                },

                {
                    id:"4",
                    src:"https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/ambiental/1-5-Uso-de-Energia.png"
                },

                {
                    id:"5",
                    src:"https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/ambiental/2-Uso-de-Agua.png"
                },

                {
                    id:"6",
                    src:"https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/ambiental/2-1-Uso-de-Agua.png"
                },


                {
                    id:"7",
                    src:"https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/ambiental/2-2-Uso-de-Agua.png"
                },


                {
                    id:"8",
                    src:"https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/ambiental/2-3-Uso-de-Agua.png"
                },

                {
                    id:"9",
                    src:"https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/ambiental/2-4-Uso-de-Agua.png"
                },

]
        }
    ),
}
</script>

<style lang="stylus">
@import '../../../../stylus/ia_variables'
@import './ia-conoce'

</style>
