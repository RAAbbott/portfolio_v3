import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
    projects: [
      {id: 0, img: '', name: '', github: '', demo: ''},
      {id: 1, img: '', name: '', github: '', demo: ''},
      {id: 2, img: '', name: '', github: '', demo: ''},
      {id: 3, img: '', name: '', github: '', demo: ''},
      {id: 4, img: '', name: '', github: '', demo: ''},
      {id: 5, img: '', name: '', github: '', demo: ''},
    ]
  },
  getters: {
    darkMode: (state) => state.darkMode
  },
  mutations: {
    changeMode: (state) => state.darkMode = !state.darkMode
  },
  actions: {},
  modules: {},
});
