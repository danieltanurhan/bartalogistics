'use client'

export default function Pagination({ currentPage, totalPages, search }) {
  const createPageUrl = (pageNumber) => {
    const params = new URLSearchParams()
    if (pageNumber > 1) params.set('page', pageNumber)
    if (search) params.set('search', search)
    return `/blog${params.toString() ? `?${params.toString()}` : ''}`
  }

  return (
    <div className="blog-nav">
      <div className="pagination">
        {currentPage > 1 && (
          <a 
            href={createPageUrl(currentPage - 1)}
            className="read-button"
          >
            Previous
          </a>
        )}
        
        {[...Array(totalPages)].map((_, i) => {
          const pageNumber = i + 1
          return (
            <a
              key={pageNumber}
              href={createPageUrl(pageNumber)}
              className={`read-button ${
                pageNumber === currentPage ? 'active' : ''
              }`}
            >
              {pageNumber}
            </a>
          )
        })}

        {currentPage < totalPages && (
          <a 
            href={createPageUrl(currentPage + 1)}
            className="read-button"
          >
            Next
          </a>
        )}
      </div>
    </div>
  )
}