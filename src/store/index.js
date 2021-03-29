import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
    projects: [
      {id: 0, img: 'https://firebasestorage.googleapis.com/v0/b/maven-34c28.appspot.com/o/Screen%20Shot%202021-03-26%20at%2010.14.43%20AM.png?alt=media&token=c8d2a34e-0514-4652-9895-137cfebb8d2b', name: 'Paktola', private: true, github: '', demo: 'https://www.paktola.com', description: 'Co-founded and built a platform that allows influencers to make money and build connection through 1:1 chats with their followers', tech: []},
      {id: 1, img: '', name: 'AirPass', github: 'https://github.com/RAAbbott/AirPass', demo: '', description: 'Coming soon'},
      {id: 2, img: 'https://firebasestorage.googleapis.com/v0/b/maven-34c28.appspot.com/o/Screen%20Shot%202021-03-26%20at%2011.05.18%20AM.png?alt=media&token=8b17d862-2f4f-4bbd-9af5-311a1bdbc722', name: 'Inergy Survey', github: '', demo: 'https://getpwr.net/', description: ''},
      {id: 3, img: 'https://firebasestorage.googleapis.com/v0/b/maven-34c28.appspot.com/o/eom2.png?alt=media&token=936b8644-d5ae-4750-9074-571db787d105', name: 'Easy Order Manager', github: 'https://github.com/RAAbbott/shopify-portal', demo: 'https://easyordermanager.netlify.app/#'},
      {id: 4, img: 'https://firebasestorage.googleapis.com/v0/b/maven-34c28.appspot.com/o/np.png?alt=media&token=d6d2f85a-8195-4d22-bb2a-31bdd4a148c3', name: 'NP Script', github: 'https://github.com/RAAbbott/npScript', demo: '', gif: ''},
      {id: 5, img: 'https://firebasestorage.googleapis.com/v0/b/maven-34c28.appspot.com/o/SimplyNote.PNG?alt=media&token=b18a5bd9-956b-4ee9-93f7-cc08fc278c46', name: 'SimplyNote', github: 'https://github.com/RAAbbott/notes-app', demo: 'https://raabbott.github.io/notes-app/#/notes'},
      {id: 6, img: '', name: 'Portfolio', github: 'https://github.com/RAAbbott/portfolio_v3', demo: 'https://admiring-sinoussi-2c958f.netlify.app', description: 'My current portfolio site'},
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
