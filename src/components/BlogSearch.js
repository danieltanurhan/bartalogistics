'use client'

import { useState, useEffect } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

export default function BlogSearch({ initialValue = '', onSearch }) {
  const [searchTerm, setSearchTerm] = useState(initialValue)
  const [isInitialRender, setIsInitialRender] = useState(true)

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false)
      return
    }
    const handler = setTimeout(() => {
      onSearch(searchTerm)
    }, 300)

    return () => clearTimeout(handler)
  }, [searchTerm])

  return (
    <div className="blog-search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search blog posts..."
        className="search-input"
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="clear-search"
        >
          Clear
        </button>
      )}
    </div>
  )
}