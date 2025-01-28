// "use client";

// import { QuoteFormContext } from '@/components/QuoteFormContext.js';
// import '@/styles/services-pages.css'
// import '@/styles/aboutus.css'
// import '@/styles/globals.css'
// import '@/styles/blog.css'
// import { Lightbulb, Truck, Globe, ShieldCheck } from 'lucide-react';
// import { useContext } from 'react';

// const blogItems = [
//   {
//     image: "/images/services/international-moving.jpg",
//     alt: "International Moving Image",
//     title: "Know How",
//     date: "May 1, 2023",
//     description: "With three decades of industry expertise, our seasoned professionals navigate complex logistics challenges with precision and insight, ensuring optimal solutions for every situation."
//   },
//   {
//     image: "/images/services/international-moving.jpg",
//     alt: "International Moving Image",
//     title: "Global Network",
//     date: "May 1, 2023",
//     description: "Our extensive worldwide network enables us to provide seamless logistics solutions across continents, connecting businesses to opportunities around the globe."
//   },
//   {
//     image: "/images/services/international-moving.jpg",
//     alt: "International Moving Image",
//     title: "Customized Solutions",
//     date: "May 1, 2023",
//     description: "We understand that every business is unique. That's why we offer tailored logistics solutions to meet your specific needs, ensuring efficiency and cost-effectiveness."
//   }
// ];

// const Blog = () => {
//   return (
//     <div>
//       <div className="about-home-intro">
//         <div className="home-content-container">
//           <div className="home-intro-content">
//             <h1>Blog</h1>
//           </div>
//         </div>
//       </div>
//       <div className="blog-section">
//         <div className="home-content-container">
//           <div className="blog-content-container">
//             <div className="blog-grid">
//               {blogItems.map((item, index) => (
//                   <div key={index} className="blog-item">
//                     <div className="blog-image">
//                       <img src={item.image} alt={item.alt} />
//                     </div>
//                     <div className="blog-content">
//                       <div className="blog-title">{item.title}</div>
//                       <div className="blog-date">{item.date}</div>
//                       <div className="blog-description">
//                         {item.description}
//                       </div>
                      // <button className="read-button" onClick={'/'}>
                      //   READ MORE
                      // </button>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//             <div className="blog-nav">
//               <div className="blog-search">
//                   <input type="text" placeholder="Search blog posts..." />
//                   <button type="button">Search</button>
//               </div>
//               <div className="blog-recent">
//                   <h2>Recent Posts</h2>
//                   <div className="blog-recent-grid">
//                       {blogItems.slice(0, 3).map((item, index) => (
//                           <div key={index} className="blog-recent-item">
//                             <div className="blog-recent-date">{item.date}</div>
//                             <div className="blog-recent-title">{item.title}</div>
//                           </div>
//                       ))}
//                   </div>
//               </div>
//           </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// };

// export default Blog;

'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { blogService } from '@/services/blogService'
import BlogGrid from '@/components/BlogGrid'
import BlogSearch from '@/components/BlogSearch'
import RecentPosts from '@/components/RecentPosts'
import Pagination from '@/components/Pagination'
import ErrorBoundary from '@/components/ErrorBoundary'
import LoadingState from '@/components/LoadingState'

import '@/styles/blog.css'
import '@/styles/globals.css'
import '@/styles/aboutus.css'

export default function Blog() {
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
                    <BlogGrid posts={posts} />
                    <Pagination 
                      currentPage={page}
                      totalPages={totalPages}
                      search={search}
                    />
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