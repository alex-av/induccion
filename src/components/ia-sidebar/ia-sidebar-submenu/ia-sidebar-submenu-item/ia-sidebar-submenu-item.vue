
<template lang="pug">
    button(
        @click="requestPanelMovement(item.id, item.name, item, index)").ia-button-sub-style.menu-right-item.mb-md-5.mr-md-7
        span {{ item.name }}
</template>

<script>
export default {
    name: 'iaMenuItem',
    props: [ 'item','index' ],
    data: () => ({
    }),
    methods: {
        requestPanelMovement (itemid, name, object, index) {
            // Emit event to a parent component
            this.$bus.$emit('getPanelMovement', {itemid, name, object, index}  )
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './ia-sidebar-submenu-item.styl'
@import './ia-sidebar-submenu-item-mobile.styl'
@import './ia-sidebar-submenu-item-tablet.styl'
@import './ia-sidebar-submenu-item-laptop.styl'
</style>
