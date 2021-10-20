import Vue from 'vue'

const directiva = Vue.directive('iascroll', {
  inserted: (el, binding) => {
    console.log('Insertado')
    el.addEventListener('wheel', (e) => {
      console.log(e.deltaX)
      el.style.transform = `translateX(${binding * e.deltaX})`
    }, { passive: true })
  }
})

export default directiva
