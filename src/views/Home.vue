<template>
  <ViewBase>
    <LandingPageSection />
    <AboutMeSection />
    <MyProjects />
  </ViewBase>
</template>

<script>
import MyProjects from '../components/MyProjectSection.vue'
import AboutMeSection from '../components/AboutMeSection.vue';
import LandingPageSection from '../components/LandingPageSection.vue';
import ViewBase from "./base/ViewBase.vue";
export default {
  components: {
    ViewBase,
    LandingPageSection,
    AboutMeSection,
    MyProjects
  },
};
</script>

<style lang="scss" scoped>
</style>