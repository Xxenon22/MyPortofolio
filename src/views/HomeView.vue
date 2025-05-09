<script setup>
import Background from "../background.vue";
import AboutMeView from "./AboutMeView.vue";
import SkillView from "./SkillView.vue";
import PortofolioView from "./PortofolioView.vue";
import CertificateView from "./CertificateView.vue";
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="relative min-h-screen grid-rows-4">
    <Background />

    <!-- Navbar Section -->
    <section class="navbar">
      <div
        class="nav p-5 flex md:justify-end items-center md:bg-white/80 md:backdrop-contrast-80"
      >
        <!-- Humburger menu -->
        <Icon
          icon="noto:hamburger"
          class="humburger"
          width="25"
          @click="toggleMenu"
        ></Icon>

        <!-- Desktop Nav -->
        <ul class="hidden md:flex space-x-6 font-bold">
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutMe">About Me</a></li>
          <li><a href="#skill">Skill's</a></li>
          <li><a href="#portofolio">Portofolio</a></li>
          <li><a href="#certificate">Certificate</a></li>
        </ul>
      </div>

      <!-- Mobile menu overlay -->
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 backdrop-blur-xs z-40"
        @click="toggleMenu"
      ></div>

      <!-- Mobile sidebar menu -->
      <div
        :class="isMenuOpen ? 'translate-x-0' : '-translate-x-full'"
        class="sideBar fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 ease-in-out p-6 md:hidden bg-yellow-400/30 backdrop-blur-50"
      >
        <ul class="flex flex-col space-y-6 text-2xl m-5">
          <li><a href="#home" @click="toggleMenu">Home</a></li>
          <li><a href="#aboutMe" @click="toggleMenu">About Me</a></li>
          <li><a href="#skill" @click="toggleMenu">Skill's</a></li>
          <li><a href="#portofolio" @click="toggleMenu">Portofolio</a></li>
          <li><a href="#certificate" @click="toggleMenu">Certificate</a></li>
        </ul>
      </div>
    </section>

    <!-- Home Content Section -->
    <section class="homeContent grid gap-5 px-6 md:px-20 py-10" id="home">
      <div class="home p-6 mt-25">
        <div class="text-sm font-bold">
          <h1>Hi! I'm Giga Ananta</h1>
        </div>
        <div class="text-xl font-bold">
          <h1>
            I'M <span class="text-yellow-400">FRONTEND</span> <br />
            <span class="text-yellow-400">DEVELOPER</span>
          </h1>
        </div>
        <div class="mt-5">
          <p>
            A Front-End Developer who is passionate <br />
            about building interactive and engaging web experiences.
          </p>
        </div>

        <!-- Social Media Icons -->
        <div class="flex gap-4 mt-6">
          <div
            class="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-yellow-400 hover:text-white hover:cursor-pointer transition"
          >
            <a href="https://www.instagram.com/giga_aja/"
              ><Icon icon="mdi:instagram" class="text-black"></Icon
            ></a>
          </div>

          <div
            class="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-yellow-400 hover:text-white hover:cursor-pointer transition"
          >
            <a
              href="https://www.linkedin.com/in/giga-felicia-ananta-599587302?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <Icon icon="mdi:linkedin" class="text-black"></Icon>
            </a>
          </div>

          <div
            class="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
          >
            <a href="https://github.com/Xxenon22">
              <Icon icon="mdi:github" class="text-black"></Icon>
            </a>
          </div>

          <div
            class="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
          >
            <a href="mailto:gigaananta2007@gmail.com">
              <Icon icon="mdi:gmail" class="text-black"></Icon>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Me -->
    <section class="AboutMe grid gap-5 px-6 md:px-20 py-5" id="aboutMe">
      <div class="aboutMe p-6 mt-25">
        <AboutMeView />
      </div>
    </section>

    <!-- Skills -->
    <section class="Skill grid gap-5 px-6 md:px-20 py-5" id="skill">
      <div class="Skills p-6 mt-25">
        <SkillView />
      </div>
    </section>

    <section class="Portofolio grid gap-5 px-6 md:px-20 py-5" id="portofolio">
      <div class="Porto p-6 mt-25">
        <PortofolioView />
      </div>
    </section>

    <section class="Certificate grid gap-5 px-6 md:px-20 py-5" id="certificate">
      <div class="certif p-6 mt-25">
        <CertificateView />
      </div>
    </section>
  </div>

  <footer class="bg-gray-500 text-white py-6 mt-16">
    <div class="mx-4 md:max-w-6xl md:mx-auto">
      <p>&copy; 2025. Giga Ananta. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
.nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%; /* ✅ gunakan satuan % */
  z-index: 50; /* ✅ pastikan navbar di atas konten lain */
}

.nav .humburger {
  display: none;
}

.nav a {
  position: relative;
  padding-bottom: 20px;
  margin: 20px;
  font-weight: bold;
  color: black;
}

/* Title Underline  */
.nav a:hover::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 120px;
  height: 1px;
  background-color: #000;
  left: calc(50% - 60px);
}

.nav a:hover::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 45px;
  height: 4px;
  background-color: #ffcf50;
  left: calc(50% - 20px);
}

.nav a {
  transition: 0.3s;
}
@media screen and (max-width: 768px) {
  .sideBar a {
    color: black;
    font-weight: 800;
  }

  .nav {
    background: none;
    opacity: 100%;
  }

  .nav .humburger {
    display: block;
  }

  .home h1 {
    font-size: 50px;
  }

  .home p {
    font-size: smaller;
  }
}
</style>
