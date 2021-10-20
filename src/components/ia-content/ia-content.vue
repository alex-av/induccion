<template lang="pug">
  section.ia-container-content
    // Content Head
    content-head-title(
        :transition="transicion",
        :currentitle="tituloModulo",
        :nextitle="tituloSiguiente",
        :eventgonext="ir_siguiente"
    )

    // Content tabs
    content-head-tabs(
        :info="coursedata",
        :sectionnumber="sectionnumber",
        :currentsubmenuindex="submenuItemNumber"
        )

    // Content slider
    content-head-slider
        v-slider(
        height=0,
        tick-size=0,
        dense=true,
        :track-color="sliderpaneloptions.ia_fondo_barra",
        track-fill-color="#42CB86",
        thumb-color="#fff",
        thumb-label=false,
        thumb-size=40,
        v-model="sliderpaneloptions.offsetTop",
        :max="sliderpaneloptions.valormaxslider",
        @focus="insertar"
        @change="goto"
        )
    //Contenido general
    section.ia-content-body--container.ia-padding-x-40.ia-padding-b-40#scroll-target(ref="scrollcontainer")
        v-container
            template
                // Prueba de scroll button(ref="boton", @click="goto", v-scroll:#scroll-target) PROBANDO
                v-lazy( v-model="isActive", :options="{ threshold: .1 }", transition="slide-x-transition" )
                  v-row.ia-content-body--container__scrolled(
                    v-scroll:#scroll-target="onScroll",
                    v-scroll="onScroll",
                    ref="scrollpanel"
                    )
                    v-col
                      div.ia-content-body--module(v-for="modulo, index in info[seccion].modules", :key="index.id")

                        template(v-if="modulo.id === 10 && modulo.uservisible")
                            div.py-4
                                lineaDeTiempo
                        template(v-else-if="modulo.id === 11 && modulo.uservisible")
                          // Símbolos
                          div.py-4
                            menu-tab
                        template(v-else-if="modulo.id === 17 && modulo.uservisible")
                          // Directivas
                          div
                            menu-tab-directivos
                        template(v-else-if="modulo.id === 197 && modulo.uservisible")
                          div.pt-8
                            // { Organigrama de procesos }
                            ia-card-composer
                        template(v-else-if="modulo.id === 111 && modulo.uservisible")
                          div
                            // { AQUÍ VA EL RECURSO ID 17 FLIPPING CARD }
                            flipping-card(
                                justify="center",
                                imgFrontal="https://cdn-univirtual.utp.edu.co/img/induccion/assets/front.png",
                                imgPosterior="https://cdn-univirtual.utp.edu.co/img/induccion/assets/back.png",
                                textoColorF="rgb(255, 252, 219)",
                                textoColorB="#1e252d",
                                sizeTextoB="0.9em",
                                sizeTextoF="1.3em",
                                fondoColorB="#ffeaa4",
                                fondoB="auto",
                                bgpB="center 87%",
                                :cards="M1FCData"
                            )
                        template(v-else-if="modulo.id === 21 && modulo.uservisible")
                          div
                        // MODAL
                        template(v-else-if="modulo.id === 199 && modulo.uservisible")
                          div
                            introductorioM1(url="https://www.youtube.com/embed/BP6FP7PGdZ8", title="Bienvenidos: Introducción Módulo 1")
                        // MÓDULO 2
                        template(v-else-if="modulo.id === 118 && modulo.uservisible")
                          flippingCard(
                                justify="center",
                                imgFrontal="https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/front.png",
                                imgPosterior="https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/back.svg",
                                textoColorF="rgb(255, 252, 219)",
                                textoColorB="#1e252d",
                                sizeTextoB="1em",
                                sizeTextoF="1.3em",
                                fondoColorB="#c4e9ff",
                                fondoB="20% auto",
                                bgpB="center bottom",
                                :cards="M2FCData"
                          )
                        // -> Etiqueta Flipping Cards
                        template(v-else-if="modulo.id === 207 && modulo.uservisible")
                          flippingCard(
                                justify="center",
                                imgFrontal="https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/front.png",
                                imgPosterior="https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/back.svg",
                                textoColorF="rgb(255, 252, 219)",
                                textoColorB="#1e252d",
                                sizeTextoB="1em",
                                sizeTextoF="1.3em",
                                fondoColorB="#c4e9ff",
                                fondoB="20% auto",
                                bgpB="center bottom",
                                :cards="M2FC1Data"
                          )
                        // -> Etiqueta modal, Política Ambiental
                        template(v-else-if="modulo.id === 31 && modulo.uservisible")

                          etiqueta-modal(
                            :data="modulo.description",
                            :styles="{ position: 'absolute', left:'1.6em', bottom:'1em' }",
                            boton="Ver política ambiental")
                            div(slot="modal-contenido").ia-block
                              img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/politicaambiental.png", alt="Política Ambiental")

                        // -> Conoce más sobre la política ambiental
                        template(v-else-if="modulo.id === 33 && modulo.uservisible")
                          etiqueta-general(:data="modulo.description")

                        // -> Imagen personal
                        template(v-else-if="modulo.id === 204 && modulo.uservisible")
                          etiqueta-modal(
                          :data="modulo.description",
                          :styles="{ position: 'absolute', left:'1.6em', bottom:'1em' }",
                          boton="ampliar",
                          :width="'80%'",
                          :imageclick="true")
                            div(slot="modal-contenido").ia-block
                              img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/infografia-m2-imagen-10.jpg", alt="Política Ambiental")

                        // -> Comité de convivencia
                        template(v-else-if="modulo.id === 50 && modulo.uservisible")
                          etiqueta-modal(
                          :data="modulo.description",
                          :styles="{ position: 'absolute', marginLeft:'2em', bottom:'14em' }",
                          boton="ampliar",
                          :width="'75%'",
                          :imageclick="true")
                            div(slot="modal-contenido").ia-block
                              img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/quienes.svg", alt="Política Ambiental")

                        // -> infografía sobre el acoso laboral ID 52
                        template(v-else-if="modulo.id === 52 && modulo.uservisible")
                         etiqueta-modal(
                          :data="modulo.description",
                          :styles="{ position: 'absolute', marginLeft:'42%', bottom:'0em' }",
                          boton="ampliar",
                          :width="'70%'",
                          :imageclick="true")
                            div(slot="modal-contenido").ia-block
                              img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/acoso-ampliada.png", alt="Infografía sobre el acoso laboral")

                        // -> Marco legal de control interno
                        template(v-else-if="modulo.id === 205 && modulo.uservisible")
                         etiqueta-modal(
                          :data="modulo.description",
                          :styles="{ position: 'absolute', marginLeft:'42%', bottom:'1.8em' }",
                          boton="ampliar",
                          :width="'80%'",
                          :imageclick="true")
                            div(slot="modal-contenido").ia-block
                              img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo2/control.png", alt="Infografía sobre el acoso laboral")

                        // -> Que contiene el plan de desarrollo
                        template(v-else-if="modulo.id===138 && modulo.uservisible")
                         etiqueta-modal(
                           :data="modulo.description",
                           :styles="{position: 'abosolute', marginLeft: '42%', bottom:'1.8em'}",
                           boton="ampliar",
                           :width="'80%'",
                           :imageclick="true")
                             div(slot="modal-contenido").ia-block
                                img(src="https://cdn-univirtual.utp.edu.co/img/induccion/modulo4/alcances.png", alt="Alcances ")

                        // -> Menú lateral, fines y postulados del código de integridad módulo 2
                        template(v-else-if="modulo.id === 112 && modulo.uservisible")
                          div
                            menulateral
                        // -> Menú lateral, fines y postulados del código de integridad módulo 2
                        template(v-else-if="modulo.id === 40 && modulo.uservisible")
                          div
                           mlpostulados
                        // -> Menú pestañas, Control Interno de Gestión módulo 2
                        template(v-else-if="modulo.id === 163 && modulo.uservisible")
                          div
                           mpcontrolinterno
                        // MODAL INTRODUCTORIO
                        template(v-else-if="modulo.id === 200 && modulo.uservisible")
                          introductorioM1(url="https://www.youtube.com/embed/hBxdp8W4b48",title="Bienvenidos: Introducción Módulo 2")
                        // -> MÓDULO 3
                        // FLIPPING CARD
                        template(v-else-if="modulo.id === 61 && modulo.uservisible")
                            flipping-card(
                                justify="center",
                                imgFrontal="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/front.png",
                                imgPosterior="https://cdn-univirtual.utp.edu.co/img/induccion/modulo3/back.svg",
                                textoColorF="rgb(255, 252, 219)",
                                textoColorB="#1e252d",
                                sizeTextoB="1em",
                                sizeTextoF="1.3em",
                                fondoColorB="#cac8fb",
                                fondoB="20% auto",
                                bgpB="center 87%",
                                :cards="M3FCData"
                            )
                        // Áreas internas del trabajo
                        template(v-else-if="modulo.id === 123 && modulo.uservisible")
                          areas(
                            :data="modulo.description")
                        // Proyecto educativo institucional
                        template(v-else-if="modulo.id===86 && modulo.uservisible")
                          areas1(
                            :data="modulo.description")
                        // Sistema de gestión integral
                        template(v-else-if="modulo.id===144 && modulo.uservisible")
                          areas2(
                            :data="modulo.description")
                        // Servicios Biblioteca
                        template(v-else-if="modulo.id === 169 && modulo.uservisible")
                          areas3(
                            :data="modulo.description")
                        // Rutas de Interés
                        template(v-else-if="modulo.id === 127 && modulo.uservisible")
                          rutas(
                            :data="modulo.description")
                        // Gestión de actos administrativos
                        template(v-else-if="modulo.id === 102 && modulo.uservisible")
                          div
                            mppermisos
                        // Zonas deportivas
                        template(v-else-if="modulo.id === 172 && modulo.uservisible")
                          div
                            zonas
                        // Si existe la actividad se muestra
                        template(v-else-if="modulo.modname === 'quiz' && modulo.uservisible")
                            // si la actividad no ha sido completadad y superada no se muestra
                            div(v-if="modulo.completiondata.state != 2")
                                div(v-html="modulo.description")
                                // modal donde se a a mostrar la actividad
                                <v-dialog v-model="dialogAttempt_ids[modulo.id]" persistent overlay-color="#fff" overlay-opacity="0.85" content-class="modal-actividad">
                                  template(v-slot:activator="{ on }")
                                    // boton para abrir el modal y llama a la función callAttemptActivity enviandole la instancia y el modulo id
                                    <v-btn small color="primary" v-on="on" @click="callAttemptActivity(modulo.instance, modulo.id)">Realizar Actividad</v-btn>
                                  //contenido del modal
                                  v-card
                                    v-toolbar(color="#fff", flat)
                                      // titulo del modal
                                      v-toolbar-title.titulo-actividad
                                          h2 {{ modulo.name }}
                                      // icono de cerrar modal y llama a la funcion closeAttemptActivity con el modulo id
                                      v-btn(icon color="#00b893" @click="closeAttemptActivity(modulo.id)").boton-cerrar-actividad
                                        v-icon mdi-close
                                      v-spacer
                                    v-card-text
                                      // cuerpo
                                      div.text
                                        // si hay una respuesta del intento
                                        template(v-if="submittedAttemptResponse")
                                          // Aca se muestra el puntaje que obtuvo con el intento esta parte debe tener mejores estilos
                                          v-toolbar-title.actividad-puntaje 
                                            span.tu-puntaje Tu puntaje
                                            div.valor-nota {{ submittedAttemptResponse.grade }}
                                          // si el puntaje es menor que 4 se muestra el boton repetir
                                          template(v-if="submittedAttemptResponse.grade < 4")
                                            div.feedback.actividad-repetir 
                                                div.aviso
                                                    v-icon(left) mdi-emoticon-sad-outline  
                                                    span No aprobaste
                                                    p.aviso-frase Recuerda que tu puntaje debe ser 4 o superior para seguir avanzando
                                            v-btn(@click="callAttemptActivity(modulo.instance, modulo.id)", color="#FF4B68").repetir repetir
                                          // si es mayor que 4 se muestra el resumen, no se si esto se va a cambiar (creo que si)
                                          template(v-else)
                                            div(v-for="question in submittedAttemptResponse.questions")
                                              div.feedback.actividad-aprobada 
                                                  div.aviso.activadorPosicion
                                                      v-icon(left) mdi-emoticon-outline
                                                      span Aprobaste
                                                      p.aviso-frase ¡ Muy Bien ! Aprobaste puedes seguir viendo el contenido
                                              div(v-html="question.html")
                                            v-btn(icon dark @click="closeAttemptActivity(modulo.id)")
                                        // si no se ha resivido respuesta, preguntamos si hay preguntas, si las hay se muestran
                                        template(v-else-if="attempt.questions && flag == 1")
                                          form(
                                          :id="'quiz_' + attempt.attempt.quiz + '_page_'"
                                          @submit="checkForm"
                                          method="POST"
                                          :data-nextpage="attempt.nextpage"
                                          :data-attemptid="attempt.attempt.id"
                                          )
                                            div(v-html="attempt.questions[0].html").env
                                            v-btn(type="submit" color="#00B893").env.siguiente Siguiente
                                        // si no hay preguntas entonces muestra el boton de enviar el formulario
                                        template(v-else-if="flag == 0")
                                          v-btn(v-on:click="sendAttempt").env.enviar
                                                <v-icon left>mdi-send</v-icon> 
                                                p Enviar

                                        template(v-else)
                                          div {{attempt.message}}
                                </v-dialog>
                        template(v-else-if="modulo.id === 201 && modulo.uservisible")
                          introductorioM1(url="https://www.youtube.com/embed/ai4UKg1IjpA",title="Bienvenidos: Introducción Módulo 3")
                        template(v-else-if="modulo.id === 206 && modulo.uservisible")
                          div
                            ia-carrusel(:items="FotosCarousel")
                        // -> MÓDULO 4

                        // Proyecto Educativo Institucional ID 86
                        template(v-else-if="modulo.id === 86 && modulo.uservisible")
                          pei(
                            :data="modulo.description")
                        template(v-else-if="modulo.id === 194 && modulo.uservisible")
                            flipping-card(
                                justify="center",
                                imgFrontal="https://cdn-univirtual.utp.edu.co/img/induccion/modulo4/front.png",
                                imgPosterior="https://cdn-univirtual.utp.edu.co/img/induccion/modulo4/back.svg",
                                textoColorF="#F9DAD4",
                                textoColorB="#1e252d",
                                sizeTextoB="0.75em",
                                sizeTextoF="1.3em",
                                fondoColorB="#fbdcd4",
                                fondoB="20% auto",
                                bgpB="center 87%",
                                :cards="M4FCData"
                            )

                        // Datos importantes
                        template(v-else-if="modulo.id === 143 && modulo.uservisible")
                          datos(
                            :data="modulo.description")

                        template(v-else-if="modulo.id === 202 && modulo.uservisible")
                          introductorioM1(url="https://www.youtube.com/embed/LVHtn7ZypB8",title="Bienvenidos: Introducción Módulo 4")
                        // Renderiza el módulo normalmente si no cumple con las condiciones anteriores
                        template(v-else)
                          template(v-if="modulo.uservisible")
                            // div modulo.id === 20 && modulo.id
                            div(v-html="modulo.description")

</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
// Main components
import contentHead from './ia-content-head/ia-content-head'
import contentHeadTitle from './ia-content-head/ia-content-head-title/ia-content-head-title'
import contentHeadTabs from './ia-content-head/ia-content-head-tabs/ia-content-head-tabs'
import contentHeadSlider from './ia-content-head/content-head-slider/content-head-slider'

import lineaDeTiempo from '@/components/recursos/linea-de-tiempo/linea-de-tiempo.vue'
import flippingCard from '@/components/recursos/flipping-card/flipping-card.vue'
import menuTab from '@/components/recursos/ia-menu-tab/menu-tab'
import iaCardModal from '@/components/recursos/ia-card-modal/ia-card-modal'
import iaCardComposer from '@/components/recursos/ia-card-modal/ia-card-modal-composer'
import introductorioM1 from '../recursos/Modulo1/ia-video/ia-video'
// --> Componentes módulo 2
import menulateral from '../recursos/Modulo2/ia-atencion-tab/menu-tab'
import etiquetaModal from '../recursos/Modulo2/ia-etiqueta-modal/ia-etiqueta-modal'
import mlpostulados from '../recursos/Modulo2/ia-postulados/menu-tab'
import mpcontrolinterno from '../recursos/Modulo2/ia-controlinterno/menu-tab'
// --> Componentes módulo 3
import mppermisos from '../recursos/Modulo3/ia-gestion/menu-tab'
import zonas from '../recursos/Modulo3/ia-zonas/menu-tab'
import areas from '../recursos/Modulo3/areas/areas'
import areas1 from '../recursos/Modulo4/areas1/areas'
import areas2 from '../recursos/Modulo4/areas2/areas'
import areas3 from '../recursos/Modulo3/areas3/areas'
import rutas from '../recursos/Modulo3/rutas/rutas'
import iaCarrusel from '../recursos/Modulo3/ia-carrusel/ia-carrusel'

// --> Componentes módulo 4
import datos from '../recursos/Modulo4/datos/datos'
import pei from '../recursos/Modulo4/Pei/datos'
// Data
import menuTabDirectivos from '../recursos/Modulo1/ia-directivos-tab/menu-tab'
import data from '../recursos/flipping-card/flipping-card_data'
// --> Data módulo 2
import datafcmd2 from '../recursos/Modulo2/m2fc1'
import datafc1md2 from '../recursos/Modulo2/m2fc1-integridad'
import etiquetaGeneral from '../recursos/Modulo2/ia-conoce-po-amb/ia-conoce'
// --> Data módulo 3
import datafcmd3 from '../recursos/Modulo3/m3fc1'
import dataCarousel from '../recursos/Modulo3/ia-carrusel/ia-carrusel_data'
// --> Data Módulo 4
import datafcmd4 from '../recursos/Modulo4/m4fc1'

// jquery
import $ from 'jquery'

export default {
  components: {
    contentHeadTitle,
    contentHeadTabs,
    contentHeadSlider,
    lineaDeTiempo,
    flippingCard,
    menuTab,
    iaCardModal,
    iaCardComposer,
    menulateral,
    etiquetaModal,
    etiquetaGeneral,
    mlpostulados,
    mpcontrolinterno,
    mppermisos,
    zonas,
    menuTabDirectivos,
    introductorioM1,
    areas,
    areas1,
    areas2,
    areas3,
    rutas,
    iaCarrusel,
    datos,
    pei
  },
  props: ['coursedata','sectionnumber'],
  data () {
    return {
        // attemptData is the date to save an attempt
        attemptData: {
            attemptid: '',
            data: [],
        },
        submenuItemNumber: 0,

      //
      flag: 1,
      // create a dialog for each attempt
      dialogAttempt_ids: [],
      userID: 0,
      // Flipping Card data
      M1FCData: data,
      // Módulo 2 data
      M2FC1Data: datafc1md2,
      M2FCData: datafcmd2,
      // Módulo 3 data
      M3FCData: datafcmd3,
      FotosCarousel: dataCarousel,
      // Modulo 4 Flipping Card Data
      M4FCData: datafcmd4,
      // v-lazy
      isActive: false,
      // Intento
      pageIntento: 0,
      // Titulos de la cabecera
      tituloModulo: '',
      tituloSiguiente: '',
 
      // Fin de los títulos de la cabecera
      transicion: true,
      sliderpaneloptions: {
        ia_fondo_barra: 'ia_fondo_barra',
        cambiardatos: 0,
        offsetTop: 0,
        valormaxslider: 1,
        testAltura: 0
      },
      is_mounted: false,
      scrolloptions: {
        target: 0, // puede ser un id '#rectoria'
        offsetTop: 0,
        options: {
          container: '#scroll-target',
          duration: 1000,
          offset: 0,
          easing: 'easeOutCubic'
        }
      }
    }
  },
  methods: {
    ...mapMutations(['cambiarseccion']),
    ...mapActions([
        'solicitarActividad',
        'mostrarIntento',
        'getAttemptInformation',
        'viewQuiz',
        'startAttempt',
        'showAttempt',
        'saveAttempt',
        'getAttemptReview',
        'verinfogeneral',
        'getQuiz',
        'getQuizes']),

    cambia (e) {
      console.log('cambia')
      this.scrolloptions.target = Number(e)
      this.goto()
    },
    /* call the attempt activity modal
     *
     *
     *@param Activity_id
     */
    async callAttemptActivity (activityId, moduloId) {
      // if there is not any attempt, then we send a new attempt
      if(!this.attempt)
        this.startAttempt({quizid: activityId, forcenew: 1})
      else if(this.attempt.attempt.quiz != activityId){ // if exist the attempt, but the user is traying to open other modal
        this.$swal({
          title: '¡Hay otro quiz en proceso!',
          showCancelButton: false,
          confirmButtonText: 'OK!'
        }).then((result) => {
          if(result.value){
            this.closeAttemptActivity(moduloId)
          }
        });
      }/*else{ // if exist the attempt and the user open the correct modal
        this.showAttempt({
          attempt:{
            id: this.attempt.attempt.id,
            currentpage: this.attempt.attempt.currentpage
          }
        })
      }*/
    },

    /* submit a page in the quiz
     */
    checkForm: function (e) {
      e.preventDefault()
      console.log(e)
      var attemptId = $('#' + e.target.id).data('attemptid')
      var nextPage = this.attempt.nextpage
      var data = $('#' + e.target.id).serializeArray()

      this.attemptData.attemptid = attemptId

      // building the object with the answers to save
      data.forEach((element) => {
        var temporal_obj= {
          name: element.name,
          value: element.value
        }
        this.attemptData.data.push(temporal_obj)
      })

      // send the information to showAttempt
      var object_to_get_nexdata_attemtp = {
        attempt: {
          id: attemptId,
          currentpage: nextPage
        }
      }
      // if the nextpage is not igual to -1 there are more page
      if (nextPage !== -1) {
        this.showAttempt(object_to_get_nexdata_attemtp)
      } else { // if the nextpage is equal to -1 we send a flag to show the last step
        this.flag = 0
      }
    },
    /* Close the dialog
     *
     *
     * @param activityId
     */
    closeAttemptActivity (activityId) {
      this.dialogAttempt_ids.splice(activityId, 1)
      this.verinfogeneral()
    },

    async getQuizInformation (quizid) {
      var quiz = await this.getQuizes(quizid)
      return quiz.grade
    },
    goto () {
      this.$vuetify.goTo(
        this.sliderpaneloptions.offsetTop,
        this.scrolloptions.options
      )
    },
    insertar () {
      console.log(this.$refs.scrollpanel.offsetHeight)
      let valorscroll = this.$refs.scrollpanel.offsetHeight
      let valorcontainer = this.$refs.scrollcontainer.offsetHeight
      this.sliderpaneloptions.valormaxslider = valorscroll - valorcontainer + 104
    },
    ir_siguiente () {
      console.log('siguiente')
    },
    onScroll (e) {
      this.sliderpaneloptions.offsetTop = e.target.scrollTop
      let valorcontainer = this.$refs.scrollcontainer.offsetHeight
      this.sliderpaneloptions.valormaxslider = e.target.scrollHeight - valorcontainer
      this.activadorPosicion(this.sliderpaneloptions.offsetTop)
    },
    activadorPosicion (top) {
      // const elem = document.getElementById('id-110')
      // console.log('El scroll va en:', top)
      // console.log('El elemento está en:', elem.offsetTop)
    },
    /* Send the attempt request
     *
     *
     *
     */
    sendAttempt () {
      this.saveAttempt(this.attemptData)
      this.flag = 1 // after sending attempt we set the flag again to 1
    },
    verinfo (posicion) {
      try {
        this.$vuetify.goTo(
          posicion,
          this.scrolloptions.options
        )
      } catch (error) {
        console.error('Se detectó un error en la ejecución de la función info : ', error)
        console.log('Debe debe existir en el contenido un elemento con id: ' + posicion)
      }
    },
    ___titulo_modulo (indice = 0) {
      if (this.modulosCabeceras) {
        this.tituloModulo = this.modulosCabeceras[indice].name
      } else {
        console.log('La sección no cuenta con encabezados principales')
      }

      // this.tituloSiguiente = this.modulosCabeceras[indice + 1].name || ''
    }
  },
  computed: {
    ...mapState([
        'info',
        'seccion',
        'modulosCabeceras',
        'intentoActual',
        'actividadInfo',
        'attempt',
        'submittedAttemptResponse']),
    seccionActual () {
      return this.seccion
    }
  },
  watch: {
    modulosCabeceras () {
      if (this.modulosCabeceras) {
        console.log('Se cargó la información en el estado info', 'desde el watcher de ia-content.vue')
        this.___titulo_modulo()
      } else {
        console.log('La cabecera no cargó')
      }
    }
  },
  created () {
    // Recibe evento desde ia-sidebar.vue
    this.$bus.$on('tabMove', (data) => {
      const {itemTarget} = data
      this.verinfo(`#${itemTarget}`)
      
    })
    this.$bus.$on('moverpanel', (data) => {
      const { nombre, elementoId, index } = data
      this.transicion = true
      this.verinfo(elementoId)
      this.___titulo_modulo(index)
      this.submenuItemNumber = index
      console.log('El index es ', index)
      console.log('Desde ia-content.vue linea 638', nombre)
    })
    // Recibe evento desde ia-sidebar.vue
    this.$bus.$on('verseccion', (data) => {
      this.cambiarseccion(data)
      // this.___titulo_modulo()
    })
  },
  mounted () {

    // this section of code is to scroll until the last section
    /*
    
    var currenturl = window.location.href.split('#')

    if(currenturl[1]){
      this.$nextTick(() => {
        setTimeout(() =>{
          this.$vuetify.goTo(
              '#' + currenturl[1],
              this.scrolloptions.options
            )
        }, 700);
      })
    }
    
    */
  },
  updated () {
  }
}
</script>

<style lang="stylus" >
@import '../../stylus/ia_variables'

// Animaciones del panel
@import './ia-content-animations'
// me traigo el header
@import './header'
// me traigo el body
@import './body'
@import 'content-responsive'
@import 'content-body/content-body-activities/content-body-activities.styl'


// Modificaciones globales
.ia-container-content
  position relative
  height 100%
.ia_fondo_barra
  background rgb(255,119,118)
  background linear-gradient(90deg, rgba(255,119,118,1) 0%, rgba(255,226,0,1) 65%, rgba(0,177,184,1) 100%) !important

.text
  font-family sans-serif
  color #757575
/*.info
  border-radius 1.5em
  color white
  font-family sans-serif
  text-align center
  width 90%*/
.no
  color white
  padding 1em
.accesshide
  color #fff0 !important
  margin-top -2em


.questionflag.editable
  opacity 0
.formulation.clearfix span
  color #757575
.v-application .v-dialog ul, .v-application .v-dialog ol
  list-style none
  margin-top 1.2em
.qtext .accesshide
  border 2px solid #7E57C2
  border-radius 0.4em
span
  font-size 1em
</style>
