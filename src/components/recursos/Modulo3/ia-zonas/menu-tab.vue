<template lang="pug">
    v-row.tabs-menu
      .col-12 Revisa las fotos y haz un recorrido por los escenarios deportivos de la universidad
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
          v-tab(href="#tab-9") Gimnasio UTP
            v-icon(v-if="icons").ia-icon mdi-dumbbell

          v-tab(href="#tab-10") Piscinas
            v-icon(v-if="icons").ia-icon mdi-pool

          v-tab(href="#tab-1") Cancha de fútbol
            v-icon(v-if="icons").ia-icon mdi-soccer

          v-tab(href="#tab-2") Cancha de RaquetBall
            v-icon(v-if="icons").ia-icon mdi-tennis

          v-tab(href="#tab-4") Canchas de Baloncesto
            v-icon(v-if="icons").ia-icon mdi-basketball

          v-tab(href="#tab-11") Pista atlética
            v-icon(v-if="icons").ia-icon mdi-run-fast

          v-tab(href="#tab-3") Cancha Tejo y minitejo
            v-icon(v-if="icons").ia-icon mdi-triangle

          v-tab(href="#tab-5") Canchas de Voleibol Arena
            v-icon(v-if="icons").ia-icon mdi-volleyball

          v-tab(href="#tab-6") Cancha sintética
            v-icon(v-if="icons").ia-icon mdi-soccer-field

          v-tab(href="#tab-7") Levantamiento de pesas
            v-icon(v-if="icons").ia-icon mdi-weight-kilogram

          v-tab(href="#tab-8") Cancha y muro de Tenis
            v-icon(v-if="icons").ia-icon mdi-tennis

          v-tab(href="#tab-12") Sala de ajedrez
            v-icon(v-if="icons").ia-icon mdi-chess-rook

          v-tab(href="#tab-13") Sala de Artes Marciales
            v-icon(v-if="icons").ia-icon mdi-karate

          v-tab(href="#tab-14") Tenis de mesa
            v-icon(v-if="icons").ia-icon mdi-table-tennis

          v-tab(href="#tab-15") Street Workout
            v-icon(v-if="icons").ia-icon mdi-circle

          // Items de la tabla

          // Item 1
          v-tab-item(value="tab-1").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/FUTBOL.jpg",
                    transition="fade-transition",
                    contain,
                    lazy-src="Cargando",
                    height = 300

                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Cancha de Fútbol Principal
                  p Usos : Fútbol , Rugby , Lacrosse, Ultimate, Actividades de Campo
                  p.horarios Horario : 6:00 am - 6 pm

          // Item 2
          v-tab-item(value="tab-2").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/2.RACQUETBALL.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300

                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Cancha de Racquetball
                  p Usos : Racquetball
                  p.horarios Horario : 6:00 am - 10 pm

          // Item 3
          v-tab-item(value="tab-3").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/3.TEJO.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300

                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Canchas de Tejo y Minitejo
                  p Usos : Tejo y minitejo
                  p.horarios Horario : 6:00 am - 10 pm

          // Item 4
          v-tab-item(value="tab-4").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/4.BALONCESTO.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300

                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Canchas de Baloncesto
                  p Usos : Baloncesto y actividad libre
                  p.horarios Horario : 6:00 am - 10 pm

          // Item 5
          v-tab-item(value="tab-5").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/5.VOLLEY_PLAYA.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300
                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Canchas de Voleibol Arena
                  p Usos : Voleibol
                  p.horarios Horario : 6:00 am - 10 pm

          // Item 6
          v-tab-item(value="tab-6").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/SINTETICA.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300
                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Canchas de Futbol Sintética
                  p Usos : Fútbol , Rugby , Lacrosse, Ultimate, Futbol Sala
                  p.horarios Horario : 6:00 am - 10 pm

          // Item 7
          v-tab-item(value="tab-7").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/7.L_PESAS.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300
                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Levantamiento de Pesas
                  p Usos : Halterofilia
                  p.horarios Horario : 6:00 am - 10 pm

          // Item 8
          v-tab-item(value="tab-8").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/8.TENIS_1.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300
                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Cancha y muro de tennis
                  p Usos : Tenis de campo
                  p.horarios Horario : 6:00 am - 6:00 pm

          // Item 9
          v-tab-item(value="tab-9").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/GYM_2.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300
                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Gimnasio UTP
                  p Usos : Acondicionamiento físico general, individual, grupal para comunidad universitaria y comunidad externa. Clases deporte académico, entrenamientos selectivos, torneos internos y actividades grupales orientadas por instructor.
                  p.horarios Horario : 6:00 am - 2 pm  - 4:00 pm - 9:00 pm , Sábados 9:00 am - 1:00 pm

          // Item 10
          v-tab-item(value="tab-10").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/PISCINA_3.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300
                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Piscinas
                  p Usos : Clase deportivo académico, entramientos selectivos, clases del programa de Ciencias del deporte
                  p.horarios Horario: 6:00 am - 10:00 pm

          // Item 11
          v-tab-item(value="tab-11").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/PISTA.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300
                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Pista Atlética
                  p Usos : Atletismo y actividad libre
                  p.horarios Horario: 6:00 am - 10:00 pm

          // Item 12
          v-tab-item(value="tab-12").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/AJEDREZ.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300
                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Sala de Ajedrez
                  p Usos : Ajedrez y clases teóricas
                  p.horarios Horario: 6:00 am - 10:00 pm

          // Item 13
          v-tab-item(value="tab-13").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/14.-ARTES-MARCIALES.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300
                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Sala de Artes Marciales (Dojan)
                  p Usos: Taekwondo , Karate Do, Judo, Otras artes marciales
                  p.horarios Horario: 6:00 am - 10:00 pm

          // Item 14
          v-tab-item(value="tab-14").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/tennisdemesa.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300
                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Sala de Tenis de Mesa
                  p Usos : Tenis de mesa
                  p.horarios Horario: 6:00 am - 10:00 pm

          // Item 15
          v-tab-item(value="tab-15").px-10.py-5
            v-row
              v-col(sm="12" md="5" lg="5")
                v-container.pa-0.overflow-y-auto
                  v-container.pa-0
                    v-img(
                    src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/zonas/16.BARRAS.jpg",
                    transition="fade-transition",
                    cover,
                    lazy-src="Cargando",
                    height = 300
                    )
                v-container
                  div

              v-col(sm="12" md="7" lg="7")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h3.py-5 Zona de Street Workout
                  p Usos : Street Workout y Actividad Libre
                  p.horarios Horario: 6:00 am - 6:00 pm

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
@import '../../../../stylus/ia_variables'
@import './menu-tab_animations'
@import './menu-tab_styles'

</style>
