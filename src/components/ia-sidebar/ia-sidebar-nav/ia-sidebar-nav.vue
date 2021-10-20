
<template lang="pug">
    div.ia-sidebar-container__menu-left--body
        h2.ml-4.py-4 Empecemos
        // Nav
        nav.ia-menu-container
            ul.ia-menu-container-list
                // Item
                // Lista de menús principales en el sidebar
                nav-item(
                    v-for="menuitem, index in mainSections",
                    :key="menuitem.id",
                    :class=" [section === menuitem.section ? 'ia-item-selected' : '', ' list__item-' + menuitem.section ] ",
                    :itemdata="menuitem",

                    )
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import navItem from './ia-sidebar-nav-item/ia-sidebar-nav-item'
export default {

    name: 'sidebarnav',
    props: ['datainfo', 'section'],
    components: { navItem },
    data: () => ({

    }),
    methods: {

    },
    computed: {

        mainSections () {

            const valor = this.datainfo
            return valor.filter((item) => {
                if (item.section !== 0) {
                return item
                }
            })
        }

    },

    mounted () {

        //console.log('LOADED ???' ,this.mainSections)
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../stylus/ia_variables'
@import './ia-sidebar-nav.styl'
@import './ia-sidebar-nav-mobile.styl'
@import './ia-sidebar-nav-tablet.styl'
@import './ia-sidebar-nav-laptop.styl'
</style>
