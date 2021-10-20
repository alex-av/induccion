<template lang="pug">
  section.ia-sidebar-container.ia-h-100
    // MOBILE
    template(v-if="isMobile")
        sidebar-toggle(
            :isCollapsed="isCollapsed"
            :toggleSidebar="toggleSidebar"
            :class="isCollapsed ? 'goToLeft' : 'goToRight'")
        transition(name="slide")
            div.ia-sidebar-mobile-container__menu-left.ia-h-100(v-show="!isCollapsed")
                // SIDEBAR MOBILE HEADER
                sidebar-header(:user="user")
                // SIDEBAR MOBILE NAV
                sidebar-nav(:datainfo="info", :section="seccion")
    // DESKTOP
    template(v-else)
        div.ia-sidebar-container__menu-left.ia-h-100
            // SIDEBAR HEADER
            sidebar-header(:user="user")
            // SIDEBAR NAV
            sidebar-nav(:datainfo="info", :section="seccion")

    // SUBMENU
    sub-menu(:info="info", :section="seccion", :uData_="uData_")

</template>

<script>
import { mapState } from 'vuex'
import sidebarToggle from './ia-sidebar-header/sidebar-header-togglebutton/sidebar-header-togglebutton'
import sidebarHeader from './ia-sidebar-header/ia-sidebar-header'
import sidebarNav from './ia-sidebar-nav/ia-sidebar-nav'
import sidebarFooter from './ia-sidebar-footer/ia-sidebar-footer'
import SubMenu from './ia-sidebar-submenu/ia-sidebar-submenu'
export default {
    name: 'ia-sidebar',
    props: ['user'],
    components: { sidebarHeader, sidebarNav, SubMenu, sidebarToggle },
    data: () => ({
        isCollapsed: true
        }),
    methods: {
        toggleSidebar () {
            this.isCollapsed = !this.isCollapsed
        }
    },
    computed: {
        ...mapState(['info', 'seccion', 'uData_']),
        isMobile () {
            if (this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm' ) {
                return true
            }
            return false
        }
    },
    mounted () {
        // Events Received
        this.$bus.$on('toggleSidebar', data => {
            this.toggleSidebar()
        })
        // Preloaded functions

    }
}
</script>

<style lang="stylus">
@import '../../stylus/ia_variables'
@import './ia-sidebar-animations'
@import './user_classes'
@import './ia-sidebar-styles'
@import './ia-sidebar-styles-mobile'
@import './ia-sidebar-styles-laptop'



.slide-enter-active, .slide-leave-active
  transition transform 0.25s ease-out
  transform translateX(0px)


.slide-enter, .slide-leave-to
  transform translateX(-620px)

.goToLeft{
    animation goToLeft 0.35s ease-out forwards
}

.goToRight {
    animation goToRight 0.35s ease-out forwards
    }

</style>
