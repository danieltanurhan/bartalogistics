'use client'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { blogService } from '@/services/blogService'
import { PortableText } from '@portabletext/react'
import { urlForImage } from '@/lib/sanity'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingState from '@/components/LoadingState'
import BlogSearch from '@/components/BlogSearch'
import RecentPosts from '@/components/RecentPosts'
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import '@/styles/blog.css'
import { BsCalendar4 } from 'react-icons/bs'
import { FaFolder, FaArrowLeft } from 'react-icons/fa'
import useWindowSize from '@/hooks/useWindowSize'

export default function BlogPostContent({ slug }) {
  // Move all state and handlers from [slug]/page.js here
  const [isMounted, setIsMounted] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [post, setPost] = useState(null)
  const [recentPosts, setRecentPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const search = searchParams.get('search') || ''
  const { width } = useWindowSize()
  const isMobile = width < 768

  useEffect(() => {
    setIsMounted(true)
    if (slug) {
      fetchPost()
    }
    fetchRecentPosts()
  }, [slug])

  const fetchPost = async () => {
    try {
      setLoading(true)
      const post = await blogService.getPost({ slug })
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

  const handleBack = () => {
    router.push('/blog')
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }

  if (!post) return <div>Loading...</div>

  return (
    <>
      <div className="blog-post-home-intro">
        <div className="home-content-container">
          <div className="home-intro-content">
            <div className="blog-post-breadcrumb">
              <span>Blog</span>
              <span className="separator">/</span>
              <span className="current">{post.title}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="home-content-container">
          <div className="blog-content-container">
            <main className="blog-main">
              <ErrorBoundary>
                {isMobile && (
                  <>
                    <button onClick={handleBack} className="back-button">
                      <FaArrowLeft className="back-icon" /> Back
                    </button>
                    <BlogSearch
                      initialValue={search}
                      onSearch={handleSearch}
                      className="mobile-search"
                    />
                  </>
                )}
                <Suspense fallback={<LoadingState />}>
                  <article className="blog-post">
                    {post.mainImage && (
                      <div className="post-image">
                        <img src={urlForImage(post.mainImage)} alt={post.title} />
                      </div>
                    )}
                    <h1>{post.title}</h1>
                    <div className="post-meta">
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
                    <div className="post-content">
                      <PortableText value={post.body} />
                    </div>
                  </article>
                </Suspense>
              </ErrorBoundary>
            </main>
            <aside className="blog-nav">
              {!isMobile && (
                <>
                  <button onClick={handleBack} className="back-button">
                    <FaArrowLeft className="back-icon" /> Back
                  </button>
                  <BlogSearch
                    initialValue={search}
                    onSearch={handleSearch}
                  />
                </>
              )}
              <RecentPosts posts={recentPosts} />
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}