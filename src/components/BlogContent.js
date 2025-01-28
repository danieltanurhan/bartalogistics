'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { blogService } from '@/services/blogService'
import BlogGrid from '@/components/BlogGrid'
import BlogSearch from '@/components/BlogSearch'
import RecentPosts from '@/components/RecentPosts'
import Pagination from '@/components/Pagination'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingState from '@/components/LoadingState'
import '@/styles/services-pages.css'
import '@/styles/aboutus.css'
import '@/styles/globals.css'
import '@/styles/blog.css'

export default function BlogContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [posts, setPosts] = useState([])
  const [recentPosts, setRecentPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [totalPages, setTotalPages] = useState(0)

  const page = parseInt(searchParams.get('page') || '1')
  const search = searchParams.get('search') || ''

  useEffect(() => {
    fetchPosts()
    fetchRecentPosts()
  }, [page, search])

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const { posts, totalPages: pages } = await blogService.getPosts({ 
        page, 
        search 
      })
      setPosts(posts)
      setTotalPages(pages)
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
    router.push(`/blog?search=${searchTerm}&page=1`)
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }

  return (
    <div className="blog-section">
      <div className="home-content-container">
        <div className="blog-content-container">
          <main className="blog-main">
            <ErrorBoundary>
              {loading ? (
                <LoadingState />
              ) : (
                <BlogGrid posts={posts} />
              )}
              <Pagination 
                currentPage={page}
                totalPages={totalPages}
                search={search}
              />
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
  )
}