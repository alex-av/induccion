
<template lang="pug">
    div.ia-user-img-container
        img(:src="src", alt="Nombre de usuario", class="ia-user-image")
</template>

<script>
export default {
    name: 'ia-sidebar-header-photo',
    props: ['src'],
    data: () => ({

    })
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './ia-sidebar-header-photo.styl'
@import './ia-sidebar-header-photo-mobile.styl'
@import './ia-sidebar-header-photo-tablet.styl'
@import './ia-sidebar-header-photo-laptop.styl'
</style>
