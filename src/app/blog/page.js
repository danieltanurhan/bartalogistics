import BlogContent from '@/components/BlogContent'

export default function Blog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogContent />
    </Suspense>
  )
}