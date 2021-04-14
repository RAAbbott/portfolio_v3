<template>
<div class="dark:text-white text-gray-600">
    <div class="text-4xl mb-12">Skills</div>
      <div class="flex md:flex-row flex-col justify-around w-full flex-wrap">
      
      <!-- <div class="flex flex-col w-full">
          <div class="w-35r">Front End</div>
          <div class="w-35r">Back End</div>
          <div class="w-35r">Frameworks</div>
          <div class="w-35r">Database/Tools</div>
      </div> -->
      <div class="flex flex-col justify-around md:w-1/4 w-96 mx-auto">
          <div class="w-auto mx-auto text-xl">Front End</div>
          <Skill v-for="i in front" :key="i" :icon="i" class="mx-4 my-6" />
      </div>
      <div class="flex flex-col flex-wrap justify-around md:w-1/4 md:mt-0 mt-20 w-96 mx-auto">
          <div class="w-auto mx-auto text-xl">Back End</div>
          <Skill v-for="i in back" :key="i" :icon="i" class="mx-4 my-6" />
      </div>
      <div class="flex flex-col flex-wrap justify-around md:w-1/4 md:mt-0 mt-20 w-96 mx-auto">
          <div class="w-auto mx-auto text-xl">Frameworks</div>
          <Skill v-for="i in frame" :key="i" :icon="i" class="mx-4 my-6" />
      </div>
      <div class="flex flex-col flex-wrap justify-around md:w-1/4 md:mt-0 mt-20 w-96 mx-auto">
          <div class="w-auto mx-auto text-xl">Database/Tools</div>
          <Skill v-for="i in tools" :key="i" :icon="i" class="mx-4 my-6" />
      </div>

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
            front: [
                {class: 'devicon-html5-plain-wordmark colored', proficient: true, name: 'HTML5'},
                {class: 'devicon-css3-plain-wordmark colored', proficient: true, name: 'CSS3'},
                {class: 'devicon-javascript-plain colored', proficient: true, name: 'JavaScript'},
                {class: 'devicon-typescript-plain colored', proficient: false, name: 'Typescript'},
            ],
            back: [
                {class: 'devicon-nodejs-plain-wordmark colored', proficient: true, name: 'NodeJS'},
                {class: 'devicon-python-plain-wordmark colored', proficient: true, name: 'Python'},
                {class: 'devicon-java-plain-wordmark colored', proficient: false, name: 'Java'},
                {class: 'devicon-cplusplus-plain colored', proficient: false, name: 'C++'},
            ],
            frame: [
                {class: 'devicon-vuejs-plain colored', proficient: true, name: 'VueJS / Nuxt'},
                {class: 'devicon-backbonejs-plain-wordmark colored', proficient: true, name: 'BackboneJS'},
                {class: 'devicon-express-original-wordmark colored', proficient: true, name: 'Express'},
                {class: 'devicon-angularjs-plain colored', proficient: false, name: 'AngularJS'},
            ],
            tools: [
                {class: 'devicon-mongodb-plain-wordmark colored', proficient: false, name: 'MongoDB'},
                {class: 'devicon-git-plain-wordmark colored', proficient: true, name: 'Git'},
                {class: 'devicon-xd-plain colored', proficient: true, name: 'Adobe XD'},
                {class: 'devicon-docker-plain colored', proficient: false, name: 'Docker'},
            ],
        }
    }
}
</script>

<style>

</style>