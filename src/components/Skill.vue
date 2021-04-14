<template>
  <div class="group h-24 w-auto text-white rounded-3xl dark:hover:bg-dark dark:bg-gray-100 hover:bg-dark shadow-2xl px-12 py-6 relative transform transition-all ease-in-out duration-200">
    <div class="min-w-full min-h-full group-hover:opacity-10 transform transition-all ease-in-out duration-200">
      <i :class="icon.class" class="icons"></i>
    </div>
    <div class="absolute cursor-default inset-10 text-white text-2xl font-bold opacity-0 transform transition-all ease-in-out duration-200 group-hover:opacity-100">
      {{icon.name}}
    </div>
  </div>
</template>

<script>
export default {
    name: "Skills",
    props: ['icon'],
    data() {
      return {
      }
    }
}
</script>

<style>
.icons {
  font-size: 3.5rem;
}
</style>