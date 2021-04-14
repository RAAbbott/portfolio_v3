<template>
<!-- <div>
    <img :src="project.img" alt="" class="cursor-pointer transform hover:scale-110 transition-all ease-in-out duration-700 rounded-2xl shadow-2xl hover:opacity-30">
</div> -->
<div class="group transform hover:scale-105 relative transition-all ease-in-out duration-700 rounded-2xl shadow-2xl bg-dark">
    <img class="w-full h-full group-hover:opacity-20 rounded-2xl" :src="project.img" v-if="project.img">
    <div class="rounded-2xl text-white xl:px-48 lg:px-12 px-8 absolute inset-0 flex flex-row justify-between items-center group-hover:opacity-100 opacity-0">
        <a v-if="project.demo" :href="project.demo" target="_blank" class="transform hover:scale-150 p-2 transition-all ease-in-out duration-700 cursor-pointer">Visit Site</a>
        <div v-else class="opacity-30 cursor-not-allowed disabled">Visit Site</div>
        <a v-if="project.github" :href="project.github" target="_blank" class="transform hover:scale-150 p-2 transition-all ease-in-out duration-700 cursor-pointer" >GitHub</a>
        <div v-else :href="project.github" target="_blank" class="opacity-30 cursor-not-allowed disabled">GitHub (Private)</div>
    </div>
</div>

</template>

<script>
export default {
    data() {
        return {
            modal: false
        }
    },
    props: ['project'],
    // methods: {
    //     open() {
    //         console.log('open!')
    //         this.$emit('openDetails')
    //     }
    // }
}
</script>

<style>

</style>