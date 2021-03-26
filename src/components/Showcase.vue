<template>
  <div class="flex flex-row h-auto justify-center flex-wrap">
      <ProjectCard v-for="proj in projects" :key="proj.id" class="mx-24 my-12" :project="proj"/>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
import {mapState} from 'vuex'
export default {
    name: "Showcase",
    components: {
        ProjectCard
    },

    computed: {
        ...mapState(['projects'])
    }
}
</script>

<style>

</style>