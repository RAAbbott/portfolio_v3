<template>
  <div class="h-24 w-auto text-white rounded-3xl dark:bg-gray-100 px-1 shadow-2xl py-6 relative transform transition-all ease-in-out duration-200 flex flex-row">
    <div v-for="i in icons" :key="i.name" class="mx-auto">
      <div class="min-w-full min-h-full relative" @mouseover="hover(i)" @mouseleave="leave">
        <img v-if="i.proficient" src="../assets/star.png" alt="" class="absolute h-4 -right-2 -top-2">
        <i v-if="i.class" :class="i.class" class="mx-1 icons transform hover:opacity-75 transition-all ease-in-out duration-600"></i>
        <img v-else :src="require(`../assets/${i.img}`)" alt="" class="h-12">
        <!-- <img v-else-if="i.img" :src="require(i.img)" alt="" class="h-48"> -->
      </div>
    </div>
    <div :class="[show ? 'opacity-100' : 'opacity-0']" class="absolute inset-x-0 cursor-default -bottom-10 dark:text-white text-gray-600 text-2xl font-bold transform transition-all ease-in-out duration-400">
      {{name}}
    </div>
  </div>
</template>

<script>
export default {
    name: "Skills",
    props: ['icon', 'icons'],
    data() {
      return {
        name: '',
        show: false
      }
    },

    methods: {
      hover(i) {
        this.name = i.name 
        this.show = true
      },

      leave() {
        this.show = false
      }
    }
}
</script>

<style>
.icons {
  font-size: 3.5rem;
}
</style>