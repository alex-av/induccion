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
        height="70",
        :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined",
        :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined",
        :icons-and-text="icons")
          v-tabs-slider
          // Pestañas
          v-tab(href="#tab-1") Fundador
            v-icon(v-if="icons").ia-icon mdi-crown

          v-tab(href="#tab-2") Escudo
            v-icon(v-if="icons").ia-icon mdi-medal

          v-tab(href="#tab-3") Prometeo
            v-icon(v-if="icons").ia-icon mdi-bank

          v-tab(href="#tab-4") Bandera
            v-icon(v-if="icons").ia-icon mdi-flag

          v-tab(href="#tab-5") Himno
            v-icon(v-if="icons").ia-icon mdi-bookmark-music
          // Items de la tabla
          // Item 1
          v-tab-item(value="tab-1").px-10.py-8
            v-row.pa-0
              v-col.px-3.py-0
                h3.pa-0 Fundador
            v-row
              v-col(sm="12" md="4" lg="4")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    img(
                    :src="require('@/assets/pestanas/fundador.jpg')",
                    transition="fade-transition",
                    contain
                    )
                v-container
                  div

              v-col(sm="12" md="8" lg="8")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  p Jorge Roa Martínez nacido en Guateque (Boyacá) el 28 de Marzo de 1891. Educado en uno de los mejores colegios de su ciudad natal y graduado en Derecho y Ciencias Políticas de La Universidad Nacional; llega a Pereira en 1926, donde contrae matrimonio con la distinguida dama Tulia Drews Castro.
                  p Durante el periodo de 1941 – 1946 fue presidente de la sociedad de Mejoras Públicas de Pereira, para el año de 1947 es nombrado Gobernador de Boyacá; en el año 1950 desempeño de manera brillante la Alcaldía de Pereira y dicto una serie de decretos sobre urbanismo y construcciones, constituyéndose en el primer código de la ciudad en esta materia.
                  p En 1957 desempeñó por un año la Presidencia del Honorable Tribunal Superior de Pereira y en 1958 inicia formalmente su batalla definitiva y victoriosa por el establecimiento y constitución de la Universidad Tecnológica de Pereira que finalmente se aprobó a partir de las Leyes 41 de 1958 y 85 de 1960.

          // Item 2
          v-tab-item(value="tab-2").px-10.py-8

            v-row
              v-col(sm="12" md="4" lg="4")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/assets/pestanas/escudo.jpg",
                    transition="fade-transition",
                    contain
                    )
                    div.audio
                      div.pb-5
                        h5.pb-5 Escucha el Audio
                        audio(controls, width=500, style="display:block; width:100%")
                          source(src="https://cdn-univirtual.utp.edu.co/img/induccion/assets/modulo1/media/escudo.mp3")
                v-container.py-2.px-0
                  div
              v-col(sm="12" md="8" lg="8")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  v-row.pt-0.pb-4
                    v-col.px-3.py-0
                      h3.pa-0 Escudo
                  p Consiste en un doble círculo que lleva el lema en latín "Ciencia y Técnica por la Humanidad Bajo la tutela de la Libertad". Su parte interior está divida en tres cuarteles o franjas que simbolizan:

                  p
                    ul
                        li
                          span.itemresaltado Superior:
                          span  "El Espacio exterior"

                        li
                          span.itemresaltado Central:
                          span  "El Tiempo y la Fuerza Energética"

                        li
                          span.itemresaltado  Inferior:
                          span  El cortejo representativo de la "Física Atómica", que son las partes esenciales de la ciencia matemática y física actuales.

                  p El Escudo de nuestra Institución “Universidad Tecnológica de Pereira” creado por el fundador Jorge Roa Martínez y otros colaboradores, se ha convertido en patrimonio de la Institución haciendo parte de la memoria colectiva de la comunidad universitaria, como símbolo emblemático de la historia que empezó a escribir su fundador desde 1961.

                  p En su desarrollo heráldico, se denomina al Escudo como portavoz y anunciante oficial de la Universidad Tecnológica de Pereira, siendo este el primer elemento gráfico de identificación para la Institución. Es por esto que su utilización es de carácter superior; el Escudo es la única representación gráfica válida para ser usada como sello de máxima garantía de la UTP.

                  p El significado del Escudo, emblema Institucional es otorgado por nuestro fundador Jorge Roa Martínez. Este tiene principalmente un lema en latín que identifica el quehacer diario de la Universidad “SCIENTIA ET TECHNICA PRO HVMANITATE SVB LIBERTATIS TVTELA” (Ciencia y Técnica por la Humanidad bajo la Tutela de la Libertad -UTP- ).

                  p Así mismo lo conforman una serie de elementos ubicados en franjas que representan cada componente científico y humanístico que tiene la Universidad Tecnológica de Pereira.

                  p Este Escudo representa el conocimiento universal que unifica civilizaciones del mundo. Las tres imágenes ubicadas en el Escudo a través de las tres franjas representan lo que es la ingeniería desde su principio hasta lo que construimos día tras día con la labor universitaria. Estos son los pilares funcionales de la Universidad enmarcadas en el emblema Institucional -UTP- ”

                  p De igual forma, tras el paso de los años los elementos que acompañan el Escudo han sido actualizados y adecuados según el significado simbólico que se les ha otorgado, teniendo en cuenta siempre la esencia Institucional. Entre las adecuaciones realizadas está la implementación del reloj de arena que se unía con la simbología del tiempo y espacio en el Escudo.

                  p Así mismo la implementación y el significado de las estrellas, una luna y un sol, y de forma implícita, la adaptación del Hombre de Vitruvio de Leonardo Da vinci en la estrella pentagonal, representada en una de las estrellas de cinco puntas de la franja superior del emblema, aportándole al valor originalmente simbólico que nuestro fundador Jorge Roa le otorgó.
                  p Lo que hoy conocemos como el Escudo Institucional de la UTP es lo que el Consejo Superior aprueba tras el Acuerdo número 13 del 8 de abril de 2008 y el que debe ser utilizado en las comunicaciones oficiales de Rectoría de la Universidad Tecnológica de Pereira, actos protocolarios, condecoraciones entre otras, además de esto utilizado como respaldo en las comunicaciones estratégicas, en la mayoría de las piezas comunicativas emitidas por la Institución

          // Item 3
          v-tab-item(value="tab-3").px-10.py-8

            v-row
              v-col(sm="12" md="4" lg="4")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/assets/pestanas/prometeo.jpg",
                    transition="fade-transition",
                    contain
                    )
                v-container.py-2.px-0
              v-col(sm="12" md="8" lg="8")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  v-row.pa-0
                    v-col.px-3.pb-4.pt-0
                      h3.pa-0 Prometeo
                  p Obra escultórica en cemento y bronce del escultor y escritor antioqueño Rodrigo Arenas Betancourt (Fredonia, 1919 – 1995). Reconocido por su obra monumentalista, en la cual plasma su afán, por resaltar las epopeyas del pueblo colombiano y los personajes que han formado la cultura de la nación.
                  p “El Prometeo Encadenado” es una escultura en homenaje a Juan María Mejía Marulanda, ex profesor de ingeniería eléctrica de la Universidad Tecnológica de Pereira.
                  p Fragmento mitológico: “Tras vengarse así de la humanidad, Zeus se vengó también de Prometeo e hizo que le llevaran al Cáucaso, donde fue encadenado a una roca. Zeus envió un águila para que se comiera el hígado de Prometeo. Siendo éste inmortal, su hígado volvía a crecerle cada noche, y el águila volvía a comérselo cada día”.
                  p El legado de esta historia de quien, por amor a la humanidad, fue capaz de desafiar el poder de los dioses y afrontar el castigo que le impusieron

          // Item 4
          v-tab-item(value="tab-4").px-10.py-8
            v-row.pa-0
              v-col.px-3.py-0
                h3.pa-0 Bandera
            v-row
              v-col(sm="12" md="4" lg="4")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/assets/pestanas/bandera.jpg",
                    transition="fade-transition",
                    contain
                    )
                v-container.py-2.px-0
                  div
                  div.audio
                    div.pb-5
                      h5.pb-5 Escucha el Audio
                      audio(controls, width=500, style="display:block; width:100%")
                        source(src="https://cdn-univirtual.utp.edu.co/img/induccion/assets/modulo1/media/bandera.mp3")
              v-col(sm="12" md="8" lg="8")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  p La bandera fue diseñada por Jorge Roa Martínez, fundador de la Universidad Tecnológica de Pereira. En su diseño integró 6 colores que representan distintas virtudes en el ser humano.
                  p Amarillo Ocre, ubicado en el fondo de la bandera hace alusión a la Inteligencia y sabiduría. (Mente)

                  h4 Franjas:

                  v-container
                    v-icon(color="#f6f6f6") mdi-checkbox-blank-circle
                    span Blanco  : Pureza y transparencia
                    v-divider
                    v-icon(color="blue") mdi-checkbox-blank-circle
                    span Azul Celeste : Fuerza, tenacidad y Lealtad (alma)
                    v-divider
                    v-icon(color="green") mdi-checkbox-blank-circle
                    span Verde: Armonía y meditación (Espíritu)
                    v-divider
                    v-icon(color="red") mdi-checkbox-blank-circle
                    span Rojo: Amor espiritual y voluntad (Corazón)

          // Item 5
          v-tab-item(value="tab-5").px-10.py-8
            v-row.pa-0
              v-col.px-3.py-0
                h3.pa-0 Himno
            v-row
              v-col
                // .d-flex.flex-column.flex-wrap
                v-container.pa-0.ia-tab-container.d-flex.flex-column.flex-wrap.overflow-x-auto
                  div.ia-estrofa
                    img(src="https://cdn-univirtual.utp.edu.co/img/induccion/assets/pestanas/himno.jpg")
                  div.ia-estrofa.text-center
                    h5 Coro
                    p Tesón de almas libres y abiertas
                    p tras el mañana en la lucha sin par
                    p honor de razas fuertes y altivas
                    p tallando bronces de libertad
                  div.ia-estrofa.text-center
                    h5 Estrofa I
                    p Hachas labriegas vertiste en llamas
                    p que a la ignorancia irradian saber
                    p de insignes mentes urdes la historia
                    p que forjan ciencia, técnica y fe.
                  div.ia-estrofa.text-center
                    h5 Estrofa II
                    p Bravos titanes ciñen la gloria
                    p y a la materia  doman sin fin
                    p abren caminos a la esperanza
                    p que surca el aire del porvenir
                  div.ia-estrofa.text-center
                    h5 Estrofa III
                    p Crisol de ciencia, forja la historia
                    p aulas que anidan arte y saber
                    p lucha de nobles hombres que empuñan
                    p lanzas y sueños tras el deber
                  div.ia-estrofa.text-center
                    h5 Estrofa IV
                    p Brilla por siempre bajo tu amparo
                    p beneficiosa luz del saber
                    p libres caminos tejen la gloria
                    p oda de ciencia, fuerza y poder

                v-container.pa-0
                  div
                  transition(name="slide-fade")
                    div.audio
                      div.pb-5
                        h5.py-5 Escucha el Audio
                        audio(controls, width=500, style="display:block; width:100%")
                          source(src="https://cdn-univirtual.utp.edu.co/img/induccion/assets/pestanas/himno.mp3")
                          p Hacer click
</template>
<script>
export default {
  name: 'Modulo1Tabs',
  data: () => ({
    player: true,
    iconSound: 'mdi-volume-high',
    isPlayingAudio: false,
    // Configuración del componente tab
    tab: null,
    text: '',
    icons: true,
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
@import '../../../stylus/ia_variables'
@import './menu-tab_animations'
@import './menu-tab_styles'

</style>
