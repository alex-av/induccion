<template lang="pug">
    v-row.tabs-menu
      v-col
        v-tabs(
        v-model="tab",
        background-color="#fff",
        color="#00B893",
        light= true,
        vertical,
        :grow="grow",
        :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined",
        :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined")
          v-tabs-slider
          // Pestañas
          v-tab(href="#tab-1")
            v-icon(left, v-if="icons").ia-icon mdi-shield-check-outline
            span Gestión de Permisos Laborales

          v-tab(href="#tab-2")
            v-icon(left, v-if="icons").ia-icon mdi-mother-nurse
            span Permiso hora de Lactancia

          v-tab(href="#tab-3")
            v-icon(left, v-if="icons").ia-icon mdi-christianity
            span  Licencia por Luto

          v-tab(href="#tab-4")
            v-icon(left, v-if="icons").ia-icon mdi-beach
            span  Vacaciones

          v-tab(href="#tab-5")
            v-icon(left, v-if="icons").ia-icon mdi-history
            span  Historia Laboral

          v-tab(href="#tab-6")
            v-icon(left, v-if="icons").ia-icon mdi-wheelchair-accessibility
            span  Incapacidades

          // Items de la tabla
          // Item 1
          v-tab-item(value="tab-1").px-10.py-5

            v-row
              v-col(sm="12" md="2" lg="2")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/mp/M3-PERMISOSLABORALES.png", alt="Gestión de permisos laborales")

              v-col(sm="12" md="10" lg="10")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h5.pb-5 Gestión de Permisos Laborales
                  p Encontramos permisos laborales que pueden ser por horas y hasta un máximo de 3 dias.  Los permisos son otorgados y disfrutados por el trabajador sin ser descontados de su sueldo o salario siempre y cuando sean presentados los respectivos soportes y sea mediado por una causa justa.
                  a(href="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/adjuntos/1Gde-permisos.pdf", target="_blank").ia-btn-attachment
                    span Consulte aquí el trámite
          // Item 2
          v-tab-item(value="tab-2").px-10.py-5

            v-row
              v-col(sm="12" md="2" lg="2")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/mp/M3-LACTANCIA.png", alt="Gestión de permisos laborales")

              v-col(sm="12" md="10" lg="10")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h5.pb-5 Permiso hora de Lactancia
                  p Según el artículo 238 del código sustantivo de trabajo, el empleador está en la obligación de conceder a la trabajadora dos descansos, de treinta (30) minutos cada uno, dentro de la jornada para amamantar a su hijo, sin descuento alguno en el salario por dicho concepto, durante los primeros seis (6) meses de edad.
                  a(href="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/adjuntos/2Permiso-Hora-de-Lactancia.pdf", target="_blank").ia-btn-attachment
                    span Consulte aquí el trámite

          // Item 3
          v-tab-item(value="tab-3").px-10.py-5

            v-row
              v-col(sm="12" md="2" lg="2")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/mp/M3-LUTO.png", alt="Licencia por luto")

              v-col(sm="12" md="10" lg="10")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h5.pb-5 Licencia por Luto
                  p Mediante la Ley 1635 del 11 de junio de 2013, se establece la licencia por luto para servidores públicos.
                  p " Conceder a los Servidores Públicos en caso de fallecimiento de su cónyuge, compañero o compañera permanente o de un familiar hasta el grado segundo de consanguinidad, primero de afinidad y segundo civil, una licencia remunerada por luto de cinco (5) días hábiles".
                  a(href="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/adjuntos/3Licencia-por-Luto.pdf", target="_blank").ia-btn-attachment
                    span Consulte aquí el trámite

          // Item 4
          v-tab-item(value="tab-4").px-10.py-5

            v-row
              v-col(sm="12" md="2" lg="2")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/mp/M3-VACACIONES.png", alt="Licencia por luto")

              v-col(sm="12" md="10" lg="10")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h5.pb-5 Vacaciones
                  p La corte constitucional de Colombia define las vacaciones laborales como “el derecho a un descanso remunerado por las labores desarrolladas al servicio del empleador, quien a su vez tiene el deber de causarlas contablemente, al igual que la obligación de pagarlas al empleado dentro de los términos de ley.

          // Item 5
          v-tab-item(value="tab-5").px-10.py-5

            v-row
              v-col(sm="12" md="2" lg="2")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/mp/M3-HISTORIALABORAL.png", alt="Licencia por luto")

              v-col(sm="12" md="10" lg="10")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h5.pb-5 Historia Laboral
                  p La Universidad Tecnológica define la historia laboral al lugar donde se almacenan los documentos físicos y digitales de los funcionarios.
                  p La vigencia de los datos personales es vital para tener una historia laboral actualizada.

          // Item 6
          v-tab-item(value="tab-6").px-10.py-5

            v-row
              v-col(sm="12" md="2" lg="2")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/mp/M3-INCAPACIDAD.png", alt="Licencia por luto")

              v-col(sm="12" md="10" lg="10")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h5.pb-5 Incapacidades
                  p Se define como incapacidad laboral, la imposibilidad que afronta un trabajador para laborar como consecuencia de una enfermedad o un accidente de trabajo.
                  a(href="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/adjuntos/4Incapacidad.pdf", target="_blank").ia-btn-attachment
                    span Consulte aquí el trámite

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
