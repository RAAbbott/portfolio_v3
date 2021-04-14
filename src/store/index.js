import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    darkMode: true,
    projects: [
      {id: 0, img: 'https://firebasestorage.googleapis.com/v0/b/maven-34c28.appspot.com/o/Screen%20Shot%202021-04-13%20at%202.27.27%20PM.png?alt=media&token=8eb28074-175a-4934-a73a-d720887402ad', name: 'Paktola', private: true, github: '', demo: 'https://www.paktola.com', description: 'Co-founded and built a platform that allows influencers to make money and build connection through 1:1 chats with their followers. Built with N', tech: ['Vue.js', 'TailwindCSS']},
      // {id: 1, img: '', name: 'AirPass', github: 'https://github.com/RAAbbott/AirPass', demo: '', description: 'Coming soon to a site near you kjdflkjslkfjalkfjlkdj'},
      {id: 2, img: 'https://firebasestorage.googleapis.com/v0/b/maven-34c28.appspot.com/o/Screen%20Shot%202021-03-26%20at%2011.05.18%20AM.png?alt=media&token=8b17d862-2f4f-4bbd-9af5-311a1bdbc722', name: 'Inergy Survey', github: '', demo: 'https://getpwr.net/', description: 'Freelance project completed for a client that needed a simple survey application that would work in remote villages. The application was built as a PWA and distributed over a CDN for low-latency availability.'},
      {id: 3, img: 'https://firebasestorage.googleapis.com/v0/b/maven-34c28.appspot.com/o/eom2.png?alt=media&token=936b8644-d5ae-4750-9074-571db787d105', name: 'Easy Order Manager', github: 'https://github.com/RAAbbott/shopify-portal', demo: 'https://easyordermanager.netlify.app/#', description: "I built this application for my wife's shopify store to address multiple issues she had with the order fulfillment and management process. The link will take you to a demo version that displays the funcitonality and practicality of the app. I am currently in the process of submitting this to the Shopify App Store. The frontend is built using VueJS with custom styling, and the backend is built with NodeJS. The backend interacts with Shopify's REST API."},
      {id: 4, img: 'https://firebasestorage.googleapis.com/v0/b/maven-34c28.appspot.com/o/np.png?alt=media&token=d6d2f85a-8195-4d22-bb2a-31bdd4a148c3', name: 'NP Script', github: 'https://github.com/RAAbbott/npScript', demo: '', description: "The 'NP Script' is a command-line script I created to automate and fast-track the creation of new projects. It allows the user to designate a destination folder where the project will be created, specify the project type (currently there are HTML, Vue, Java, Python, Flutter, and Node project types available), and includes an option to automatically initialize a git repository locally as well as a remote on GitHub. I use this script very often and it allows me to be much more efficient with my time."},
      {id: 5, img: 'https://firebasestorage.googleapis.com/v0/b/maven-34c28.appspot.com/o/SimplyNote.PNG?alt=media&token=b18a5bd9-956b-4ee9-93f7-cc08fc278c46', name: 'SimplyNote', github: 'https://github.com/RAAbbott/notes-app', demo: 'https://raabbott.github.io/notes-app/#/notes', description: "SimplyNote is a notes app I created using Angular 7 and Bootstrap. It uses local storage to automatically save notes as you type. I am a singer-songwriter, and I created this because I haven't found any notes apps for songwriting that have given me all the features I want without being extremely bloated."},
      // {id: 6, img: '', name: 'Portfolio', github: 'https://github.com/RAAbbott/portfolio_v3', demo: 'https://admiring-sinoussi-2c958f.netlify.app', description: 'My current portfolio site'},
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
