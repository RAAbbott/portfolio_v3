<template>
  <div class="flex flex-col justify-between items-center h-96 lg:w-60r w-screen dark:text-gray-600 text-white rounded-3xl dark:bg-gray-100 bg-dark shadow-2xl px-12 py-6">
      <img class="w-28 h-28 rounded-full" src="../assets/profile.jpeg" alt="Profile picture">
      <div class="mt-4 text-xl">Alex Abbott</div>
      <div class="flex flex-row justify-between items-center my-8">
        <a href="https://github.com/RAAbbott" target="_blank" title="View My GitHub" class="mx-5 cursor-pointer transform hover:scale-125 transition-all ease-in-out duration-700"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a>
        <a href="https://www.linkedin.com/in/raabbott/" target="_blank" title="Visit My LinkedIn" class="mx-5 cursor-pointer transform hover:scale-125 transition-all ease-in-out duration-700"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
        <a href="https://github.com/RAAbbott/portfolio_V3/raw/master/resumeRAA.pdf" download="robertAbbottResume.pdf" class="mx-5 cursor-pointer" title="Download My Resume"><i class="fa fa-file-text fa-3x transform hover:scale-125 transition-all ease-in-out duration-700" aria-hidden="true"></i></a>
        <a href="mailto:aabbott.business@gmail.com" target="_blank" title="Shoot Me An Email" class="mx-5 cursor-pointer transform hover:scale-125 transition-all ease-in-out duration-700"><i class="fa fa-envelope fa-3x" aria-hidden="true"></i></a>
      </div>
      <!-- <div class="px-12 text-sm">
        I got my first taste of programming through HTML and CSS back in 2018, and I have been improving my skills ever since! Shortly after starting with programming, I landed a development internship at the Church of Jesus Christ of Latter-day Saints working on a SAAS. Immediately after the internship ended I took the skills I learned and got a full-time job as a Software Engineer at Henry Schein One working on Dentrix Ascend, a cloud-based dental practice software. I am currently doing everything I can to improve my skills as a programmer and further my career as a Software Engineer. Some of my other hobbies include songwriting and music production, spending time with my family, and learning about new and unfamiliar things. If you'd like to get in touch, you can reach me at <a href="mailto:a.abbott2596@gmail.com">a.abbott2596@gmail.com</a>.
      </div> -->
      <div class="px-12 mb-6">
        Full Stack Engineer, UX/UI Enthusiast, Entrepenuer, Team Player, Gets the job done.
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