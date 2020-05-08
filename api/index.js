import { createClient } from 'contentful'
import { CONTENT_TYPE_POST, CONTENT_TYPE_TAG, POSTS_PER_PAGE } from '@/lib/config'

const client = createClient({
    space: process.env.CTF_SPACE_ID,
    accessToken: process.env.CTF_CDA_ACCESS_TOKEN
})

export const fetchPosts = ({ page, tagId = null }) => {
    let param = {
        content_type: CONTENT_TYPE_POST,
        order: '-fields.publishDate',
        skip: (page - 1) * POSTS_PER_PAGE,
        limit: POSTS_PER_PAGE
    }

    if (tagId) {
        param['fields.tags.sys.id'] = tagId
    }

    return client.getEntries(param)
}

export const fetchPost = id => client.getEntry(id)

export const fetchTags = () =>
    client.getEntries({
        content_type: CONTENT_TYPE_TAG
    })