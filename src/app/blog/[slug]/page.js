'use client'

import { Suspense, useEffect, useState } from 'react'
import { useParams,useSearchParams, useRouter } from 'next/navigation'
import { blogService } from '@/services/blogService'
import { client } from '@/lib/sanity'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingState from '@/components/LoadingState'
import BlogSearch from '@/components/BlogSearch'
import RecentPosts from '@/components/RecentPosts'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/lib/sanity'
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import '@/styles/blog.css'

export default function BlogPost() {
  const [isMounted, setIsMounted] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [recentPosts, setRecentPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const search = searchParams.get('search') || ''


  useEffect(() => {
    setIsMounted(true)
    fetchPost()
    fetchRecentPosts()
  }, [slug])

  const fetchPost = async () => {
    try {
      setLoading(true)
      const post = await blogService.getPost({slug})
      if (!post) {
        throw new Error('Post not found')
      }
      setPost(post)
    } catch (err) {
      setError('Failed to load blog posts')
    } finally {
      setLoading(false)
    }
  }


  const fetchRecentPosts = async () => {
    try {
      const recent = await blogService.getRecentPosts()
      setRecentPosts(recent)
    } catch (err) {
      console.error('Failed to load recent posts:', err)
    }
  }
  
  const handleSearch = (searchTerm) => {
    if (isMounted) {
      router.push(`/blog?search=${searchTerm}&page=1`)
    }
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }

  if (!post) return <div>Loading...</div>

  return (
    <>
      <div className="about-home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <h1>Blog</h1>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="home-content-container">
          <div className="blog-content-container">
            <main className="blog-main">
              <ErrorBoundary>
                {loading ? (
                  <LoadingState />
                ) : (
                  <>
                    <Suspense fallback={<LoadingState />}>
                      {post && (
                        <article className="blog-post">
                          <h1>{post.title}</h1>
                          <div className="post-meta">
                            <span>{new Date(post._createdAt).toLocaleDateString()}</span>
                            {post.author && <span>By {post.author}</span>}
                          </div>
                          {post.mainImage && (
                            <div className="post-image">
                              <img src={urlForImage(post.mainImage)} alt={post.title} />
                            </div>
                          )}
                          <div className="post-content">
                            <PortableText value={post.body} />
                          </div>
                        </article>
                      )}
                    </Suspense>
                  </>
                )}
              </ErrorBoundary>
            </main>
            <aside className="blog-nav">
              <BlogSearch 
                initialValue={search} 
                onSearch={handleSearch} 
              />
              <RecentPosts posts={recentPosts} />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}