<template>
  <div>
    <div class="article__header">
      <div class="header_wrap">
        <div class="logo">
          <nuxt-link to="/">
            <SVGElement name="logo" class="logotype" />
          </nuxt-link>
        </div>
        <div class="links">
          <a
            href="https://twitter.com/tatt_san/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGElement name="twitter" class="icon__twitter" />
          </a>
          <a
            href="https://www.instagram.com/tatt_san/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGElement name="instagram" class="icon__instagram" />
          </a>
        </div>
      </div>
    </div>
    <div
      class="parallax"
      :style="{
        backgroundImage: `url(${currentPost.fields.heroImage.fields.file.url})`,
      }"
    ></div>
    <div class="article__body">
      <section class="article__content">
        <h1 class="article__title">
          {{ currentPost.fields.title }}
        </h1>
        <p class="article__publishDate">
          {{
            $dateFns.format(
              new Date(currentPost.fields.publishDate),
              "yyyy.MM.dd"
            )
          }}
        </p>
        <div
          class="article__contentBody"
          v-html="$md.render(currentPost.fields.body)"
        ></div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import client from "~/plugins/contentful";
import markdownit from "@nuxtjs/markdownit";
import SVGElement from "~/components/SVGElement";

export default {
  components: { markdownit, SVGElement },
  async asyncData({ payload, store, params, error }) {
    const currentPost =
      payload ||
      (await store.state.blog.posts.find(
        (post) => post.fields.slug === params.slug
      ));
    if (currentPost) {
      return {
        currentPost,
        meta: {
          title: `${currentPost.fields.title} | Joumal`,
          description: `${currentPost.fields.description}`,
          type: "article",
          url: "https://joumal.com",
          image: `${currentPost.fields.heroImage.fields.file.url}`,
        },
      };
    } else {
      return error({ statusCode: 400 });
    }
  },
  data() {
    return {};
  },
  head() {
    return {
      title: this.meta.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.meta.description,
        },
        { hid: "og:type", property: "og:type", content: this.meta.type },
        { hid: "og:title", property: "og:title", content: this.meta.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.meta.description,
        },
        { hid: "og:url", property: "og:url", content: this.meta.url },
        { hid: "og:image", property: "og:image", content: this.meta.image },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.parallax {
  margin-top: -5vw;
  width: 100%;
  min-height: 80vh;
  border: solid 5vw $ground_color;
  background-color: $ground_color;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
}
.article {
  &__body {
    max-width: $body_max_width;
    margin-right: auto;
    margin-left: auto;
  }
  &__title {
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 24px;
    margin-bottom: 36px;
    line-height: 2;
  }
  &__publishDate {
    text-align: right;
    margin: -24px 0 36px auto;
    border-bottom: 1px solid $color_second;
  }
  &__content {
    margin-bottom: 48px;
    padding: 10px 5vw;
  }
  &__image {
    width: 100%;
    height: auto;
    vertical-align: top;
  }
  &__contentBody {
    line-height: 36px;
    text-align: justify;
    h1 {
      font-size: 1.5em;
      font-weight: bold;
    }
    p {
      margin: 1em 0;
    }
  }
}

// PageHeader
.article__header {
  overflow: hidden;
  padding: 0 5%;
  width: 100%;
  background-color: $ground_color;
  height: 5vh;
  top: 0;
  transition: 1.2s all cubic-bezier(0.39, 0.575, 0.565, 1);
  .logotype {
    fill: $color_main;
  }
  .header_wrap {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    max-width: 940px;
    height: 5vh;
    margin-right: auto;
    margin-left: auto;
    .logo {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      max-width: 140px;
      max-height: 40px;
      vertical-align: top;
      padding: 10px 10px 10px 0;
      svg {
        width: 100%;
      }
    }
    .links {
      margin: auto 0 auto auto;
      display: flex;
      justify-content: space-between;
      svg {
        display: block;
        width: 20px;
        height: 20px;
        margin-left: 20px;
      }
    }
  }
}
</style>
