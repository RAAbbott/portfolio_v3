<template>
<div class="dark:text-white text-gray-600">
    <div class="text-4xl mb-4">Skills</div>
    <div class="mx-auto mb-12">
        <span><img src="../assets/star.png" alt="" class="h-4 mb-1 inline"> = Proficient</span>
    </div>
      <div class="flex md:flex-row flex-col justify-around w-full flex-wrap">
      
      <!-- <div class="flex flex-col w-full">
          <div class="w-35r">Front End</div>
          <div class="w-35r">Back End</div>
          <div class="w-35r">Frameworks</div>
          <div class="w-35r">Database/Tools</div>
      </div> -->
      <div class="2xl:w-1/4 sm:w-40r w-full mx-auto">
          <div class="w-auto mx-auto text-xl">Front End</div>
          <!-- <Skill v-for="i in front" :key="i" :icon="i" class="mx-4 my-6" /> -->
          <Skill :icons="front" class="mx-4 my-6" />
      </div>
      <div class="2xl:w-1/4 md:mt-0 mt-20 sm:w-40r w-full mx-auto">
          <div class="w-auto mx-auto text-xl">Back End</div>
          <Skill :icons="back" class="mx-4 my-6" />
          <!-- <Skill v-for="i in back" :key="i" :icon="i" class="mx-4 my-6" /> -->
      </div>
      <div class="2xl:w-1/4 2xl:mt-0 mt-20 sm:w-40r w-full mx-auto">
          <div class="w-auto mx-auto text-xl">Frameworks</div>
          <Skill :icons="frame" class="mx-4 my-6" />
          <!-- <Skill v-for="i in frame" :key="i" :icon="i" class="mx-4 my-6" /> -->
      </div>
      <div class="2xl:w-1/4 2xl:mt-0 mt-20 sm:w-40r w-full mx-auto">
          <div class="w-auto mx-auto text-xl">Database/Tools</div>
          <Skill :icons="tools" class="mx-4 my-6" />
          <!-- <Skill v-for="i in tools" :key="i" :icon="i" class="mx-4 my-6" /> -->
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
                {class: 'devicon-vuejs-plain colored', proficient: true, name: 'VueJS/Nuxt'},
                {class: 'devicon-backbonejs-plain-wordmark colored', proficient: true, name: 'BackboneJS'},
                {class: 'devicon-express-original-wordmark colored', proficient: true, name: 'Express'},
                {img: 'tail.svg', proficient: true, name: 'TailwindCSS'},
                {class: 'devicon-angularjs-plain colored', proficient: false, name: 'AngularJS'},
            ],
            tools: [
                {class: 'devicon-mongodb-plain-wordmark colored', proficient: false, name: 'MongoDB'},
                {class: 'devicon-git-plain-wordmark colored', proficient: true, name: 'Git'},
                {class: 'devicon-xd-plain colored', proficient: true, name: 'Adobe XD'},
                {class: 'devicon-linux-plain colored', proficient: false, name: 'Linux'},
                // {class: 'devicon-docker-plain colored', proficient: false, name: 'Docker'},
                {class: 'devicon-firebase-plain-wordmark colored', proficient: true, name: 'Firebase'},
            ],
        }
    }
}
</script>

<style>

</style>