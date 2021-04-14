<template>
  <div class="home h-auto w-screen">
    <!-- Add Header intro component. Be cool to add some clouds or something on dark mode -->
    <Header class="h-screen"/>
    <Showcase class="h-auto z-10 relative"/>
    <!-- <MinProfile class="fixed left-4 top-48 ease-out duration-300 transition-opacity" v-if="min"/> -->
    <Skills class="h-auto py-24 z-10 relative"/>
    <Contact class="pb-48 relative z-10"/>
    <Profile class="fixed left-1/2 xl:top-1/2 bottom-12 transform -translate-x-1/2 ease-in-out duration-700 transition-opacity" :class="[min ? 'opacity-0 z-0 overflow-hidden' : '']"/>
    <!-- Add project showcase -->
    <!-- Add proficiencies -->
    <!-- About me section -->
    <!-- contact info -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Showcase from '@/components/Showcase'
import Skills from '@/components/Skills'
import Profile from '@/components/Profile'
import Contact from '@/components/Contact'
// import MinProfile from '@/components/MinProfile'
export default {
  name: "Home",
  data() {
    return {
      min: false,
      modal: false,
    }
  },
  components: {
    Header,
    Showcase,
    Skills,
    Profile,
    Contact
    // MinProfile
  },

  methods: {
    handleScroll() {
      console.log(window.scrollY)
      this.min = window.scrollY > 350
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
