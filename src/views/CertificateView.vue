<template>
  <div class="Judul text-sm font-extrabold">
    <h1>Certif<span class="text-yellow-400">icate</span></h1>
  </div>

  <div class="flex flex-col md:mt-10 md:grid md:grid-cols-4 gap-5">
    <div class="bestTraining">
      <img
        src="../assets/best-training-ojt.png"
        alt="Best Training Certificate"
      />

      <div class="">
        <h2 class="flex justify-center mt-5 text-sm font-black">
          Best Training Certificate
        </h2>
        <p class="text-sm md:text-base">
          Awarded for outstanding performance during the internship program,
          demonstrating strong dedication and excellent work ethic.
        </p>
      </div>
    </div>

    <div class="">
      <img src="../assets/mpk.png" alt="" />

      <div class="">
        <h2 class="flex justify-center mt-5 text-sm font-black">
          MPK Committee Certificate
        </h2>
        <p class="text-sm md:text-base">
          Presented for active participation as an MPK committee member during
          the 2023–2024 term, showing a high sense of responsibility.
        </p>
      </div>
    </div>

    <div class="">
      <img src="../assets/itec-1.png" alt="" />

      <div class="">
        <h2 class="flex justify-center mt-5 text-sm font-black">
          Deputy Head of the Software Division
        </h2>

        <p class="text-sm md:text-base">
          Awarded for dedication and contribution as the Deputy Head of the
          Software Division in the school organization for the academic year
          2023–2024.
        </p>
      </div>
    </div>

    <div class="">
      <img src="../assets/webdev-app-cashier.png" alt="" />

      <div class="">
        <h2 class="flex justify-center mt-5 text-sm font-black">
          ABS Web Development Innovation Certificate
        </h2>

        <p class="text-sm md:text-base">
          Awarded for outstanding achievement in developing a web-based cashier
          system in the IT Division. Recognized as an innovative and impactful
          project.
        </p>
      </div>
    </div>

    <div class="">
      <img src="../assets/participant.png" alt="" />

      <div class="">
        <h2 class="flex justify-center mt-5 text-sm font-black">
          Workshop Participation Certificate
        </h2>

        <p class="text-sm md:text-base">
          Presented as recognition for active participation in the DIMENSI Vol.1
          workshop, demonstrating strong enthusiasm and eagerness to learn.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Title Underline  */
.Judul h1 {
  padding-bottom: 20px;
  margin: 20px;
  position: relative;
}

.Judul h1::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 150px;
  height: 1px;
  background-color: #000;
  left: calc(5% - 20px);
}

.Judul h1::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 50px;
  height: 4px;
  background-color: #ffcf50;
  left: calc(9% - 20px);
}

@media screen and (max-width: 400px) {
  /* Title Underline  */
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
    width: 150px;
    height: 1px;
    background-color: #000;
    left: calc(50% - 60px);
  }

  .Judul h1::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    width: 50px;
    height: 4px;
    background-color: #ffcf50;
    left: calc(50% - 20px);
  }
}
</style>
