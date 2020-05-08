<template>
  <footer class="footer">
    <div class="hello">
      <div class="myname">
        <img class="face" src="~/assets/img/face.png" alt="さとうたつや">
        <div class="title">
          <SVGElement name="name" class="logo" data-aos="fade-in"/>
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
            href="https://note.com/tas_hole"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SVGElement name="note" class="icon__note"/>
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
      <div class="about" data-aos="fade-in">
        <p>
          幼いころからビデオゲームと<br>
          コンピュータがすきで触れてきた<br>
          80年代生まれの会社員のお父さんです。
        </p>
        <p>
          コンピュータサイエンスの知識、<br>
          認知心理学（そして経済学）を基に、<br>
          サービスを考えたり、設計したり、<br>
          作ったりして対価をいただくことを<br>
          生業としています。
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import SVGElement from "~/components/SVGElement"
export default {
  components: { SVGElement },
}
</script>

<style lang="scss" scoped>
 .footer{
    display: flex;
    text-align: center;
    padding: 2em 0 0;
    background: $color_main;
   .hello {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      text-align: center;
      max-width: calc( #{$body_max_width} ); 
      margin: 0 auto;
      @media only screen and (max-width: $point_sp) {
          flex-direction: column;
      }
      .myname {
        z-index: 1;
        text-align: left;
        width: 40%;
        @media only screen and (max-width: $point_sp) {
            width: 100%;
            text-align: center;
        }
        .face{
          width: 33%;
          overflow: hidden;
          border-radius: 50%;
        }
        .logo {
          width: 100%;
          border-bottom: 1px dashed $ground_color;
          fill:$ground_color;
          @media only screen and (max-width: $point_sp) {
            margin: 0 auto 5%;
            max-width: 240px;
          }
        }
        .title {
          font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-weight: 700;
          color: $ground_color;
          line-height: 4;
          letter-spacing: 2px;
          font-size: 0.66em;
          @media only screen and (max-width: $point_sp) {
              margin: 0 auto;
              padding-left: 0;
          }
        }
        .links {
          margin: auto 5% auto 45%;
          padding: 10% 0;
          z-index: 1;
          display: flex;
          justify-content: space-between;
          @media only screen and (max-width: $point_sp) {
              margin: auto 25%;
          }
          a {
            display: block;
            svg{
              width: 20px;
              height: 20px;
              fill:$ground_color;
            }
          }
        }
      }
      .about {
        z-index: 2;
        text-align: left;
        font-size: 0.8em;
        color: $ground_color;
        margin: 0 0 0 10%;
        line-height: 2;
        p {
          margin: 2em 0;
          line-height: 2;
        }
        @media only screen and (max-width: $point_sp) {
          margin: 0 auto;
          font-size: 1em;
          p {
            text-align: center;
          }
        }
      }
    }

 }
 
</style>
