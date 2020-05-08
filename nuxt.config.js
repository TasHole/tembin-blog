require('dotenv').config()
const client = require('./plugins/contentful').default
const TITLE = 'Tembin | 経済学×プログラミング'
const DESCRIPTION =
    'プログラミング（html/css,js,python）を勉強してきたけど何を作ろう…という悩みを持っていた著者が、経済学は「おカネの学問ではないこと」を知って、その面白さやシステム開発との相性の良さに気づき、自らの手で未来を切り拓いていく記録'
const ogimg = 'https://tem-bin.com/default.png'
export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: TITLE,
        htmlAttrs: {
            lang: 'ja'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'google-site-verification', content: '_IloefzgZ1BK1aOane_LSxTSsM-aPie4pkL5_bOnqS4' },
            { name: 'theme-color', content: '#ffffff' },
            {
                hid: 'description',
                name: 'description',
                content: DESCRIPTION
            },
            {
                name: 'theme-color',
                content: '#ffffff'
            },
            {
                property: 'og:site_name',
                content: TITLE
            },
            {
                hid: 'og:title',
                name: 'og:title',
                content: TITLE
            },
            {
                hid: 'og:description',
                name: 'og:description',
                content: DESCRIPTION
            },
            {
                property: 'og:image',
                content: ogimg
            },
            {
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
                name: 'twitter:image',
                content: ogimg
            }
        ],
        link: [
            { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,700|Noto+Sans+JP:300,700' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#7343D8',
        height: '5px'
    },
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/dotenv',
        '@nuxtjs/markdownit',
        '@nuxtjs/date-fns',
        '@nuxtjs/style-resources', ['@nuxtjs/google-analytics', {
            id: 'UA-43025429-3'
        }]
    ],
    markdownit: {
        injected: true,
        breaks: true,
        html: true,
        use: ['markdown-it-emoji']
    },
    styleResources: {
        scss: [
            '~/assets/sass/style.scss'
        ],
    },

    plugins: [
        '~plugins/scroll.js',
        '~plugins/contentful',
        { src: "@/plugins/aos", ssr: false }
    ],
    env: {
        CTF_SPACE_ID: process.env.CTF_SPACE_ID,
        CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
        CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
    },
    router: {
        middleware: [
            'pages', 'getContentful'
        ]
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    build: {
        extend(config) {
            const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
            svgRule.test = /\.(png|jpe?g|gif|webp)$/i

            config.module.rules.push({
                test: /\.svg$/,
                loader: 'vue-svg-loader',
            })
        },
        extractCSS: true
            // analyze: true
    },
    generate: {
        fallback: true,
        routes() {
            return client
                .getEntries({ content_type: 'blogPost' })
                .then(entries => {
                    return [
                        ...entries.items.map(entry => {
                            return { route: `post/${entry.fields.slug}`, payload: entry }
                        })
                    ]
                })
        }
    }
}