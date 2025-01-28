import { client } from '@/lib/sanity'

export default async function TestPage() {
  const posts = await client.fetch(`*[_type == "post"]{
    title,
    slug,
    publishedAt
  }`)

  return (
    <div>
      <h1>Test Posts</h1>
      {posts.map(post => (
        <div key={post.slug.current}>
          <h2>{post.title}</h2>
          <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  )
}