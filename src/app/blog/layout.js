'use client'
import '@/styles/globals.css'
import '@/styles/aboutus.css'
import { usePathname } from 'next/navigation'

export default function BlogLayout({ children }) {
  const pathname = usePathname()
  const isBlogPost = pathname.includes('/blog/') && pathname !== '/blog'

  return (
    <>
      {!isBlogPost && (
        <div className="about-home-intro">
          <div className="home-content-container">
            <div className="home-intro-content">
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  )
}