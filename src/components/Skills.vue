<template>
  <div class="flex flex-col items-center w-full dark:text-white text-gray-600">
      <div class="text-4xl mb-12">Skills</div>
      <div class="flex flex-row justify-around w-full">
          <div class="w-35r">Front End</div>
          <div class="w-35r">Back End</div>
          <div class="w-35r">Frameworks</div>
          <div class="w-35r">Database/Tools</div>
      </div>
      <div class="flex flex-row flex-wrap justify-around w-full">
          <Skill v-for="i in skills" :key="i" :icon="i" class="mx-4 my-6" />
      </div>

  </div>
</template>

<script>
import Skill from './Skill'
export default {
    components: {
        Skill
    },
    data() {
        return {
            skills: [
                {class: 'devicon-html5-plain-wordmark colored', proficient: true, name: 'HTML5'},
                {class: 'devicon-nodejs-plain-wordmark colored', proficient: true, name: 'NodeJS'},
                {class: 'devicon-vuejs-plain colored', proficient: true, name: 'VueJS / Nuxt'},
                {class: 'devicon-git-plain-wordmark colored', proficient: true, name: 'Git'},
                {class: 'devicon-css3-plain-wordmark colored', proficient: true, name: 'CSS3'},
                {class: 'devicon-python-plain-wordmark colored', proficient: true, name: 'Python'},
                {class: 'devicon-backbonejs-plain-wordmark colored', proficient: true, name: 'BackboneJS'},
                {class: 'devicon-mongodb-plain-wordmark colored', proficient: false, name: 'MongoDB'},
                {class: 'devicon-javascript-plain colored', proficient: true, name: 'JavaScript'},
                {class: 'devicon-java-plain-wordmark colored', proficient: false, name: 'Java'},
                {class: 'devicon-express-original-wordmark colored', proficient: true, name: 'Express'},
                {class: 'devicon-docker-plain colored', proficient: false, name: 'Docker'},
                {class: 'devicon-typescript-plain colored', proficient: false, name: 'Typescript'},
                {class: 'devicon-cplusplus-plain colored', proficient: false, name: 'C++'},
                {class: 'devicon-angularjs-plain colored', proficient: false, name: 'AngularJS'},
                {class: 'devicon-docker-plain colored', proficient: false, name: 'Docker'},
            ]
        }
    }
}
</script>

<style>

</style>