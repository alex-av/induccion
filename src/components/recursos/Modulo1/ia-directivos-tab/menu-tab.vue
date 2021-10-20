<template lang="pug">
    v-row.tabs-menu
      v-col
        v-tabs(
        v-model="tab",
        background-color="#fff",
        color="#00B893",
        light= true,
        :centered="centered",
        :grow="grow",
        :vertical="vertical",
        :right="right",
        height="60",
        :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined",
        :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined",
        :icons-and-text="icons")
          v-tabs-slider
          // Pestañas
          v-tab(href="#tab-1") Consejo Superior
            v-icon(v-if="icons").ia-icon mdi-check-bold

          v-tab(href="#tab-2") Rectoría
            v-icon(v-if="icons").ia-icon mdi-check-bold

          v-tab(href="#tab-3") Vicerrectoría Administrativa y Financiera
            v-icon(v-if="icons").ia-icon mdi-check-bold

          v-tab(href="#tab-4") Vicerrectoría Académica
            v-icon(v-if="icons").ia-icon mdi-check-bold

          v-tab(href="#tab-5") Vicerrectoría de Investigación Innovación y Extensión
            v-icon(v-if="icons").ia-icon mdi-check-bold

          v-tab(href="#tab-6") Vicerrectoría de Responsabilidad Social y Bienestar Universitario
            v-icon(v-if="icons").ia-icon mdi-check-bold
          // Items de la tabla

          // Item 1
          v-tab-item(value="tab-1").px-10.pt-8.pb-0
            v-row
              v-col(sm="12" md="3" lg="3")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/consejo.png",
                    transition="fade-transition"
                    )
                v-container
                  div

              v-col(sm="12" md="9" lg="9")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Consejo Superior
                  p Tal como lo consagra la Ley 30 de 1992 , el Consejo Superior Universitario es el máximo órgano de dirección y gobierno de la universidad. Son 9 miembros los que hacen parte de el y que representan distintos sectores con voz y voto para la toma de decisiones.

          // Item 2
          v-tab-item(value="tab-2").px-10.pt-8.pb-0
            v-row
              v-col(sm="12" md="3" lg="3")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/directivos-utp/Rector.jpg",
                    transition="fade-transition"
                    )

                v-container
                  div

              v-col(sm="12" md="9" lg="9")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.pt-5.pb-0 Rectoría
                  // h4.pb-5 Luis Fernando Gaviria Trujillo
                  h4.pb-5 Luis Fernando Gaviria Trujillo
                  p Es la dependencia encargada de la planeación y la dirección académica y administrativa, conforme a lo dispuesto en las normas legales, los estatutos, reglamentos de la Universidad y las decisiones y actos del Consejo Superior Universitario y el Consejo Académico, en procura del logro de la misión institucional.
                  div.py-2
                    a(href="https://www.utp.edu.co/rectoria/rectoria", target="_blank", class="ia-btn-link") Sitio web Rectoría
                  div
                    i.mdi.mdi-contact-phone-outline.contact-icon
                    span Tel: (6) 313 7350

          // Item 3
          v-tab-item(value="tab-3").px-10.pt-8.pb-0
            v-row
              v-col(sm="12" md="3" lg="3")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/directivos-utp/viceadmin.jpg",
                    transition="fade-transition"
                    )
                v-container
                  div

              v-col(sm="12" md="9" lg="9")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.pt-5.pb-0 Vicerrectoría Administrativa y Financiera
                  h4.pb-5 Fernando Noreña Jaramillo
                  p Se encarga de proporcionar todo el soporte administrativo y financiero a la Universidad con el fin de desarrollar una institución efectiva y transparente en sus procesos humanos, administrativos, tecnológicos e informáticos, financieros y de servicios, comprometida con el mejoramiento continuo y financieramente viable

                  // Enlace 1
                  div.py-2.ia-info-datos
                    a(href="https://www.utp.edu.co/vicerrectoria/administrativa/", target="_blank", class="ia-btn-link") Sitio web Vicerrectoría
                  // Enlace 2
                  div.py-2(@click.stop="viceadmin=true").ia-video-btn.ia-info-datos
                    i.mdi.mdi-youtube
                    span Ver video
                  // Enlace 3
                  div.py-2.ia-info-datos.ia-border-btn
                    i.mdi.mdi-contact-phone-outline.contact-icon
                    span Tel: (6) 313 7210
                  // Modal
                  v-dialog(
                    v-model="viceadmin",
                    v-if="viceadmin"
                    width="60%",
                    overlay-opacity="0.9",
                    overlay-color="#fff")
                    div.ia-modal-container
                      div(style="position:relative; width:100%; height:0px; padding-bottom:56.25%")
                        iframe(
                          autoplay,
                          style="position:absolute; left:0; top:0; width:100%; height:100%",
                          width="560",
                          height="315",
                          src="https://www.youtube.com/embed/hXT2c3whsmE",
                          frameborder="0",
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                          allowfullscreen)
          // Item 4
          v-tab-item(value="tab-4").px-10.pt-8.pb-0
            v-row
              v-col(sm="12" md="3" lg="3")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/directivos-utp/viceacademi.jpg",
                    transition="fade-transition"
                    )
                v-container
                  div

              v-col(sm="12" md="9" lg="9")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.pt-5.pb-0 Vicerrectoría Académica
                  h4.pb-5 Jhoniers Gilberto Guerrero Erazo
                  p Es la dependencia encargada de garantizar la calidad educativa de la Institución mediante la administración de los procesos académicos, docentes y estudiantiles.

                  // Enlace 1
                  div.py-2.ia-info-datos
                    a(href="https://www.utp.edu.co/vicerrectoria/academica/quienes-somos.html", target="_blank", class="ia-btn-link") Sitio web Vicerrectoría Académica
                  // Enlace 2
                  div.py-2(@click.stop="viceacademico=true").ia-video-btn.ia-info-datos
                    i.mdi.mdi-youtube
                    span Ver video
                  // Enlace 3
                  div.py-2.ia-info-datos.ia-border-btn
                    i.mdi.mdi-contact-phone-outline.contact-icon
                    span Tel: (6) 313 71 11
                  // Modal
                  v-dialog(
                    v-model="viceacademico",
                    v-if="viceacademico",
                    width="60%",
                    overlay-opacity="0.9",
                    overlay-color="#fff")
                    div.ia-modal-container
                      div(style="position:relative; width:100%; height:0px; padding-bottom:56.25%")
                        iframe(
                          autoplay,
                          style="position:absolute; left:0; top:0; width:100%; height:100%",
                          width="560",
                          height="315",
                          src="https://www.youtube.com/embed/vUdAgjkMxXM",
                          frameborder="0",
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                          allowfullscreen)

          // Item 5
          v-tab-item(value="tab-5").px-10.pt-8.pb-0
            v-row
              v-col(sm="12" md="3" lg="3")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/directivos-utp/viceinves.jpg",
                    transition="fade-transition"
                    )
                v-container
                  div

              v-col(sm="12" md="9" lg="9")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.pt-5.pb-0 Vicerrectoría de Investigación Innovación y Extensión
                  h4.pb-5 Martha Leonor Marulanda Ángel
                  p Es una Unidad Académico-Administrativa encargada de dinamizar el proceso de integración de la docencia con la investigación y la proyección social, contribuyendo con la expansión del conocimiento en las ciencias naturales, exactas, sociales y humanas.
                  // Enlace 1
                  div.py-2.ia-info-datos
                    a(href="https://www.utp.edu.co/vicerrectoria/investigaciones/", target="_blank", class="ia-btn-link") Sitio web
                  // Enlace 2
                  div.py-2(@click.stop="viceiie=true").ia-video-btn.ia-info-datos
                    i.mdi.mdi-youtube
                    span Ver video
                  // Enlace 3
                  div.py-2.ia-info-datos.ia-border-btn
                    i.mdi.mdi-contact-phone-outline.contact-icon
                    span Tel: (6) 313 71 14
                  // Modal
                  v-dialog(
                    v-model="viceiie",
                    v-if="viceiie",
                    width="60%",
                    overlay-opacity="0.9",
                    overlay-color="#fff")
                    div.ia-modal-container
                      div(style="position:relative; width:100%; height:0px; padding-bottom:56.25%")
                        iframe(
                          autoplay,
                          style="position:absolute; left:0; top:0; width:100%; height:100%",
                          width="560",
                          height="315",
                          src="https://www.youtube.com/embed/WuXzUy8xUyk",
                          frameborder="0",
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                          allowfullscreen)
          // Item 6
          v-tab-item(value="tab-6").px-10.pt-8.pb-0
            v-row
              v-col(sm="12" md="3" lg="3")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/directivos-utp/vicerespo.jpg",
                    transition="fade-transition"
                    )
                v-container
                  div

              v-col(sm="12" md="9" lg="9")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.pt-5.pb-0 Vicerrectoría de Responsabilidad Social y Bienestar Universitario
                  h4.pb-5 Diana Patricia Gómez Botero
                  p Se encarga de facilitar la formación integral, el desarrollo humano, social e intercultural y el acompañamiento institucional, en un ambiente de participación, diálogo, ética y sentido crítico, contribuyendo a la formación para la transformación social, el crecimiento y el desarrollo de la región y la nación.

                   // Enlace 1
                  div.py-2.ia-info-datos
                    a(href="https://www.utp.edu.co/vicerrectoria/responsabilidad-social/", target="_blank", class="ia-btn-link") Sitio web

                    // Enlace 3
                  div.py-2.ia-info-datos.ia-border-btn
                    i.mdi.mdi-contact-phone-outline.contact-icon
                    span Tel: (6) 313 71 84

</template>
<script>
export default {
  name: 'Modulo1Tabs',
  data: () => ({
    player: true,
    iconSound: 'mdi-volume-high',
    isPlayingAudio: false,
    // modales
    viceadmin: false,
    viceacademico: false,
    viceiie: false,
    // Configuración del componente tab
    tab: null,
    text: '',
    icons: false,
    centered: false,
    grow: false,
    vertical: false,
    prevIcon: false,
    nextIcon: false,
    right: false,
    tabs: 1
    // Config colors
  })
}
</script>

<style lang="stylus" scoped>
@import '../../../../stylus/ia_variables'
@import './menu-tab_animations'
@import './menu-tab_styles'

</style>
