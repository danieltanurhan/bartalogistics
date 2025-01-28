import { Suspense } from 'react'
import BlogPostContent from '@/components/BlogPostContent'

export default async function BlogPost({ params }) {
  const {slug} = await params

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPostContent slug={slug} />
    </Suspense>
  )
}