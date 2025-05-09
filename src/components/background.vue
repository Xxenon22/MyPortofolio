<template>
  <div class="absolute inset-0 -z-10 bg-white overflow-hidden">
    <!-- Lingkaran abu-abu -->
    <div
      v-for="(circle, index) in circles"
      :key="'circle-' + index"
      class="absolute bg-gray-300 rounded-full opacity-50"
      :style="{
        width: circle.size + 'px',
        height: circle.size + 'px',
        top: circle.top + '%',
        left: circle.left + '%',
      }"
    ></div>

    <!-- Garis melingkar kuning -->
    <div
      v-for="(ring, index) in rings"
      :key="'ring-' + index"
      class="absolute border-yellow-400 border-2 rounded-full opacity-40"
      :style="{
        width: ring.size + 'px',
        height: ring.size + 'px',
        top: ring.top + '%',
        left: ring.left + '%',
        transform: 'rotate(' + ring.rotate + 'deg)',
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Background",
  data() {
    return {
      circles: [],
      rings: [],
    };
  },
  created() {
    this.generateCircles(15); // Lingkaran abu-abu
    this.generateRings(10); // Garis kuning melingkar
  },
  methods: {
    generateCircles(count) {
      for (let i = 0; i < count; i++) {
        this.circles.push({
          size: Math.floor(Math.random() * 100) + 50,
          top: Math.random() * 100,
          left: Math.random() * 100,
        });
      }
    },
    generateRings(count) {
      for (let i = 0; i < count; i++) {
        this.rings.push({
          size: Math.floor(Math.random() * 120) + 60,
          top: Math.random() * 100,
          left: Math.random() * 100,
          rotate: Math.floor(Math.random() * 360),
        });
      }
    },
  },
};
</script>

<style scoped>
/* Optional: efek animasi atau blur untuk kesan artistik */
</style>
