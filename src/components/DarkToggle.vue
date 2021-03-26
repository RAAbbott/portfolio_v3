<template>
    <div class="flex flex-row justify-center">
        <!-- Toggle Button -->
        <label 
        for="toogleA"
        class="flex items-center cursor-pointer"
        >
            <!-- toggle -->
            <div class="relative">
                <!-- input -->
                <input id="toogleA" type="checkbox" class="hidden" v-model="darkMode" @change="changeMode"/>
                <!-- line -->
                <div
                class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                ></div>
                <!-- dot -->
                <div
                class="toggle__dot absolute w-6 h-6 dark:bg-white bg-dark rounded-full shadow -inset-y-1 left-0"
                ></div>
            </div>
            <!-- label -->
            <div
                class="ml-3 text-gray-700 font-medium"
            >
                <!-- Toggle Me! -->
            </div>
        </label>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
    computed: {
        ...mapState(['darkMode'])
    },
    methods: {
        ...mapMutations(['changeMode'])
    }
}
</script>

<style>
.toggle__dot {
    top: -.25rem;
    left: -.25rem;
    transition: all 0.3s ease-in-out;
  }
  
  input:checked ~ .toggle__dot {
    transform: translateX(80%);
  }
</style>