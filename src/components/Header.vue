<template>
    <div>
        <div class='md:text-8xl text-6xl dark:text-white text-gray-600 mx-auto md:mt-24 mt-12'>Hi, I'm Alex</div> 
        <!-- <div class="text-5xl"><span class="text-red-600 dark:text-red-400 opacity-50 transition-all duration-300 ease-in-out">{{ sub[index] }}</span></div> -->
        <!-- <Profile class="absolute left-4 top-48"/> -->
    </div>
</template>

<script>
// import Profile from './Profile'
export default {
    name: 'Header',
    components: {
        // Profile
    },
    data() {
        return {
            index: 0,
            sub: ['Software Engineer', 'Entrepenuer', 'Full Stack', 'Experienced']
        }
    },

    created() {
        setInterval(() => {
            this.index = this.index === this.sub.length - 1 ? 0 : this.index + 1
        }, 1000);
    }
}
</script>

<style>

</style>