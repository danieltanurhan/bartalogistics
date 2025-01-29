import { BsCalendar4 } from 'react-icons/bs'
import { FaFolder } from 'react-icons/fa'
import { urlForImage } from '@/lib/sanity'
import Link from 'next/link'

export default function RecentPosts({ posts }) {
    if (!posts?.length) return null;
  
    return (
      <div className="blog-recent">
        <h2>Recent Posts</h2>
        <div className="blog-recent-grid">
          {posts.map((post) => (
            <div key={post._id} className="blog-recent-item">
              {post.mainImage && (
                <Link href={`/blog/${post.slug.current}`} className="blog-recent-image">
                  <div className="blog-recent-image">
                    <img src={urlForImage(post.mainImage)} alt={post.title} />
                  </div>
                </Link>
              )}
              <div className="blog-recent-content">
                <div className="blog-recent-meta">
                  <span className="date">
                    <BsCalendar4 className="meta-icon" />
                    {new Date(post._createdAt).toLocaleDateString()}
                  </span>
                  {post.categories && post.categories.length > 0 && (
                    <span className="category">
                      <FaFolder className="meta-icon" />
                      {post.categories[0].title}
                    </span>
                  )}
                </div>
                <Link href={`/blog/${post.slug.current}`} className="blog-recent-title">
                  <div className="blog-recent-title">{post.title}</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}