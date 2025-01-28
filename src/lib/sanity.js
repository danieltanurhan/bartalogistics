import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  // Add these CORS related settings
  token: process.env.SANITY_API_TOKEN, // if you have private data
  withCredentials: true,
  ignoreBrowserTokenWarning: true
})

// Set up image URL builder
const builder = imageUrlBuilder(client)
export const urlForImage = (source) => {
  if (!source) return null; // Add null check
  return builder.image(source).url() // Add .url() to generate the actual URL string
}