<template>
  <div id="app">
    <CardComponent />
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "HomePage",
  components: {
    CardComponent,
  },
  data() {
    return {
      // Здесь можно добавить ваши данные
    };
  },
};
</script>

<style scoped>
/* Здесь можно добавить ваши стили */
</style>
