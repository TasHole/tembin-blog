<template>
  <main>

    <div class="kv container parallax">
      <section class="contents">
        <h1>経済学×プログラミングで、僕らの手の中に未来を取りもどそう</h1>
        <SVGElement name="logo" class="kv__image logotype"/>
      </section>
    </div>

    <div class="container">
      <!--<div class="label">
        <section class="contents label__container">
          <h2 class="label__head">
            (we)Blog
          </h2>
          <div class="label__body">
            <p>
              インターネットで見つけたことの<br>
              いくつかを結びつけて、<br>
              考えたメモのストックをしていきます。
            </p>
          </div>
        </section>
      </div>-->
      <div>
        <section class="contents">
          <articles :posts="posts"/>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import SVGElement from "~/components/SVGElement"
import Articles from "~/components/Articles"
import client from "~/plugins/contentful.js"
export default {
  components: { SVGElement, Articles },
  async asyncData({ payload, store, error }) {
    const posts = await store.state.blog.posts
    if (posts) {
      return { posts }
    } else {
      return error({ statusCode: 400 })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
  
</script>

<style lang="scss" scoped>
.kv{
  color: $ground_color;
  background: $color_main;
  height: 100vh;
  @media only screen and (max-width: $point_sp) {
    h1{
      font-size: 0.75em;
    }
  }
  &__image{
    margin: 5% auto 0;
    width: 50%; 
  }
  .logotype{
    fill: $ground_color;
  }
  .door{
    width: 25%;
  }
}
.parallax {
  width: 100%;
  min-height: 80vh;
  border: solid 5vw $ground_color;
  background-color: $ground_color;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
  background-image: url("~@/assets/img/inventory.jpg");
}

.label{
  width: 100%;
  background: $color_main;
  color: $text_color_sub;
  &__container{
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    padding:2%;
  }
  &__body{
    font-size: .8em;
  }
  &__head{
    font-size: 4em;
    text-align: right;
    font-weight: 900;
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  @media only screen and (max-width: $point_sp) {
    &__container{
      flex-flow: column;
      padding: 2% 2% 7%;
    }
    &__body{
      text-align: center;
      width: 80%;
    }
    &__head{
      font-size: 2em;
      order: -1;
      width: 90%;
      text-align: center;
      margin-bottom: 10px;
    }
  }
}
.project{
      width: 40vw;
      height: 40vh;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      margin: auto;
      filter: drop-shadow(0 10vh 3vw rgba(0, 0, 0, 0.6));
      @media only screen and (max-width: $point_sp) {
        width: auto;
        filter: drop-shadow(0 5vh 3vw rgba(0, 0, 0, 0.6));
      }
      a {
        margin: auto;
        svg {
            width: 20vw;
            margin: auto;
            padding: 2vw;
          }
        p{
          font-size: 0.8em;
        }
      }
    }
</style>
