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
                h3.py-5 Administración de Salarios y Prestaciones Sociales
              div.ia-modal-body
                div.pt-5
                  p Proceso mediante el cual se realiza la administración de la remuneración de las personas vinculadas laboralmente con la Universidad.
                  | Este proceso involucra la gestión de las diferentes novedades (ingresos y deducciones),
                  | los aportes en seguridad social y aportes parafiscales de acuerdo con las normas
                  | laborales legales vigentes y políticas de la Institución.

                  p Procedimientos relacionados:
                ul.ul-list-modal
                  li Elaboración de nómina general (proyectos especiales y autoliquidación).
                  li Elaboración de nómina de primas (transitorios, docentes y administrativos).
                  li Retiro de cesantías Fondo Nacional de Ahorro (retiro de cesantías y crédito).
                  li Certificación de Horas de Docentes y Administrativos
                  li Asesoría personal y Pre pensional
                  li Gestión de la Seguridad Social integral

                div
                    h3.mt-2.pt-2.pb-0 Mayor información

                    .ia-block.info-contacto
                        .container
                            .informacion
                                i.mdi.mdi-contact-phone-outline.mr-3
                                span Contacto: (6) 3137254
                            .informacion
                                i.mdi.mdi-email.mr-3
                                span
                                    a(href="mailto:nomina@utp.edu.co", target="_blank") nomina@utp.edu.co
                            .informacion
                                i.mdi.mdi-email.mr-3
                                span
                                    a(href="gestionseguridadsocial@utp.edu.co", target="_blank") gestionseguridadsocial@utp.edu.co


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
                h3.py-5 Seguridad y Salud en el trabajo
              div.ia-modal-body
                div.pt-5
                  p La Seguridad y salud en el trabajo hace parte del Sistema Integral de Gestión de la Universidad; su normatividad se basa en el decreto 1072 de 2015; corresponde a un proceso lógico y por etapas que tiene como objetivos anticipar, reconocer, evaluar y controlar los riesgos que pueden afectar la seguridad y la salud en el trabajo.

                div
                    h3.mt-2.pt-2.pb-0 Mayor información
                    .ia-block.info-contacto
                        .container
                            .informacion
                                i.mdi.mdi-contact-phone-outline.mr-3
                                span Contacto: (6) 3137472
                            .informacion
                                i.mdi.mdi-email.mr-3
                                span
                                    a(href="mailto:Seguridadysalud@utp.edu.co", target="_blank") seguridadysalud@utp.edu.co






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
                h3.py-5 Desarrollo Humano
              div.ia-modal-body
                div.pt-5
                  p Generar acciones y programas de bienestar y desarrollo para el personal docente y administrativo de la institución, a fin de potencializar sus competencias, favorecer en su calidad de vida, fomentar su sentido de pertenencia y el mejoramiento del clima organizacional
                  p Subcomponentes:
                ul.ul-list-modal
                    li Inducción, Entrenamiento, Reinducción, Formación y Desarrollo
                    li Evaluación de Desempeño
                    li Medición e Intervención de clima organizacional
                    li Elaboración y Actualización de Manuales de Funciones
                    li Programa de Bienestar Social laboral
                    li Transformación Cultural
                    li Desvinculación Laboral
                div
                    h3.mt-2.pt-2.pb-0 Mayor información

                    .ia-block.info-contacto
                        .container
                            .informacion
                                i.mdi.mdi-contact-phone-outline.mr-3
                                span Contacto: (6) 3137300 ext 7748 - 7469
                            .informacion
                                i.mdi.mdi-email.mr-3
                                span
                                    a(href="mailto:desarrolloth@utp.edu.co", target="_blank") desarrolloth@utp.edu.co


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
                h3.py-5 Administración de Personal
              div.ia-modal-body
                div.pt-5
                  p Efectuar la selección, vinculación y administración del personal docente y administrativo, a través de la aplicación de diferentes técnicas de gestión del personal y el cumplimiento de la normatividad vigente, que permita a la Universidad contar con colaboradores competentes para el logro de los objetivos institucionales.
                  p Subcomponentes:
                ul.ul-list-modal
                  li Procesos de Selección
                  li Historia Laboral
                  li Situaciones Administrativas
                  li Vinculación del Talento Humano
                  li Actos Administrativos y Certificados Laborales
                div
                    h3.mt-2.pt-2.pb-0 Mayores Informes

                    .ia-block.info-contacto
                        .container
                            .informacion
                                i.mdi.mdi-contact-phone-outline.mr-3
                                span Contacto: (6) 3137300 ext 7748 - 7469
                            .informacion
                                i.mdi.mdi-email.mr-3
                                span
                                    a(href="mailto:contratacion@utp.edu.co", target="_blank") contratacion@utp.edu.co
                            .informacion
                                i.mdi.mdi-email.mr-3
                                span
                                    a(href="mailto:certificadoslaborales@utp.edu.co", target="_blank") certificadoslaborales@utp.edu.co
                            .informacion
                                i.mdi.mdi-email.mr-3
                                span
                                    a(href="mailto:legalizacion@utp.edu.co", target="_blank") legalizacion@utp.edu.co



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
