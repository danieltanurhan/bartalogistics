import BlogContent from '@/components/BlogContent'
import { Suspense } from 'react'

export default function Blog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  )
}