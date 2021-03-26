<template>
  <div class="home h-auto">
    <!-- Add Header intro component. Be cool to add some clouds or something on dark mode -->
    <Header class="h-auto"/>
    <Showcase class="h-auto my-64 z-10 relative"/>
    <!-- <MinProfile class="fixed left-4 top-48 ease-out duration-300 transition-opacity" v-if="min"/> -->
    <Profile class="fixed left-4 top-48 ease-in-out duration-300 transition-opacity" :class="[min ? 'opacity-10 z-0 overflow-hidden' : '']"/>
    <Skills class="h-auto py-24 z-10"/>
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
// import MinProfile from '@/components/MinProfile'
export default {
  name: "Home",
  data() {
    return {
      min: false
    }
  },
  components: {
    Header,
    Showcase,
    Skills,
    Profile,
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
