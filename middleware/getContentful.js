export default async({ store }) => {
    if (!store.state.blog.posts.length) await store.dispatch('blog/getPosts')
}