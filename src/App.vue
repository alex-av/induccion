<template lang="pug">
        router-view
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="stylus">
@import 'stylus/main';
.ia-contenedor-principal
  height 100vh
.fondo_1
    background-image url('assets/fondo_1.png')
    background-size 50%
    background-repeat repeat
    background-position 320px 50px
    background-color conozcamos_la_utp
    color conozcamos_la_utp
.fondo_2
    background-image url('assets/fondo_2.png')
    background-size 50%
    background-repeat repeat
    background-position 320px 50px
    background-color como_me_relaciono_utp
    color como_me_relaciono_utp
.fondo_3
    background-image url('assets/fondo_3.png')
    background-size 50%
    background-repeat repeat
    background-position 320px 50px
    background-color hago_parte_de_la_utp
    color hago_parte_de_la_utp
.fondo_4
    background-image url('assets/fondo_4.png')
    background-size 50%
    background-repeat repeat
    background-position 320px 50px
    background-color hacia_donde_vamos
    color hacia_donde_vamos
.micolor
    background-color micolor
.sa-bloque-derecho
    background-color #fff
    box-shadow -10px 0 10px 0 rgba(0,0,0,0.04)
.ia-legend
    font-size 1.5em
    font-weight bold
    color gris_menus

@media screen and (max-width 960px) and (min-width 600px)
    .sa-bloque-izquierdo,
    .sa-bloque-derecho
        position fixed
    .sa-bloque-derecho
        z-index 99
    .sa-bloque-izquierdo
        z-index 100
        bottom 0
        top 0
        width 0
        height 0

@media screen and (max-width 600px)
    .sa-bloque-izquierdo,
    .sa-bloque-derecho
        position fixed



    .sa-bloque-derecho
        z-index 99
    .sa-bloque-izquierdo
        z-index 100
        bottom 0
        top 0
        width 0
        height 0
</style>
