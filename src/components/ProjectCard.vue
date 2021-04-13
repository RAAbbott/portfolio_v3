<template>
<div @click="open" class="group cursor-pointer h-80 transform hover:scale-110 transition-all ease-in-out duration-700 rounded-2xl shadow-2xl bg-dark w-1/3">
    <div class="w-full h-full group-hover:opacity-30 rounded-2xl" :style="{ backgroundImage: 'url(' + project.img + ')', backgroundSize: 'cover', backgroundPosition: 'center'}">
    </div>
    <div class="rounded-2xl text-white px-48 absolute bottom-0 flex flex-row justify-between items-center group-hover:opacity-100 opacity-0">
        <div >Visit Site</div>
        <div >GitHub</div>
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