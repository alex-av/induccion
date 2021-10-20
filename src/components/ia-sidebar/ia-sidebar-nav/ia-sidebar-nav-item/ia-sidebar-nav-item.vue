<template lang="pug">
    li.ia-menu-container-list__item.list__item-1
        button.py-4.px-3(@click="getSection(itemdata.section)")
            span {{ itemdata.name }}
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    name: 'iaSidebarNavItem',
    props: ['itemdata'],
    data: () => ({

    }),
    methods: {
        ...mapMutations(['resetearModulosCabecera']),

        getSection (sectionNumber) {
            this.resetearModulosCabecera()
            this.$bus.$emit('verseccion', sectionNumber)
            // Toggle in mobile
            this.$bus.$emit('toggleSidebar', {})
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './ia-sidebar-nav-item.styl'
@import './ia-sidebar-nav-item-mobile.styl'
@import './ia-sidebar-nav-item-tablet.styl'
@import './ia-sidebar-nav-item-laptop.styl'
</style>
