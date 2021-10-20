
<template lang="pug">
    div.pa-0.mt-md-2.content-head-slider
        slot
</template>

<script>
export default {
    name: 'content-head-slider',
    data: () => ({

    })
}
</script>

<style lang="stylus">
@import '../../../../stylus/ia_variables'
@import './content-head-slider.styl'
@import './content-head-slider-mobile.styl'
@import './content-head-slider-tablet.styl'
@import './content-head-slider-laptop.styl'
</style>
