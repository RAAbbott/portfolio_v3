<template>
  <div class="flex flex-col h-auto justify-center flex-wrap w-full">
      <div class="text-4xl w-full dark:text-white text-gray-600 mb-12">Projects</div>
      <div v-for="proj in projects" :key="proj.id" class="mx-24 my-24 w-full flex flex-row">
          <ProjectCard  @openDetails="showModal(proj)" :project="proj"/>
          <div class="dark:text-white text-gray-600 font-medium my-4 p-24 mx-auto">
              <div class="text-2xl">{{ proj.name }}</div>
              <div class="text-base">
                  {{ proj.description }}
              </div>
              <div class="text-base flex flex-row flex-nowrap">
                  <div v-for="item in proj.tech" :key=item>

                  </div>
              </div>
          </div>
      </div>
    
      <div class="fixed z-10 inset-0 overflow-y-auto" v-if="modal">
        <div
            class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
            >

            <div
            class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-1/2 w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            >
            <div class="bg-white px-5 pt-5 pb-4 sm:p-6 sm:pb-4 mx-auto">
                <div class="sm:flex sm:items-start sm:flex-col">
                <div class="mt-0 sm:ml-4 sm:text-left">
                    <slot>
                    <h3
                        class="text-xl leading-6 font-bold text-gray-600"
                        id="modal-headline"
                    >
                        {{project.name}}
                    </h3>
                    <div class="mt-2 py-4 px-4">
                        <p class="text-base text-gray-600">
                        {{project.description}}
                        </p>
                    </div>
                    <div class="my-2 flex flex-row justify-center items-center">
                        <a v-if="project.demo" :href="project.demo" target="_blank" class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Visit Site
                        </a>
                        <a v-if="project.github" :href="project.github" target="_blank" class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Github
                        </a>
                    </div>
                    </slot>
                </div>
                </div>
            </div>
            <div class="bg-white px-4 py-2 sm:px-6 sm:flex sm:flex-row justify-end">
                <button @click="modal = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Close
                </button>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'
import {mapState} from 'vuex'
export default {
    name: "Showcase",
    data() {
        return {
            modal: false,
            project: {}
        }
    },
    methods: {
        showModal(project) {
            console.log(this.project)
            this.project = project
            this.modal = true
        }
    },
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