import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/lib/sanity'

export default function BlogGrid({ posts }) {
  if (!posts?.length) {
    return <div className="no-posts">No posts found</div>
  }

  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <article key={post._id} className="blog-item">
          {post.mainImage && (
            <div className="blog-image">
              <img src={urlForImage(post.mainImage)} alt={post.title || 'Blog post image'} />
            </div>
          )}
          <div className="blog-content">
            <div className="blog-title">{post.title}</div>
            <div className="blog-meta">
              <span>{new Date(post._createdAt).toLocaleDateString()}</span>
              {post.author && <span>By {post.author}</span>}
            </div>
            <div className="blog-description">
              {post.description}
            </div>
            <Link href={`/blog/${post.slug.current}`}>
              <button className="read-button">
                READ MORE
              </button>
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}