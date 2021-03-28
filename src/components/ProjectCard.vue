<template>
<div @click="open" class="group cursor-pointer h-80 2xl:w-1/4 md:w-1/3 w-full transform hover:scale-110 transition-all ease-in-out duration-700 rounded-2xl 2xl:mx-24 mx-4 shadow-2xl bg-dark">
    <div class="h-full w-full group-hover:opacity-50 rounded-2xl" :style="{ backgroundImage: 'url(' + project.img + ')', backgroundSize: 'cover', backgroundPosition: 'center'}">
    </div>
    <div class="text-3xl group-hover:opacity-100 opacity-0 transform transition-all ease-in-out duration-700 absolute dark:text-white text-gray-600">{{ project.name }}</div>
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
    methods: {
        open() {
            console.log('open!')
            this.$emit('openDetails')
        }
    }
}
</script>

<style>

</style>