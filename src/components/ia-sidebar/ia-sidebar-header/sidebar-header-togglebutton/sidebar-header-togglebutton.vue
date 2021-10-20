<template lang="pug">
    button.sidebar-header-togglebutton(@click="toggleSidebar")
        template(v-if="isCollapsed")
            v-icon.ia-icon-open mdi-menu
        template(v-else)
            v-icon.ia-icon-close mdi-menu-open
        slot
</template>

<script>
export default {
    name: 'sidebar-header-togglebutton',
    props: ['isCollapsed', 'toggleSidebar'],
    data: () => ({

    }),
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './sidebar-header-togglebutton.styl'
@import './sidebar-header-togglebutton-mobile.styl'
@import './sidebar-header-togglebutton-tablet.styl'
@import './sidebar-header-togglebutton-laptop.styl'
</style>
