<template>
  <div>
    <app-navigation />
    <nuxt id="main"/>
    <app-footer />
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'
import AppFooter from '~/components/Footer.vue'
import { mapState } from 'vuex'
export default {
  components: {
    AppNavigation,
    AppFooter
  },
  computed: {
    ...mapState(['error'])
  }
}
</script>

<style lang="scss">
body {
    height: 100%;
    margin: 0;
    font-weight: 400;
    line-height: 1.5;
    font-size: 14px;
    color: $text_color_main;
    word-wrap: break-word;
    background-color: $ground_color;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-feature-settings: "kern";
    font-feature-settings: "kern";
    -webkit-font-kerning: normal;
    font-kerning: normal;
}
</style>
