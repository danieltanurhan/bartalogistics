import { client } from '../lib/sanity'
import groq from 'groq'

const POSTS_PER_PAGE = 6

export const blogService = {
  async getPosts({ page = 1, search = '' }) {
    try {
      const offset = (page - 1) * POSTS_PER_PAGE
      
      // Changed to use simple template literal like in test page
      const query = `*[_type == "post"${
        search ? ` && (title match "*${search}*" || content match "*${search}*")` : ''
      }] | order(_createdAt desc) {
        _id,
        title,
        slug,
        mainImage,
        description,
        _createdAt,
        "categories": categories[]-> {
          _id,
          title
        },
        "author": author->name
      }[${offset}...${offset + POSTS_PER_PAGE}]`

      const countQuery = `count(*[_type == "post"${
        search ? ` && (title match "*${search}*" || content match "*${search}*")` : ''
      }])`

      const [posts, total] = await Promise.all([
        client.fetch(query),
        client.fetch(countQuery)
      ])

      console.log('Posts fetched:', posts) // Debug log

      return {
        posts,
        total,
        totalPages: Math.ceil(total / POSTS_PER_PAGE)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
      throw error
    }
  },

  async getRecentPosts(limit = 3) {
    const query = `*[_type == "post"] | order(_createdAt desc)[0...${limit}] {
      _id,
      title,
      slug,
      mainImage,
      _createdAt,
      "categories": categories[]-> {
        _id,
        title
      }
    }`
    return client.fetch(query)
},

  async getPost({ slug }) {
    try {
      const query = `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        mainImage,
        body,
        _createdAt,
        "categories": categories[]-> {
        _id,
        title
      },
        "author": author->name
      }`
      
      const post = await client.fetch(query, { slug })
      
      if (!post) {
        throw new Error('Post not found')
      }

      return post
    } catch (error) {
      console.error('Error fetching post:', error)
      throw error
    }
  },

}