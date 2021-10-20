
<template lang="pug">
    div.ia-content-head
        slot
</template>

<script>
export default {
    name: 'ia-content-head',
    data: () => ({

    })
}
</script>

<style lang="stylus" scoped>
@import '../../../stylus/ia_variables'
@import './ia-content-head.styl'
@import './ia-content-head-mobile.styl'
@import './ia-content-head-tablet.styl'
@import './ia-content-head-laptop.styl'
</style>
