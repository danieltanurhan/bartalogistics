import { Suspense } from 'react'
import BlogPostContent from '@/components/BlogPostContent'

export default function BlogPost({ params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPostContent slug={params.slug} />
    </Suspense>
  )
}