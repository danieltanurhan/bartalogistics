import { BsCalendar4 } from 'react-icons/bs'
import { FaFolder } from 'react-icons/fa'
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
            <Link href={`/blog/${post.slug.current}`}>
              <div className="blog-image">
                <img src={urlForImage(post.mainImage)} alt={post.title || 'Blog post image'} />
              </div>
            </Link>
          )}
          <div className="blog-content">
            <Link href={`/blog/${post.slug.current}`} className="blog-title">
              <div className="blog-title" title={post.title}>{post.title}</div>
            </Link>
            <div className="blog-meta">
              <span className="date">
                <BsCalendar4 className="meta-icon" />
                {new Date(post._createdAt).toLocaleDateString()}
              </span>
              {post.categories && post.categories.length > 0 && (
                <div className="categories">
                  <FaFolder className="meta-icon" />
                  {post.categories.map((category, index) => (
                    <span key={category._id} className="category">
                      {category.title}
                      {index < post.categories.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              )}
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