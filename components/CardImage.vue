<template>
  <img class="card_image" v-scroll="visibleImage" v-bind:src="image.fields.file.url" v-bind:alt="image.fields.file.title"/>
</template>

<script>
import client from '~/plugins/contentful'
import { throttle } from 'lodash'
export default {
  props: ['image'],
  created: function () {
      this.visibleImage = throttle(this.visibleImage, 100)
  },
  methods: {
    visibleImage: function(evt, el) {
      const target = el.getBoundingClientRect().top;
      if (100 < target && target < 460) {
        el.setAttribute(
          "style",
          "filter:none;"
        );
      } else {
        el.setAttribute(
          "style",
          "filter: contrast(160%) blur(0.75px) brightness(90%);"
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card_image {
  height: 160px;
  width: 95%;
  object-fit: cover;
  display: block;
  overflow: hidden;
  filter: contrast(160%) blur(0.8px) brightness(90%);
  transition: 0.8s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
</style>
