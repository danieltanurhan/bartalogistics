import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: dataset,
  useCdn: true,
  apiVersion: apiVersion,
  // Add these CORS related settings
  token: process.env.SANITY_API_TOKEN,
  ignoreBrowserTokenWarning: true
})
