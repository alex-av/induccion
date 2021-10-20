<template lang="pug">
    v-container.contenedor
      .row.imagen-container
        .col
          div(v-html="data")
      .row
        div.zonas
          span.zona.zona1(@click.stop="modelzona1 = true")
          span.zona.zona2(@click.stop="modelzona2 = true")
          span.zona.zona3(@click.stop="modelzona3 = true")
          span.zona.zona4(@click.stop="modelzona4 = true")
          span.zona.zona5(@click.stop="modelzona5 = true")
          span.zona.zona6(@click.stop="modelzona6 = true")

        v-dialog(
          v-model="modelzona1",
          v-if="modelzona1",
          width="50%",
          overlay-opacity="0.8",
          overlay-color="rgb(255,255,255)"
          )
          // Modal cuerpo
          div.background-base.pa-5
            div.info-modal-container.px-5.pb-5
              div.ia-modal-header
                h3.py-5 Servicio de información virtual
              div.ia-modal-body
                div.pt-5
                  p Solicitudes de capacitación en el uso de recursos y servicios de información.
                  p Bases de datos, revistas en línea, entre otros.
                  p Lunes y Miércoles: 10:00 am - 12:00 am
                  p Lunes y Viernes: 4:00 pm a 6:00 pm

                  
          // Fin modal cuerpo

        v-dialog(
          v-model="modelzona2",
          v-if="modelzona2",
          width="50%",
          overlay-opacity="0.8",
          overlay-color="rgb(255,255,255)"
          )
          // Modal cuerpo
          div.background-base.pa-5
            div.info-modal-container.px-5
              div.ia-modal-header
                h3.py-5 Renovación de libros
              div.ia-modal-body
                div.pt-5
                  p La renovación de libros se puede realizar mediante dos opciones:
                  p 1. Renovación presencial: Usted se presenta con el carné e indica el material que desea renovar en la Biblioteca.
                  p 2. Renocación telefónica: Comuníquese al teléfono 3137297. Debe proporcionar su número de identidad y el código de barras del material. 

               
          // Fin modal cuerpo

        v-dialog(
          v-model="modelzona3",
          v-if="modelzona3",
          width="50%",
          overlay-opacity="0.8",
          overlay-color="rgb(255,255,255)"
          )
          // Modal cuerpo
          div.background-base.pa-5
            div.info-modal-container.px-5.pb-5
              div.ia-modal-header
                h3.py-5 Buzón de devolución de material
              div.ia-modal-body
                div.pt-5
                  p Contiguo a la entrada principal del edificio de biblioteca se encuentra ubicado el Buzón de Devolución. Facilita a los usuarios la devolución del material en horarios no hábiles de la Biblioteca.
                 
          // Fin modal cuerpo

        v-dialog(
          v-model="modelzona4",
          v-if="modelzona4",
          width="50%",
          overlay-opacity="0.8",
          overlay-color="rgb(255,255,255)"
          )
          // Modal cuerpo
          div.background-base.pa-5
            div.info-modal-container.px-5.pb-5
              div.ia-modal-header
                h3.py-5 Consulta en Sala
              div.ia-modal-body
                div.pt-5
                  p Servicio presencial donde puede realizar su consulta solicitando el material que desee.
                  p Sala de medios Audiovisuales
                  p Sala destinana a la Agencia Cultural de la Biblioteca, informes extensión 7301 Biblioteca Jorge Roa Matínez.
                
          // Fin modal cuerpo
        v-dialog(
          v-model="modelzona5",
          v-if="modelzona5",
          width="50%",
          overlay-opacity="0.8",
          overlay-color="rgb(255,255,255)"
          )
          // Modal cuerpo
          div.background-base.pa-5
            div.info-modal-container.px-5.pb-5
              div.ia-modal-header
                h3.py-5 Préstamo interbibliotecario
              div.ia-modal-body
                div.pt-5
                  p Son programas cooperativos entre bibliotecas de otras instituciones, destinados a facilitar el intercambio de información y documentación.
                 
          // Fin modal cuerpo
        v-dialog(
          v-model="modelzona6",
          v-if="modelzona6",
          width="50%",
          overlay-opacity="0.8",
          overlay-color="rgb(255,255,255)"
          )
          // Modal cuerpo
          div.background-base.pa-5
            div.info-modal-container.px-5.pb-5
              div.ia-modal-header
                h3.py-5 Acceso remoto bases de datos y revistas en suscripción
              div.ia-modal-body
                div.pt-5
                  p Portafolio de Bases de datos.
                  p La universidad cuenta con 29 Bases de datos.
                  p Consulta aquí las bases de datos por facultades.
                a(href="http://biblioteca.utp.edu.co/recursos-electronicos/328/bases-de-datos-suscritas-2019", target="_blank") http://biblioteca.utp.edu.co/recursos-electronicos/328/bases-de-datos-suscritas-2019
                 
          // Fin modal cuerpo


</template>

<script>
export default {
  name: 'areas',
  props: ['data'],
  data: () => ({
    name: 'Áreas internas de trabajo',
    modelzona1: false,
    modelzona2: false,
    modelzona3: false,
    modelzona4: false,
    modelzona5: false,
    modelzona6: false
  })
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './areas_styles'
</style>
