<template>
    <div class="group h-80 w-1/5 p-24 transform hover:scale-110 hover:opacity-50 transition-all ease-in-out duration-700 flex flex-col justify-center items-center rounded-2xl mx-24 shadow-2xl dark:bg-gray-100 bg-dark" :style="{ backgroundImage: 'url(' + project.img + ')', backgroundSize: 'cover', backgroundPosition: 'center'}">
        <div class="text-2xl group-hover:opacity-100 opacity-0 transform transition-all ease-in-out duration-700" :class="[[0,4,5,6].includes(project.id) ? 'text-white' : 'text-gray-600']">{{ project.name }}</div>
        <!-- <div>PNG of project with low opacity, text in middle with project name. On hover opacity changes, on click modal opens with description and links to github and demo</div> -->

    </div>
</template>

<script>
export default {
    props: ['project']

}
</script>

<style>

</style>