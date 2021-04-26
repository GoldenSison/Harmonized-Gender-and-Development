import Vue from 'vue'
import Vuex from 'vuex'
const clean_quiz1 = ()=>({
  '1':"",
  '1.1':"",
  '1.2':"",
  '2':"",
  '3':"",
  '3.1':"",
  '3.2':"",
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz1:{
      '1':"",
      '1.1':"",
      '1.2':"",
      '2':"",
      '3':"",
      '3.1':"",
      '3.2':"",
    }
  },
  mutations: {
    reset_quiz1:function(state){
      state.quiz1 = clean_quiz1(); 
    },
    set_item_answer:function(state,payload){

    } 
  },
  actions: {
  },
  modules: {
  }
})
