export default function RecentPosts({ posts }) {
    if (!posts?.length) return null;
  
    return (
      <div className="blog-recent">
        <h2>Recent Posts</h2>
        <div className="blog-recent-grid">
          {posts.map((post) => (
            <div key={post._id} className="blog-recent-item">
              <div className="blog-recent-date">
                {new Date(post._createdAt).toLocaleDateString()}
              </div>
              <div className="blog-recent-title">{post.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }