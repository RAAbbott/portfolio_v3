<template>
  <div class="flex flex-col justify-between items-center h-auto w-96 dark:text-gray-600 text-white rounded-3xl dark:bg-gray-100 bg-dark shadow-2xl px-12 py-6">
      <img class="w-28 h-28 rounded-full" src="https://media-exp1.licdn.com/dms/image/C5603AQHT4sO7erLC3Q/profile-displayphoto-shrink_800_800/0/1552344956998?e=1622073600&v=beta&t=tqiqJ5H48cs9QYdzPXyBIIRmBeFf0r_RisJpMwEok-M" alt="Profile picture">
      <div class="mt-4">Alex Abbott</div>
      <div class="flex flex-row justify-between items-center my-12">
        <a href="https://github.com/RAAbbott" target="_blank" title="Download My Resume" class="mx-5 cursor-pointer"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/raabbott/" target="_blank" title="View My GitHub" class="mx-5 cursor-pointer"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
        <a href="" target="_blank" class="mx-5 cursor-pointer" title="Visit My LinkedIn"><i class="fa fa-file-text fa-3x" aria-hidden="true"></i></a>
        <a href="mailto:aabbott.business@gmail.com" target="_blank" title="Shoot Me An Email" class="mx-5 cursor-pointer"><i class="fa fa-envelope fa-3x" aria-hidden="true"></i></a>
      </div>
      <!-- <div class="my-12">I am a full stack software engineer</div>
      <div class="my-12">proficiency</div> -->
  </div>
</template>

<script>
export default {
    name: 'Profile'
}
</script>

<style>
/* div#test {
font-family: 'Vollkorn', serif;
  font-weight: 400;
} */
</style>