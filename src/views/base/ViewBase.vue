<template>
  <div class="flex flex-col md:mx-20 mx-4">
    <Navbar />
    <slot></slot>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
</style>