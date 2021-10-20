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
                h3.py-5 Sistema Gestión de Calidad
              div.ia-modal-body
                div.pt-5
                  p Es una herramienta de gestión que permite mejorar el desempeño institucional, se enfoca en la satisfacción de los usuarios de los procesos, el cumplimiento de requisitos legales y reglamentarios aplicables y el mejoramiento de prestación de los servicios.
                  | Es el pilar fundamental en la UTP para la implementación de los otros servicios de gestión.
                 
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
                h3.py-5 Acreditación de Laboratorios
              div.ia-modal-body
                div.pt-5
                  p Es un organismo que ofrece el servicio de evaluación de conformidad (Cumplimiento de requisitos) para ensayos, calibraciones y sistemas de gestión. Para denominarse OEC es necesario estar acreditados por un Organismo Nacional de Acreditación.

              
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
                h3.py-5 Sistema de Gestión de Seguridad de la información
              div.ia-modal-body
                div.pt-5
                  p Tiene como propósito la implementación de los requisitos de seguridad que se fundamentan en la Norma NTC-ISO/IEC 27001 para disminuir los riesgos a los que se encuentran expuestas las organizaciones, enfocadas en la protección y resguardo de la información a través de la confidencialidad, integridad y disponibilidad.
               
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
                h3.py-5 Sistema de Gestión de Seguridad y Salus en el trabajo
              div.ia-modal-body
                div.pt-5
                  p Todas las actividades realizadas mediante este sistema de gestión están enfocadas a la aplicación de medidas tendientes al mejoramiento del comportamiento de los trabajadores, las condiciones y el medio ambiente laboral, y el control eficaz de los peligros y riesgos en el lugar de trabajo.
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
    modelzona4: false
  })
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './areas_styles'
</style>
