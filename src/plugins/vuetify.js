import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import es from 'vuetify/es5/locale/es'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#00B893',
        secondary: '#525E74',
        accent: '#82B1FF',
        error: '#FF4B68',
        info: '#A280FD',
        success: '#42CB86',
        warning: '#FF9F00'
      }
    }
  },
  lang: {
    locales: { es },
    current: 'es'
  }
})
