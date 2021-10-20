<template lang="pug">
    v-container.py-0
      v-row.justify-center
        v-col(sm="6")
          ia-card-modal(title="", imgmini="https://cdn-univirtual.utp.edu.co/img/induccion/assets/organigrama.png", imgmax="https://cdn-univirtual.utp.edu.co/img/induccion/assets/organigrama2.png")
            div(slot = "modal-contenido")
              p.text-center
                a(href="https://www.utp.edu.co/institucional/organigrama-utp.html", target="_blank", class="ia-btn-link" ) Ver organigrama de procesos
            v-container.pa-4
              p El organigrama de la Universidad es la representación gráfica de las líneas jerárquicas de la Institución cuyo modelo se soporta en resultados, procesos y trabajo en equipo, lo que le permite ser flexible y auto ajustarse según las necesidades institucionales que se vayan presentando.
              p En el organigrama se encuentran los procesos estratégicos, misionales, de apoyo y control y se identifican según la paleta de colores y convenciones, como se muestra al pie de la imagen.

        v-col(sm="6")
          ia-card-modal(title="", imgmini="https://cdn-univirtual.utp.edu.co/img/induccion/assets/mapa.png", imgmax="https://cdn-univirtual.utp.edu.co/img/induccion/assets/mapa_ampliadox2.png")
            div(slot = "modal-contenido")
              p.text-center
                a(href="https://www.utp.edu.co/gestioncalidad/sin-categoria/167/mapa-de-procesos", target="_blank", class="ia-btn-link") Ver mapa de procesos
            v-container.pa-4

              p La comprensión y gestión de los procesos interrelacionados como un sistema,
              | contribuye a la eficacia y eficiencia de la organización en el logro de sus resultados previstos.

              h4.pt-5.pb-4 El mapa de procesos tiene la siguiente categorización:
              ul
                li
                    h5 Nivel Estratégico:
                    span  Direccionamiento Institucional
                li
                    h5 Nivel Misional
                    span  Docencia, Investigación e Innovación, Extensión y proyección social

                li
                    h5 Nivel de Apoyo
                    span Admón. Institucional, Bienestar Institucional, Egresados, Internacionalización
                li
                    h5 Nivel de Evaluación y Seguimiento
                    span Control y Seguimiento Institucional, Aseguramiento de la calidad Institucional
        v-col(sm="12").py-5.text-center
          h5.py-5 Consulta más información acerca de la Estructura Orgánica en el siguiente documento
          a(href="https://www.utp.edu.co/cms-utp/data/bin/UTP/web/uploads/media/comunicaciones/documentos/Cartilla-Estructura-Organica.pdf", target="blank", class="ia-btn-link ml-4") Cartilla Estructura Orgánica
</template>
<script>
import iaCardModal from './ia-card-modal'
export default {
  name: 'iaComposer',
  components: { iaCardModal },
  data: () => ({
    nombre: 'Composer'
  })
}
</script>

<style lang="stylus">
@import './ia-card-modal-composer_styles'
</style>
