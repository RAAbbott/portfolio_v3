import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
    projects: [
      {id: 0, img: '', name: 'Paktola', github: '', demo: '', description: 'Co-founded'},
      {id: 1, img: '', name: 'AirPass', github: '', demo: '', description: 'Co-founded'},
      {id: 2, img: '', name: 'Inergy Survey', github: '', demo: ''},
      {id: 3, img: '', name: 'Easy Order Manager', github: '', demo: ''},
      {id: 4, img: '', name: 'NP Script', github: 'https://github.com/RAAbbott/npScript', demo: ''},
      {id: 5, img: '', name: 'SimplyNote', github: '', demo: ''},
      {id: 6, img: '', name: 'Portfolio', github: '', demo: ''},
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
