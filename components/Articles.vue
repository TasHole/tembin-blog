<template>
  <div class="articles">
    <card
      v-for="post in posts"
      v-bind:key="post.fields.slug"
      :id="post.sys.id"
      :title="post.fields.title"
      :slug="post.fields.slug"
      :image="post.fields.heroImage"
      :body="post.fields.body"
      :date="post.fields.publishDate"
      :description="post.fields.description"
      :tags="post.fields.tags"
    />
  </div>
</template>

<script>
import Card from "~/components/Card"

export default {
  components: { Card },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
 .articles {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 0 auto;
    @media only screen and (max-width: $point_sp) {
        width: 90vw;
    }
  }
</style>
