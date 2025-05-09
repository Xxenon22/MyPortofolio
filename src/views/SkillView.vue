<template>
  <div class="px-4 py-6">
    <div class="Judul text-sm font-bold">
      <h1>Skill<span class="text-yellow-400">'s</span></h1>
    </div>

    <div class="mt-10 space-y-6">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        :class="[
          'flex items-center gap-4',
          // index % 2 === 0 ? 'flex-row' : 'flex-row-reverse',
          'justify-between md:justify-start',
        ]"
        class="flex-wrap"
      >
        <Icon :icon="skill.icon" width="50" height="50" />
        <div class="flex-1 bg-gray-300 rounded-full h-4">
          <div
            class="bg-yellow-400 h-4 rounded-full"
            :style="{ width: skill.percentage }"
          ></div>
        </div>
        <div class="text-sm font-semibold w-14 text-right">
          {{ skill.percentage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  { icon: "logos:html-5", percentage: "100%" },
  { icon: "logos:css-3", percentage: "100%" },
  { icon: "devicon:vuejs-wordmark", percentage: "100%" },
  { icon: "logos:javascript", percentage: "80%" },
  { icon: "logos:laravel", percentage: "80%" },
  { icon: "logos:tauri", percentage: "75%" },
  { icon: "logos:git", percentage: "70%" },
];
</script>

<style scoped>
.Judul h1 {
  padding-bottom: 20px;
  position: relative;
  display: inline-block;
}

.Judul h1::before {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 120px;
  height: 1px;
  background-color: #000;
  left: 50%;
  transform: translateX(-50%);
}

.Judul h1::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  width: 40px;
  height: 4px;
  background-color: #ffcf50;
  left: 50%;
  transform: translateX(-50%);
}

@media screen and (max-width: 400px) {
  .Judul h1 {
    display: flex;
    justify-content: center;
  }
}
</style>
