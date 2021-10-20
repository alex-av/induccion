<template lang="pug">
    v-app.ia-view-home
        ia-header
        div.ia-color-bar
        div.ia-view-home
            ia-video(url="https://www.youtube.com/embed/BJuaDTlHAC8")
                router-link(:to="url")
                    span Seguir al curso

</template>

<script>
import iaVideo from './ia-view-home-video/ia-view-home-video'
import iaHeader from './ia-home-header/ia-home-header'

export default {
    name: 'ia-view-home',
    components:{ iaVideo, iaHeader },
    data: () => ({
        url:'/course?info=Mg%3D%3D-1591219600'
    }),
    mounted () {

        //let hashedUrl = window.location.hash.replace('#/','')
        //let queryString = hashedUrl        
        let queryString = window.location.search
        let urlParams = new URLSearchParams(queryString)
        let info = urlParams.get('info')
        let url = `/course?info=${info}`
        this.url = url

    }
}
/***
 * TODO:
 * Se debe programar el error en caso que info salda nul para no permitir el paso al curso
 */
</script>

<style lang="stylus" scoped>
@import '../../stylus/ia_variables'
@import './ia-view-home.styl'
@import './ia-view-home-mobile.styl'
@import './ia-view-home-tablet.styl'
@import './ia-view-home-laptop.styl'


 /*SNIPPET*/



</style>
