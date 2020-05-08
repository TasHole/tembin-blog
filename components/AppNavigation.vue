<template>
  <div>
    <header class="header" v-scroll="headerScroll">
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
            <SVGElement name="twitter" class="icon__twitter"/>
          </a>
          <a
            href="https://www.instagram.com/tatt_san/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGElement name="instagram" class="icon__instagram"/>
          </a>
        </div>
      </div>
    </header>
    <div class="background">
      <div class="color">
      </div>
    </div>
  </div>
</template>

<script>
import SVGElement from "~/components/SVGElement"
import { mapState } from 'vuex'
import { throttle } from 'lodash'
export default {
  computed: mapState(['page']),
  components: { SVGElement },
  created: function () {
      this.headerScroll = throttle(this.headerScroll, 100)
  },
  methods: {
    headerScroll: function(evt, el) {
      if (window.scrollY > 540) {
        el.setAttribute(
          "style",
          "opacity: 1; transform: translate3d(0, 0, 0); top:0"
        )
      }else{
        el.setAttribute(
          "style",
          "opacity: 0; transform: translate3d(0, -64px, 0)"
        )
      }
    }
  }
};

</script>

<style lang="scss" scoped>
.header {
    overflow: hidden;
    padding: 0 5%;
    width: 100%;
    background-color: $ground_color;
    height: 5vh;
    z-index: 100;
    position: fixed;
    top: -64px;
    opacity: 0;
    will-change: transform;
    transition: 0.8s all cubic-bezier(0.39, 0.575, 0.565, 1);
    svg{
      fill:$color_main;
    }
}
.logotype{
    fill: $color_main;
}
 .header_wrap{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    max-width: 940px;
    min-height: 5vh;
    margin-right: auto;
    margin-left: auto;
    .logo{
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      max-width: 140px;
      max-height: 5vh;
      vertical-align: top;
      padding:10px 10px 10px 0;
      svg{
        width: 100%;
      }
    }

 }
ul {
  list-style: none;
  li {
    display: inline-block;
    margin-right: 10px;
  }
  a,
  a:active,
  a:visited {
    color: $ground_color;
    text-decoration: none;
  }
}
.nuxt-link-active {
  font-weight: bold;
}
.items,
.list-move {
  transition: all 0.4s ease;
}
.list-leave-active {
  position: absolute;
}
#text {
  transform-origin: 50% 50%;
}
.background{
  width: 100vw;
  height: 100vh;
  z-index: -10;
  opacity: 0.66;
  position: fixed;
  background-image: url("~@/assets/img/frames.png");
  background-size: 20%;
  background-repeat: repeat;
  @media only screen and (max-width: $point_sp) {
      background-size: 33%;
  }
}
</style>