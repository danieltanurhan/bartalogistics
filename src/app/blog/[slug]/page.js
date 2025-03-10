import { Suspense } from 'react'
import BlogPostContent from '@/components/BlogPostContent'
import { constructMetadata } from '@/lib/metadata'
import JsonLd from '@/components/JsonLd'
import { blogService } from '@/services/blogService'
import { urlForImage } from '@/lib/sanity'

export async function generateMetadata({ params }) {
  const post = await blogService.getPost({ slug: params.slug })
  
  if (!post) return {}

  const imageUrl = post.mainImage ? urlForImage(post.mainImage) : null

  return constructMetadata({
    title: `${post.title} | Barta Logistics Blog`,
    description: post.description || post.excerpt,
    image: imageUrl,
    canonicalUrl: `https://bartalogistics.com/blog/${params.slug}`,
    type: 'article'
  })
}

export default async function BlogPost({ params }) {
  const post = await blogService.getPost({ slug: params.slug })
  
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.mainImage ? urlForImage(post.mainImage) : '',
    datePublished: post._createdAt,
    author: {
      '@type': 'Organization',
      name: post.author || 'Barta Logistics'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Barta Logistics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bartalogistics.com/logo.png' // Add your logo URL
      }
    }
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPostContent slug={post.slug} />
      </Suspense>
    </>
  )
}