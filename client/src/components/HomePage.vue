<template>
  <div id="app">
    <CardComponent/>
    <FormComponent/>
  </div>
</template>

<script>
  import CardComponent from "@/components/CardComponent.vue";
  import FormComponent from "@/components/FormComponent.vue";
  export default {
    name: "HomePage",
    components: {
      CardComponent,
      FormComponent
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
