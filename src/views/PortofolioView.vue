<script setup>
import { ref } from "vue";

// Reactive state untuk menyimpan ID konten yang sedang di-hover
const activeTab = ref(null);

// Fungsi untuk mengatur tab aktif saat gambar di-hover
const showTab = (tabId) => {
  activeTab.value = tabId;
};

// Fungsi untuk menyembunyikan tab saat mouse keluar (opsional)
const hideTab = () => {
  activeTab.value = null;
};
</script>

<template>
  <div class="Judul text-sm font-extrabold">
    <h1>Porto<span class="text-yellow-400">folio</span></h1>
  </div>

  <div class="mt-10">
    <div class="tab grid gap-6 md:gap-10">
      <!-- Project 1 -->
      <section class="flex flex-col md:flex-row items-start gap-4">
        <div class="w-full md:w-1/3">
          <img
            src="../assets/metschoo-canteen.png"
            alt="Metschoo Canteen"
            width="365"
            @mouseover="showTab('metschooCanteen')"
            @click="showTab('metschooCanteen')"
          />
        </div>
        <div
          v-if="activeTab === 'metschooCanteen'"
          class="tabContent w-full md:w-2/3 mt-2"
        >
          <h3 class="text-xl font-bold">Metschoo Canteen</h3>
          <p class="text-sm md:text-base mt-2">
            This website is my first project in web development, created using
            HTML and CSS without any additional frameworks or libraries. The
            main purpose of this website is to provide information about the
            school canteen, such as menu lists, food prices, and canteen
            operating hours. From the frontend side, I focused on a simple yet
            attractive design, with a neat layout that is easy for users to
            understand. I used pure CSS to provide a more aesthetic appearance,
            including choosing colors that match the school theme and simple
            hover effects to increase interactivity.
          </p>

          <!-- <h3 class="text-sm md:text-xl font-extrabold flex justify-end">
            <a href="" class="flex items-center"
              >See More
              <Icon
                icon="typcn:arrow-right-outline"
                class="text-yellow-400"
              ></Icon>
            </a>
          </h3> -->

          <!-- Icon -->
          <div class="flex gap-4 mt-5">
            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon icon="logos:html-5" class="w-6 h-6 md:w-13 md:h-13"></Icon>
            </div>
            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon icon="logos:css-3" class="w-6 h-6 md:w-13 md:h-13"></Icon>
            </div>

            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon
                icon="logos:javascript"
                class="w-6 h-6 md:w-12 md:h-12"
              ></Icon>
            </div>
          </div>
        </div>
      </section>

      <!-- Project 2 -->
      <section class="flex flex-col md:flex-row items-start gap-4">
        <div class="w-full md:w-1/3">
          <img
            src="../assets/bla-Project.png"
            alt="BLA Project"
            width="365"
            @mouseover="showTab('blaProject')"
            @click="showTab('blaProject')"
          />
        </div>

        <div
          v-if="activeTab === 'blaProject'"
          class="tabContent w-full md:w-2/3 mt-2"
        >
          <h3 class="text-xl font-bold">BLA Project</h3>
          <p class="text-sm md:text-base mt-2">
            I developed this application as a material data management solution
            for architectural purposes, allowing users to store, search, and
            manage various types of files in a folder-based system. This
            application is built in a fullstack manner, with the following main
            technologies: <br />🔹 Frontend: Vue.js + Bootstrap 5 <br />
            🔹 Backend: Laravel + Axios (for API communication) <br />🔹
            Database: PostgreSQL <br />
            🔹 Platform: Tauri (to make it a lightweight desktop application).
            <br />
            Frontend (Vue.js & Bootstrap 5) On the frontend side, I use Vue.js
            to build a dynamic and interactive interface. I integrate Bootstrap
            5 as a UI component library to ensure a responsive and easy-to- use
            appearance.
          </p>
          <!-- <h3 class="text-sm md:text-xl font-extrabold flex justify-end">
            <a href="" class="flex items-center"
              >See More
              <Icon
                icon="typcn:arrow-right-outline"
                class="text-yellow-400"
              ></Icon
            ></a>
          </h3> -->

          <!-- Icon -->
          <div class="flex gap-4 mt-5">
            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon
                icon="devicon:vuejs-wordmark"
                class="w-6 h-6 md:w-13 md:h-13"
              ></Icon>
            </div>

            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon icon="logos:vitejs" class="w-6 h-6 md:w-13 md:h-13"></Icon>
            </div>
            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon icon="logos:laravel" class="w-6 h-6 md:w-13 md:h-13"></Icon>
            </div>

            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon icon="logos:tauri" class="w-6 h-6 md:w-13 md:h-13"></Icon>
            </div>

            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon
                icon="logos:bootstrap"
                class="w-6 h-6 md:w-13 md:h-13"
              ></Icon>
            </div>
          </div>
        </div>
      </section>

      <!-- Project 3 -->
      <section class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/3">
          <img
            src="../assets/myBook-Project.png"
            alt="My Book Project"
            width="365"
            @mouseover="showTab('mybook')"
            @click="showTab('mybook')"
          />
        </div>

        <div
          v-if="activeTab === 'mybook'"
          class="tabContent w-full md:w-2/3 mt-2"
        >
          <h3 class="text-xl font-bold">My Book</h3>
          <p class="text-sm md:text-base mt-2">
            MyBook is a bookstore website that I developed in fullstack,
            allowing users to search, view details, and manage book collections
            easily. This website is built using Vue.js for the frontend and
            Supabase as the backend, providing a fast and responsive user
            experience. <br />
            <b
              >Technologies Used <br />
              Frontend :</b
            >
            Vue.js with PrimeVue as the UI component for a modern and
            interactive look. <br />
            <b>Styling : </b> Tailwind CSS for flexible and efficient design.
            <br />
            <b>Backend :</b> Supabase, an open-source alternative to Firebase
            that handles authentication, database, and book storage in
            real-time.
          </p>

          <!-- <h3 class="text-sm md:text-xl font-extrabold flex justify-end">
            <a href="" class="flex items-center"
              >See More
              <Icon
                icon="typcn:arrow-right-outline"
                class="text-yellow-400"
              ></Icon
            ></a>
          </h3> -->

          <!-- Icon -->
          <div class="flex gap-4 mt-5">
            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon
                icon="devicon:vuejs-wordmark"
                class="w-6 h-6 md:w-13 md:h-13"
              ></Icon>
            </div>
            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon icon="logos:vitejs" class="w-6 h-6 md:w-13 md:h-13"></Icon>
            </div>

            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon
                icon="logos:tailwindcss"
                class="w-8 h-8 md:w-13 md:h-13"
              ></Icon>
            </div>

            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon
                icon="simple-icons:primevue"
                class="w-6 h-6 md:w-13 md:h-13"
              ></Icon>
            </div>

            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon icon="logos:supabase" width="65"></Icon>
            </div>
          </div>
        </div>
      </section>

      <!-- Project 4 -->
      <section class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/3">
          <img
            src="../assets/abs-project.png"
            alt="ABS Project"
            width="365"
            @mouseover="showTab('absProject')"
            @click="showTab('absProject')"
          />
        </div>
        <div
          v-if="activeTab === 'absProject'"
          class="tabContent w-full md:w-2/3 mt-2"
        >
          <h3 class="text-xl font-bold">ABS Project</h3>
          <p class="text-sm md:text-base mt-2">
            I have developed a web-based cashier application with Vue.js, using
            PrimeVue as the UI framework to ensure a modern, responsive, and
            interactive appearance. For optimal performance, I utilized Vite as
            the build tool, which allows for faster development with hot module
            replacement (HMR). In terms of design, I used Tailwind CSS as the
            main styling framework, allowing me to build a flexible and
            aesthetic interface with utility-first CSS. With this combination,
            my cashier application offers an intuitive, fast, and easy-to- use
            user experience.
          </p>

          <!-- <h3 class="text-sm md:text-xl font-extrabold flex justify-end">
            <a href="" class="flex items-center"
              >See More<Icon
                icon="typcn:arrow-right-outline"
                class="text-yellow-400"
              ></Icon
            ></a>
          </h3> -->

          <!-- Icon -->
          <div class="flex gap-4 mt-5">
            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon
                icon="devicon:vuejs-wordmark"
                class="w-6 h-6 md:w-13 md:h-13"
              ></Icon>
            </div>
            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon icon="logos:vitejs" class="w-6 h-6 md:w-13 md:h-13"></Icon>
            </div>

            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon icon="logos:tailwindcss" width="65"></Icon>
            </div>

            <div
              class="w-10 h-10 md:w-20 md:h-20 flex items-center justify-center bg-gray-200 rounded-full shadow-lg hover:bg-amber-400 hover:text-white hover:cursor-pointer transition"
            >
              <Icon
                icon="simple-icons:primevue"
                class="w-6 h-6 md:w-13 md:h-13"
              ></Icon>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.tab img:hover {
  transform: scale(1.1);
  transition: 1s;
}

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
  left: calc(3% - 0px);
}

.Judul h1::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 45px;
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
    width: 45px;
    height: 4px;
    background-color: #ffcf50;
    left: calc(50% - 20px);
  }
}
</style>
