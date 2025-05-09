<template>
  <div class="Judul text-sm font-bold">
    <h1>About <span class="text-yellow-400">Me</span></h1>
  </div>

  <div class="bio mt-10 text-xl">
    <p class="m-5">
      Hi! I'm Giga, a 12th grader with 2.5 years of experience in frontend
      development. I have an interest in building modern, responsive, and
      interactive web interfaces using Vue.js, TailwindCSS, and Laravel APIs.
    </p>

    <p class="m-5">
      I enjoy exploring new technologies in web development and continue to
      learn to improve my skills. In addition, I also have experience in
      creating Tauri-based applications for desktops, as well as building
      efficient data management systems
    </p>

    <p class="m-5">
      Outside of coding, I also enjoy reading about new technologies, sharing my
      experiences through blogs, and joining developer communities to broaden my
      horizons.
    </p>

    <p class="m-5">
      I am always open to new projects and collaboration opportunities. Feel
      free to contact me!
    </p>
  </div>
</template>

<style scoped>
/* Title Underline  */
.Judul h1 {
  padding-bottom: 20px;
  /* text-align: center; */
  margin: 20px;
  position: relative;
}

.Judul h1::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 120px;
  height: 1px;
  background-color: #000;
  left: calc(3% - 0px);
}

.Judul h1::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 4px;
  background-color: #ffcf50;
  left: calc(8% - 20px);
}

@media screen and (max-width: 400px) {
  .Judul h1 {
    padding-bottom: 20px;
    text-align: center;
    margin: 20px;
    position: relative;
  }
  .Judul h1::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 120px;
    height: 1px;
    background-color: #000;
    left: calc(50% - 60px);
  }

  .Judul h1::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 40px;
    height: 4px;
    background-color: #ffcf50;
    left: calc(50% - 20px);
  }

  .bio p {
    font-size: medium;
  }
}
</style>
