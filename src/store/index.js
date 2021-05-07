import Vue from 'vue'
import Vuex from 'vuex'
const clean_quiz= ()=>({
  1:null,
  2:null,
  3:null,
  4:null,
  5:null,
  6:null,
  7:null,
  8:null,
  9:null,
  10:null,
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
    },
    quiz:{
      1:null,
      2:null,
      3:null,
      4:null,
      5:null,
      6:null,
      7:null,
      8:null,
      9:null,
      10:null,
    }
  },
  mutations: {
    reset_quiz:function(state){
      state.quiz= clean_quiz(); 
    },
    set_item_answer:function(state,payload){
      state[payload.quiz_name][payload.num] = payload.value;
    } 
  },
  actions: {
  },
  modules: {
  }
})
