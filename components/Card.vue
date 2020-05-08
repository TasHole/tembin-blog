<template>
  <article class="card" v-scroll="openCard">
    <nuxt-link v-bind:to="{ name: 'post-slug', params: { slug: slug, id: id }}" class="post-link" >
        <h2 class="card__title">{{ title }}</h2>
        <cardimage :image="image" />
        <time class="card__date" data-aos="fade-in">{{ $dateFns.format(new Date(date), 'yyyy.MM.dd') }}</time>  
    </nuxt-link>
    <div class="card__description">{{ description }}</div>
    <div class="card__tags">
      <span class="card__tag" v-for="(tag, i) in tags" :key="i">{{ tag }}</span>
    </div>
  </article>
</template>
<script>
import client from '~/plugins/contentful'
import cardimage from "~/components/CardImage"
import { throttle } from 'lodash'
export default {
    components: { cardimage },
    props: ['id', 'title', 'slug', 'image', 'body', 'date', 'description', 'tags' ],
    created: function () {
        this.openCard = throttle(this.openCard, 10)
    },
    methods: {
        openCard: function(evt, el) {
            if (window.scrollY + 700 > el.offsetTop) {
                el.setAttribute(
                    "style",
                    "opacity: 1; transform: translate3d(0, -10px, 0)"
                )
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.card {
    display: block;
    position: relative;
    margin-bottom: 3rem;
    width: 100%;
    max-width: $body_max_width;
    text-align: justify;
    opacity: 0;
    will-change: transform;
    transition: 0.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
    a {
        display: block;
        color: $text_color_main;
        position: relative;
        &:hover {
            color: $text_color_main;
            img {
                filter: none !important;
            }
        }
    }
    &__title {
        width: 96%;
        margin: 3% auto 1.5%;
        font-size: 1.5em;
        font-weight: bold;
        line-height: 1;
        text-align: left;
        @media only screen and (max-width: $point_sp) {
            font-size: 1.1em;
        }
    }
    &__description{
        font-size: 0.9em;
        width: 96%;
        margin: 3% auto 1.5%;
    }
    &__body {
        width: 96%;
        margin: 0 auto;
        line-height: 2;
        overflow: hidden;
        font-weight: normal;
        text-align: justify;
        p {
            height: 4.5em;
            font-size: .8em;
            margin: 0px;
        }
    }
    &__tags {
        text-align: right;
        margin-top: 0.5rem;
    }
    &__tag {
        padding: .5rem 1rem;
        font-size: .9rem;
        border-radius: 0.2rem;
        margin-left: 1rem;
        background: rgba(255, 255, 255, 0.4);
        text-align: right;
        &:before {
            content: '#';
        }
    }
    &__date {
        color: rgb(238, 139, 11);
        font-size: .75em;
        position: absolute;
        letter-spacing: 1px;
        bottom: 5px;
        right: 30px;
    }
}
</style>
