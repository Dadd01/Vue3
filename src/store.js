import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:[]
  },
  mutations: {
    addList(state,obj){
          state.info.push(obj);
      }
  },
  actions: {

  },
    modules:{

    }
})
