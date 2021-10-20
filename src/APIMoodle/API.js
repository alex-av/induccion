import $ from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2)
Vue.use(VueRouter)
Vue.use(Vuex)
var moodle = {
  // Info general del curso
    verinfogeneral: async function (state ) {
      console.log('EL TOKEN ES : ', state.temporaltoken)
      let url = state.url
      let query = {
        url: url + state.urlAppend,
        wstoken: state.temporaltoken,
        wsfunction: 'core_course_get_contents',
        courseid: 2,
        moodlewsrestformat: 'json'
      }
      const init = {
        method: 'POST',
        mode: 'cors'
      }
      // -> Hace el llamado a la url solicitando que ejecute una función que me muestre los cursos
      const data = await fetch(`${query.url}?wstoken=${query.wstoken}&wsfunction=${query.wsfunction}&courseid=${query.courseid}&moodlewsrestformat=${query.moodlewsrestformat}`, init)
      //console.log(`${query.url}?wstoken=${query.wstoken}&wsfunction=${query.wsfunction}&courseid=${query.courseid}&moodlewsrestformat=${query.moodlewsrestformat}`)
      const datosobtenidos = await data.json()
      return datosobtenidos
    },
    /* This function returns the attempt
     *
     * @param object {object attempt{int id, int currentpage}}
     * @return object attempt
     */
    showAttempt: async function (state, obj) { // puede ser context context.commit
      console.log(obj)
      var self = state
      Vue.nextTick( () => {
        self.attempt = ''
      })
      if (obj.exception == undefined) {
        let url = state.url + state.urlAppend + '?'
        let query = {
          wstoken: state.temporaltoken,
          wsfunction: 'mod_quiz_get_attempt_data',
          attemptid: obj.attempt.id,
          page: obj.attempt.currentpage,
          preflightdata: [],
          moodlewsrestformat: 'json'
        }
        url = url + $.param(query) // $.param() parses the data as http url exp = wstoken=token&etc...
        //console.log(url)
        // -> Muestra el quiz
        const data = await fetch(url)
        const dataJSON = await data.json()
        //console.log(dataJSON)
        return dataJSON
      } else {
        return obj
      }
    },

    /* This function returns the attempt information
     *
     * @param quizid
     * @return isfinished, array preventnewattemptreasons, array warnings
     */
    getAttemptInformation: async function (state, params) {
      let url = state.url + state.urlAppend + '?'
      let query = {
        wstoken: state.temporaltoken,
        wsfunction: 'mod_quiz_get_attempt_access_information',
        quizid: params.quizid,
        attemptid: params.attemptid,
        moodlewsrestformat: 'json'
      }
      url = url + $.param(query) // $.param() parses the data as http url exp = wstoken=token&etc...
      //console.log(url)

      // -> Muestra el quiz
      const data = await fetch(url)
      const datosobtenidos = await data.json()
      // console.log(`${query.url}?wstoken=${query.wstoken}&wsfunction=${query.wsfunction}&attemptid=${query.attemptId}&page=${query.page}&moodlewsrestformat=${query.moodlewsrestformat}`)
      return datosobtenidos
    },

    /* This function returns the attempt review
     *
     * @param quizid
     * @return {int status, array warnings, optional {item, itemid}}
     */
    getAttemptReview: async function (state, attemptid) {
      let url = state.url + state.urlAppend + '?'
      let query = {
        wstoken: state.temporaltoken,
        wsfunction: 'mod_quiz_get_attempt_review',
        attemptid: attemptid,
        moodlewsrestformat: 'json'
      }
      url = url + $.param(query) // $.param() parses the data as http url exp = wstoken=token&etc...
      //console.log(url)

      // -> Muestra el quiz
      const data = await fetch(url)
      const dataJSON = await data.json()

      // console.log(`${query.url}?wstoken=${query.wstoken}&wsfunction=${query.wsfunction}&attemptid=${query.attemptId}&page=${query.page}&moodlewsrestformat=${query.moodlewsrestformat}`)
      return dataJSON
    },

    /* This function returns the quiz review
     *
     * @param quizid
     * @return {int status, array warnings, optional {item, itemid}}
     */
    getQuiz: async function (state, quizid) {
      let url = state.url + state.urlAppend + '?'
      let query = {
        wstoken: state.temporaltoken,
        wsfunction: 'mod_quiz_get_user_best_grade',
        quizid: quizid,
        moodlewsrestformat: 'json'
      }
      url = url + $.param(query) // $.param() parses the data as http url exp = wstoken=token&etc...
      //console.log(url)

      // -> Muestra el quiz
      const data = await fetch(url)
      const dataJSON = await data.json()

      //console.log(dataJSON, quizid)
      return dataJSON
    },
    /* This function returns the quiz status
     *
     * @param quizid
     * @return status, array warnings, string item, string itemid, string warningcode, string message
     */
    viewQuiz: async function (state, activityId) {
      let url = state.url + state.urlAppend + '?'
      let query = {
        wstoken: state.temporaltoken,
        wsfunction: 'mod_quiz_view_quiz',
        quizid: activityId,
        moodlewsrestformat: 'json'
      }
      url = url + $.param(query) // $.param() parses the data as http url exp = wstoken=token&etc...
      //console.log(url)

      // -> Muestra el quiz
      const data = await fetch(url)
      const datosobtenidos = await data.json()
      // console.log(`${query.url}?wstoken=${query.wstoken}&wsfunction=${query.wsfunction}&attemptid=${query.attemptId}&page=${query.page}&moodlewsrestformat=${query.moodlewsrestformat}`)
      return datosobtenidos
    },

    /* This function stars the quiz attempt
     *
     * @param quizid
     * @return object {
                        attempt object {
                          id int  Opcional //Attempt id.
                          quiz int  Opcional //Foreign key reference to the quiz that was attempted.
                          userid int  Opcional //Foreign key reference to the user whose attempt this is.
                          attempt int  Opcional //Sequentially numbers this students attempts at this quiz.
                          uniqueid int  Opcional //Foreign key reference to the question_usage that holds the
                                                                              details of the the question_attempts that make up this quiz
                                                                              attempt.
                          layout string  Opcional //Attempt layout.
                          currentpage int  Opcional //Attempt current page.
                          preview int  Opcional //Whether is a preview attempt or not.
                          state string  Opcional //The current state of the attempts. 'inprogress',
                                                                          'overdue', 'finished' or 'abandoned'.
                          timestart int  Opcional //Time when the attempt was started.
                          timefinish int  Opcional //Time when the attempt was submitted.
                                                                              0 if the attempt has not been submitted yet.
                          timemodified int  Opcional //Last modified time.
                          timemodifiedoffline int  Opcional //Last modified time via webservices.
                          timecheckstate int  Opcional //Next time quiz cron should check attempt for
                                                                                  state changes.  NULL means never check.
                          sumgrades double  Opcional //Total marks for this attempt.
                        }
                        warnings  Opcional //list of warnings
                        list of (
                          //warning
                        object {
                        item string  Opcional //item
                        itemid int  Opcional //item id
                        warningcode string   //the warning code can be used by the client app to implement specific behaviour
                        message string   //untranslated english message to explain the warning
                      }
     */
    startAttempt: async function (state, params) {
      let url = state.url + state.urlAppend + '?'
      state.submittedAttemptResponse = false // if the user wants to repit the quiz we need to set this value to false
      let query = {
        wstoken: state.temporaltoken,
        wsfunction: 'mod_quiz_start_attempt',
        quizid: params.quizid,
        preflightdata: [],
        forcenew: params.forcenew,
        moodlewsrestformat: 'json'
      }
      url = url + $.param(query) // $.param() parses the data as http url exp = wstoken=token&etc...
      //console.log(url)

      // -> Muestra el quiz
      const data = await fetch(url)
      const dataJSON = await data.json()
      return dataJSON
    },

    /* This function save the current attempt
     *
     * @param attemptid
     * @return obj {int status, array warnings, string item (optional), int itemid (optional), string warningcode, string message}
     */
    saveAttempt: async function (state, params) {
      let url = state.url + state.urlAppend + '?'
      let query = {
        wstoken: state.temporaltoken,
        wsfunction: 'mod_quiz_process_attempt',
        attemptid: params.attemptid,
        data: params.data,
        finishattempt: 1,
        moodlewsrestformat: 'json'
      }
      url = url + $.param(query) // $.param() parses the data as http url exp = wstoken=token&etc...
      //console.log(url)

      // -> Muestra el quiz
      const data = await fetch(url)
      const dataJSON = await data.json()
      return params.attemptid
      // commit('sendSavingResponse', dataJSON)
    },
}

export default moodle
