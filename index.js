import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow: false,
    datetime: '2023-06-30T11:40',
    location: null,
    name: null
  },
  getters: {
  },
  mutations: {
    changeDatetime (state, newvalue) {
      state.isShow = true
      const date = new Date()
      const year = date.getFullYear()
      let month = date.getMonth() + 1
      if (month < 10) {
        console.log('0' + month)
        month = '0' + month
      }
      let day = date.getDate()
      if (day < 10) {
        day = '0' + day
      }
      const hour = date.getHours()
      const minute = date.getMinutes()
      console.log(year + '-' + month + '-' + day + 'T' + hour + ':' + minute)
      state.datetime = newvalue
      state.location = newvalue
      state.name = newvalue
    }
  },
  actions: {
  },
  modules: {
  }
})
