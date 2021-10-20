
<template lang="pug">
    div.ia-sidebar-submenu
        div.ia-sidebar-container__menu-right--topbar.py-md-8.pr-md-5.ml-md-10
            h1 {{ info[section].name }}

        nav.ml-md-3.ia-sidebar-container__menu-right--items.ia-sidebar-submenu-items-container
            .dragbar
                menu-item(
                v-for="item, index in modulos",
                :class=" itemActual === item.id ? 'ia-item-selected': '' ",
                :key="item.id",
                :item="item",
                :index="index")
</template>

<script>
import { mapMutations } from 'vuex'
import menuItem from './ia-sidebar-submenu-item/ia-sidebar-submenu-item'
export default {
    name: 'iaMenu',
    props: ['info', 'section'],
    components: { menuItem },
    data: () => ({
        itemActual:0
    }),
    methods: {
        ...mapMutations(['insertarModulosCabecera']),
        MoverPanelContent (id, name, objeto, indice) {
            // console.log(id, name)
            // Asigna id en la variable item actual para seleccionarlo
            // Le añade la clase item selected
            this.itemActual = id
            // Emite al componente ia-content.vue
            // Le manda un objeto con el id y los nombres que serán usados en el panel de contenido
            this.$bus.$emit('moverpanel', { datos: objeto, nombre: name, elementoId: `#id-${id}`, index: indice })


            //var index = objeto.description.split('id="')
            //var index = index[1].split('"')[0]
            //this.$router.push('/?info=' + this.uData_ + '#' + index )
        }
    },
    computed: {
        modulos () {
            const valor = this.info[this.section].modules
            return valor.filter((item) => {
                if (item.indent === 0 && item.uservisible) {
                // INSERTO EN EL STATE LOS TÍTULOS DE ENCABEZADO DEL ARTÍCULO EN UN ARRAY
                this.insertarModulosCabecera(item)
                return item
                }
            })
        }
    },
    mounted () {
        //Events Received
        this.$bus.$on("getPanelMovement", (data) => {
            this.MoverPanelContent(data.itemid, data.name, data.object, data.index)
        })
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../stylus/ia_variables'
@import './ia-sidebar-submenu.styl'
@import './ia-sidebar-submenu-mobile.styl'
@import './ia-sidebar-submenu-tablet.styl'
@import './ia-sidebar-submenu-laptop.styl'
</style>
