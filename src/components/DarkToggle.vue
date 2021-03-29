<template>
    <div class="flex flex-row justify-center">
        <img src="../assets/sun_white.png" alt="" class="h-8 w-8 mr-4 z-100" v-if="darkMode">
        <img src="../assets/sun_dark.png" alt="" class="h-8 w-8 mr-4 z-100" v-else>
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

        <img src="../assets/moon_white.png" alt="" class="h-7 w-7 ml-4 z-100" v-if="darkMode">
        <img src="../assets/moon_dark.png" alt="" class="h-7 w-7 ml-4 z-100" v-else>
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