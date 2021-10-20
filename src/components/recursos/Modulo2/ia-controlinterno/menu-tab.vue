<template lang="pug">
    v-row.tabs-menu
      v-col
        v-tabs(
        v-model="tab",
        background-color="#fff",
        color="#00B893",
        light= true,
        :grow="grow",
        :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined",
        :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined")
          v-tabs-slider
          // Pestañas
          v-tab(href="#tab-1")
            v-icon(left, v-if="icons").ia-icon mdi-settings
            span ¿ Qué es el Control Interno ?

          v-tab(href="#tab-2")
            v-icon(left, v-if="icons").ia-icon mdi-file-document-box-check
            span ¿Modelo Estándar de Control Interno?

          v-tab(href="#tab-3")
            v-icon(left, v-if="icons").ia-icon mdi-settings-transfer
            span ¿Sistema de Control Interno?

          v-tab(href="#tab-4")
            v-icon(left, v-if="icons").ia-icon mdi-account-group
            span  ¿Unidad Organizacional de Control Interno?

          // Items de la tabla
          // Item 1
          v-tab-item(value="tab-1").px-10.py-5
            v-row.pa-0
              v-col.px-3.py-0
                h4.pt-2.pb-5 ¿ Qué es el Control Interno ?
            v-row
              v-col(sm="12" md="11" lg="11")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  p El Control Interno es una herramienta de gestion Gerencial que constituye un proceso continuo, dinámico e integral:
                  ul.ml-5
                    li Efectuado por todos los niveles de la institución
                    li Con la finalidad de enfrentar los riesgos internos y externos
                    li Para proporcionar certeza en el logro del cumplimiento de los objetivos de la Universidad.
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h4.py-5 Objetivos del control interno
                  ul.ml-5
                    li Promueve la mejora de la gestión
                    li Asegura el adecuado uso de los recursos públicos
                    li Promueve el cumplimiento de las normas y planes institucionales
                    li Garantiza  un adecuado manejo de la información

          // Item 2
          v-tab-item(value="tab-2").px-10.py-5
            v-row.pa-0
              v-col.px-3.py-0
                h4.pt-2.pb-0 ¿Qué es el Modelo Estandar de Control Interno?
            v-row

              v-col(sm="12" md="11" lg="11")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  div.pt-5
                    p  El Modelo Estándar de Control Interno (MECI),  proporciona una estructura básica para evaluar la estrategia, la gestión y los propios mecanismos de evaluación del proceso administrativo, y aunque promueve una estructura uniforme, se adapta a las necesidades específicas de cada entidad, a sus objetivos, estructura, tamaño, procesos y servicios que suministran
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  h4.py-5 Se fundamenta en 5 componentes
                  ul.ml-5
                    li Ambiente de Control
                    li Administración del Riesgo
                    li Actividades de Control
                    li Información y comunicación
                    li Actividades de monitoreo o supervisión continua
          // Item 3
          v-tab-item(value="tab-3").px-5.py-5
            v-row.pa-0
              v-col.px-3.py-0
                h4.pt-2.pb-0 ¿Qué es el Sistema de Control Interno?
            v-row

              v-col(sm="12" md="11" lg="11")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  div.py-5
                    p El Sistema de Control Interno es el conjunto de acciones, actividades, planes, políticas, normas, registros, procedimientos y métodos, incluido el entorno y actitudes que desarrollan los miembros de una institución con el objetivo de prevenir posibles riesgos que afectan a una entidad pública.

          // Item 4
          v-tab-item(value="tab-4").px-5.py-5
            v-row.pa-0
              v-col.px-3.py-0
                h4.pt-2.pb-0 ¿Qué es la Unidad Organizacional de Control Interno?
            v-row

              v-col(sm="12" md="11" lg="11")
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  div.py-5
                    p La Unidad Organizaciónal de Control Interno es la oficina encargada de asesorar y orientar la evaluación y el control de las actividades, operaciones, procesos y actuaciones de la Universidad con base en el actual Modelo estándar de Control Interno.
                v-container.pa-0.overflow-y-auto.ia-tab-container
                  v-row
                    .col-6.ia-area-gray.mb-2
                      span.px-2.py-2 1. Liderazgo Estratégico
                      div.pt-4.pb-0.pl-5
                        h4 Asesoria y Acompañamiento:
                        p Soporte   estratégico   para   la   toma   de   decisiones (Rector, Comité de Control Interno, demás unidades organizacionales)

                    .col-6.ia-area-gray.mb-2
                      span.px-2.py-2 2. Enfoque Hacia la Prevención
                      div.pt-4.pb-0.pl-5
                        h4 Fomento a la Cultura de Autocontrol:
                        p Generar conocimiento, sensibilizar en temas de control interno o recomendar mejoras significativas en torno al sistema de control interno y en particular, en la gestión del riesgo

                    .col-6.ia-area-gray.mb-2
                      span.px-2.py-2 3. Evaluación de la Gestión del Riesgo
                      div.pt-4.pb-0.pl-5
                        h4 Valoración del Riesgo:
                        p Asesoría  y   acompañamiento técnico  y   de   evaluación   y   seguimiento a las diferentes pasos de la gestión del riesgo

                    .col-6.ia-area-gray.mb-2
                      span.px-2.py-2 4. Evaluación y seguimiento a la gestión y al control
                      div.pt-4.pb-0.pl-5
                        h4 Valoración del Riesgo:
                        p Proporciona información sobre la efectividad del SCI, a través de un enfoque basado en el riesgo

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
