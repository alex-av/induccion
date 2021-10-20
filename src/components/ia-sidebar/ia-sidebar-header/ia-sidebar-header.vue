
<template lang="pug">
    div.ia-sidebar-header.pt-5.px-md-5.pb-md-3

        template(v-if="user && !user.exception ")
            div.d-flex.d-lg-flex.align-center.px-md-0.px-5
                user-avatar(:src="user.profileimageurl")
                user-name(:username="user.fullname")
            user-progress(:barvalue="user.progress")

        template(v-else)

            // Eliminar y colocar la precarga de los elementos
            div.d-flex.d-lg-flex.align-center.px-md-0.px-5
                user-avatar(:src="'https://cdn-univirtual.utp.edu.co/img/induccion/assets/user.png'")
                user-name(:username="'Usuario no identificado'")
            user-progress(:barvalue="0")

    </template>

<script>
import userAvatar from './ia-sidebar-header-photo/ia-sidebar-header-photo'
import userName from './ia-sidebar-header-username/ia-sidebar-header-username'
import userProgress from './ia-sidebar-header-progress/ia-sidebar-header-progress'

export default {
    name: 'sidebarheader',
    components: {userAvatar, userName, userProgress},
    props: ['user'],
    data: () => ({
    })
}
</script>

<style lang="stylus" scoped>

@import '../../../stylus/ia_variables'
@import './ia-sidebar-header.styl'
@import './ia-sidebar-header-mobile.styl'
@import './ia-sidebar-header-tablet.styl'
@import './ia-sidebar-header-laptop.styl'

</style>
