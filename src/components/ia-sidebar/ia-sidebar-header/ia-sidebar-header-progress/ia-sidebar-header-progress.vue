
<template lang="pug">
    div.ia-sidebar-header-progress.ia-margin-t-10
        h4.pb-1.d-none.d-md-block Mi progreso
        div.ia-progress-bar
            v-progress-linear(
                height=10,
                :value="parseInt(this.barvalue)*1.43",
                background-color='#CBD6D1',
                :color='color_bar',
                rounded
            )
        div.ia-progress-bar-numbers.ia-margin-t-5
            span.ia-progress-0.ia-progress-bar-number 0%
            span.ia-progress-50.ia-progress-bar-number 50%
            span.ia-progress-100.ia-progress-bar-number 100%
</template>

<script>
export default {
    name: 'iasidebarheaderprogress',
    props: ['barvalue'],
    data: () => ({
        color_bar_s: '#FF4B68',
    }),
    computed: {
        color_bar () {
            switch (true) {

                case this.barvalue < 50:
                    return '#FF4B68'
                    break;
                case this.barvalue >= 50 && this.barvalue < 75:
                    return '#ff9f00'
                    break;
                case this.barvalue >= 75:
                    return '#00b893'
                    break;
                default:
                    return 'gray'

            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './ia-sidebar-header-progress.styl'
@import './ia-sidebar-header-progress-mobile.styl'
@import './ia-sidebar-header-progress-tablet.styl'
@import './ia-sidebar-header-progress-laptop.styl'
</style>
