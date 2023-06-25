<template>
  <section id="aboutme" class="md:pt-24 pt-12 flex flex-col justify-start">
    <div class="md:flex-shrink-0 md:flex-grow-0 flex flex-col">
      <button
        data-aos="fade-up"
        data-aos-duration="900"
        class="custom-backdrop md:px-14 md:py-4 py-2 px-8 transition ease-in-out hover:translate-y-1 hover:translate-x-2 hover:scale-95 duration-150"
      >
        <span class="text-3xl font-black font-archivo-black">About Me</span>
      </button>
    </div>
    <div
      class="mt-14"
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="300"
    >
      <p class="text-center font-archivo-black md:text-[2.25rem] text-2xl">
        Mobile App and Web Developer, with extensive knowledge and years of
        experience, working in tech and UI/UX Design, delivering quality work
      </p>
    </div>
    <div
      data-aos="fade-up"
      data-aos-duration="900"
      data-aos-delay="300"
      class="flex md:flex-row flex-col md:justify-center md:gap-x-[5.25rem] gap-y-[1rem] md:mt-20 mt-10"
    >
      <!-- Card -->
      <div
        class="md:w-[185rem] w-full md:h-[21rem] border-2 p-[1.25rem] items-center justify-center flex flex-col custom-backdrop transition ease-in-out hover:translate-y-1 hover:translate-x-2 hover:scale-95 duration-150"
      >
        <span class="text-4xl font-archivo-black">2</span>
        <p class="text-3xl font-archivo-black text-center">
          Years<br />Experience
        </p>
      </div>

      <div
        class="md:w-[185rem] w-full md:h-[21rem] border-2 p-[1.25rem] items-center justify-center flex flex-col custom-backdrop !bg-[#746BEB] transition ease-in-out hover:translate-y-1 hover:translate-x-2 hover:scale-95 duration-150"
      >
        <span class="text-4xl font-archivo-black">4</span>
        <p class="text-3xl font-archivo-black text-center">Project<br />Done</p>
      </div>

      <div
        class="md:w-[185rem] w-full md:h-[21rem] border-2 p-[1.25rem] items-center justify-center flex flex-col custom-backdrop !bg-[#7FBC8C] transition ease-in-out hover:translate-y-1 hover:translate-x-2 hover:scale-95 duration-150"
      >
        <span class="text-4xl font-archivo-black">1</span>
        <p class="text-3xl font-archivo-black text-center">
          Company<br />Worked
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>