export default function LoadingState() {
    return (
      <div className="blog-grid">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="blog-card-skeleton">
            <div className="skeleton image" />
            <div className="skeleton title" />
            <div className="skeleton text" />
            <div className="skeleton text" />
          </div>
        ))}
      </div>
    )
  }