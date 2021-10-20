import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import utilidades from './utilities'
import $ from 'jquery'
// sweet alert
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import moodle from '@/APIMoodle/API'

Vue.use(VueSweetalert2)
Vue.use(VueRouter)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info: false,
    url: 'https://formacionunivirtual.utp.edu.co/campus',
    urlAppend: '/webservice/rest/server.php',
    actividadInfo: false,
    intentoActual: false,
    attempt: '',
    attemptException: '',
    savingResponse: '',
    infoUsuario: false,
    submittedAttemptResponse: false, // return the submitted attempt response score
    temporaltoken: '', // '5130c7625f04b84acb98b7b393bea64b',//9394057f9b4cd6eb891ab76a27c43af5
    // Utilidades tema secc
    currentUrl: '/',
    uData_: '',
    ...utilidades
  },
  mutations: {
    llenaraula (state, verinfogeneralaccion) {
      state.info = verinfogeneralaccion
      //console.log(state.tema)
    },
    lanzarIntento (state, datosobtenidos) {
      //console.log('store.js datos obtenidos', datosobtenidos)
      state.actividadInfo = datosobtenidos
      //console.log('store.js state actividad', state.actividadInfo)
    },
    renderizarIntento (state, datosobtenidos) {
      //console.log('store.js recibiendo data de la solicitud de mostrar el intento', datosobtenidos)
      state.intentoActual = datosobtenidos
      //console.log('store.js el state del intento actual es', state.intentoActual)
    },
    sendSavingResponse (state, dataJSON) {
      state.attempt = '' // we send the attempt to ''
      state.submittedAttemptResponse = dataJSON
      //console.log(dataJSON)
    },
    setAttempt (state, dataJSON) {
      state.attempt = dataJSON
    },
    cambiarseccion (state, data) {
      state.seccion = data
    },
    insertarModulosCabecera (state, modulos) {
      state.modulosCabeceras = state.modulosCabeceras.concat([modulos])
      //console.log('insertarModulosCabeceras MODULE TITLES ', state.modulosCabeceras)
    },
    resetearModulosCabecera (state) {
      state.modulosCabeceras = []
    },
    mostrarDatosUsuario (state, userData) {
      //console.log('El usuario es: ', userData)
      state.infoUsuario = userData
    }
  },
  actions: {
    // Info general del curso
    verinfogeneral: async function ({ commit, state }) {

      const datosobtenidos = await moodle.verinfogeneral(state)

      commit('llenaraula', datosobtenidos)
    },
    /* This function returns the attempt
     *
     * @param object {object attempt{int id, int currentpage}}
     * @return object attempt
     */
    showAttempt: async function ({ commit, state }, obj) { // puede ser context context.commit

        const dataJSON = await moodle.showAttempt(state,obj)

        commit('setAttempt', dataJSON)
    },

    /* This function returns the attempt information
     *
     * @param quizid
     * @return isfinished, array preventnewattemptreasons, array warnings
     */
    getAttemptInformation: async function ({ commit, state }, params) {
      const datosobtenidos = await moodle.getAttemptInformation(state, params)
      // console.log(`${query.url}?wstoken=${query.wstoken}&wsfunction=${query.wsfunction}&attemptid=${query.attemptId}&page=${query.page}&moodlewsrestformat=${query.moodlewsrestformat}`)
      commit('renderizarIntento', datosobtenidos)
    },

    /* This function returns the attempt review
     *
     * @param quizid
     * @return {int status, array warnings, optional {item, itemid}}
     */
    getAttemptReview: async function ({ commit, state }, attemptid) {
      
      const dataJSON = await moodle.getAttemptReview(state, attemptid)

      commit('sendSavingResponse', dataJSON)
    },

    /* This function returns the quiz review
     *
     * @param quizid
     * @return {int status, array warnings, optional {item, itemid}}
     */
    getQuiz: async function ({ commit, state }, quizid) {
      const dataJSON = await moodle.getQuiz(state, quizid)
      return dataJSON
    },
    /* This function returns the quiz status
     *
     * @param quizid
     * @return status, array warnings, string item, string itemid, string warningcode, string message
     */
    viewQuiz: async function ({ commit, state }, activityId) {
      const datosobtenidos = await moodle.viewQuiz(state, activityId)
      // console.log(`${query.url}?wstoken=${query.wstoken}&wsfunction=${query.wsfunction}&attemptid=${query.attemptId}&page=${query.page}&moodlewsrestformat=${query.moodlewsrestformat}`)
      commit('renderizarIntento', datosobtenidos)
    },

    /* This function stars the quiz attempt
     *
     */
    startAttempt: async function ({ commit, state, dispatch }, params) {
      const dataJSON = await moodle.startAttempt(state, params)
      dispatch('showAttempt', dataJSON)
    },

    /* This function save the current attempt
     *
     * @param attemptid
     * @return obj {int status, array warnings, string item (optional), int itemid (optional), string warningcode, string message}
     */
    saveAttempt: async function ({ commit, state, dispatch }, params) {
      
      const dataJSON = await moodle.saveAttempt(state, params)
      dispatch('getAttemptReview', params.attemptid)
      // commit('sendSavingResponse', dataJSON)
    },
    obtenerDatosUsuario: async function ({ commit, state }, userId) {
      // Hago la petición

      let url = 'https://formacionunivirtual.utp.edu.co/admin/public/obtener-informacion-usuario/'
      let Id = userId
      state.uData_ = userId
      const init = {
        method: 'GET'
      }
      try {
        const data = await fetch(`${url}${Id}`, init)
        const datos = await data.json()
        console.log(datos, "hola")
        if (datos && !datos.exception) {
          const token = datos.token
          state.temporaltoken = token
        } else {
          console.warn('Hace falta un usuario para mostrar la información')
          // Se deja un token de muestra
          state.temporaltoken = '034cfb6d62942919333b05458e833524'
        }
        commit('mostrarDatosUsuario', datos)
      } catch (error) {
        console.warn(error)
        // Llave provisional BORRAR
        state.temporaltoken = '034cfb6d62942919333b05458e833524'
      }
    }
  },
  modules: {
  }
})
