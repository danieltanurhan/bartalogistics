export default function BlogLayout({ children }) {
    return (
      <>
        <div className="about-home-intro">
          <div className="home-content-container">
            <div className="home-intro-content">
              <h1>Blog</h1>
            </div>
          </div>
        </div>
        {children}
      </>
    )
}