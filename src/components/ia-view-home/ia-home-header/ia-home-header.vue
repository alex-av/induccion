<template lang="pug">
    div.ia-home-header
        .row.justify-center.align-center
            div.logo-utp-gth.d-none.d-sm-block.col-sm-2.col-md-2.py-9
                img(:src="require(`@/assets/gth-logo.svg`)")
            div.ia-title.col-11.col-sm-8.col-md-5.col-lg-4.col-xl-3.py-9
                h3.my-0.py-0 Bienvenido al curso de
                h1.my-0.py-0 Inducción Administrativa
</template>

<script>
export default {
    name: 'ia-home-header',
    data: () => ({

    })
}
</script>

<style lang="stylus" scoped>
@import '../../../stylus/ia_variables'
@import './ia-home-header.styl'
@import './ia-home-header-mobile.styl'
@import './ia-home-header-tablet.styl'
@import './ia-home-header-laptop.styl'
</style>
