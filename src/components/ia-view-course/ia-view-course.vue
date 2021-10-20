<template lang="pug">
    v-app
        section.main
            template(v-if="info")

                v-container(fluid, :class="ia_fondo").ia-contenedor-principal.pa-0
                    v-row(no-gutters).sa-fila-contenedor-bloques.ia-h-100
                        v-col(cols="12", md="5").sa-bloque-izquierdo.ia-h-100
                            ia-sidebar(:user="infoUsuario")
                        v-col(cols="12", md="7").sa-bloque-derecho.ia-h-100
                            ia-content(:coursedata="info", :sectionnumber="seccion")

            template(v-else)
                v-row
                    v-progress-linear(
                        indeterminate,
                        color='#00B893'
                    )
                div.ia-precarga.ia-h-100
                    v-container.ia-h-100.w-100.d-flex.align-center.justify-center
                        div.progress-loader.align-self-center.d-flex
                            v-progress-circular(width="5", color="#00B893", indeterminate)
                            div.text-center.align-self-center.ia-legend.ml-3 Cargando ☕
</template>

<script>
import iaSidebar from '../ia-sidebar/ia-sidebar'
import iaContent from '../ia-content/ia-content'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: 'ia-view-course',
    components: {
        iaSidebar,
        iaContent
    },
    data: () => ({
        uData: ''
    }),
    methods: {
        ...mapMutations(['llenaraula', 'verdatos']),
        ...mapActions(['verinfogeneral', 'obtenerDatosUsuario'])
    },
    computed: {
        ...mapState(['info', 'seccion', 'infoUsuario']),

        ia_fondo () {
        switch (this.seccion) {
            case 1:
            return 'fondo_1 tema_conozcamos_la_utp'
            case 2:
            return 'fondo_2 tema_como_me_relaciono_utp'
            case 3:
            return 'fondo_3 tema_hago_parte_de_la_utp'
            case 4:
            return 'fondo_4 tema_hacia_donde_vamos'
            default:
            return 'fondo_1 tema_conozcamos_la_utp'
        }
        }
    },
    created: function () {
        console.log('Cargando desde app.vue')
        const getUData = async () => {
            let hashedUrl = window.location.hash.replace('#/course','')            
            const queryString = hashedUrl
            //const queryString = window.location.search
            const urlParams = new URLSearchParams(queryString)
            const uData = urlParams.get('info')
            console.log('Esperando datos de usuario')
            const data = await this.obtenerDatosUsuario(uData)
            console.log('El dato cargo, se ejecuta la acción para ver info', data)
            this.verinfogeneral()
            console.log('Acción ejecutada')
        }
    getUData()
    }
}
</script>

<style lang="stylus" scoped>
@import '../../stylus/ia_variables'
@import './ia-view-course.styl'
@import './ia-view-course-mobile.styl'
@import './ia-view-course-tablet.styl'
@import './ia-view-course-laptop.styl'
</style>
