<template lang="pug">

    nav.ia-container-content__menubar
        template(v-if="schema")
            ul.ia-list.ia-list-h
                li(v-for="tabItem in schema.sections[sectionnumber - 1].subsection[currentsubmenuindex].subsections")
                    button(@click="requestPanelMovement(tabItem.id, tabItem.name, tabItem.target)")

                        span {{tabItem.name }}


</template>

<script>
import schema from '../../../../store/ia-schema'
export default {
    name: 'ia-content-head-tabs',
    props: ['info', 'sectionnumber', 'submenu', 'currentsubmenuindex'],
    data: () => ({
        schema
    }),
    methods:{
        requestPanelMovement(itemId, itemName, itemTarget) {
            this.$bus.$emit('tabMove', {itemId, itemName, itemTarget})
        }
    },
    computed: {

        tabItems () {
            const modules = this.info[this.sectionnumber].modules
            const tabitemsindent = 1
            return modules.filter((module) => {
                if (module.indent === tabitemsindent && module.uservisible) {
                    return module
                }
            })
        }
    }

}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './ia-content-head-tabs.styl'
@import './ia-content-head-tabs-mobile.styl'
@import './ia-content-head-tabs-tablet.styl'
@import './ia-content-head-tabs-laptop.styl'
</style>
