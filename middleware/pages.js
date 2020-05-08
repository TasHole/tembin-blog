export default function(context) {
    // go tell the store to update the page
    context.store.commit('blog/updatePage', context.route.name)
}