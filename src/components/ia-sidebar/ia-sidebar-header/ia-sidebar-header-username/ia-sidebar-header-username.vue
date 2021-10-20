
<template lang="pug">
    div.ia-sidebar-header-username.ia-user-info-container.ml-3
        h2 Hola
        span.ia-user-name {{ username }}
</template>

<script>
export default {
    name: 'iasidebarheaderusername',
    props:['username'],
    data: () => ({

    })
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './ia-sidebar-header-username.styl'
@import './ia-sidebar-header-username-mobile.styl'
@import './ia-sidebar-header-username-tablet.styl'
@import './ia-sidebar-header-username-laptop.styl'
</style>
