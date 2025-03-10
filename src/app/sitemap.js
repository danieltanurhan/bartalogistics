export default async function sitemap() {
  const baseUrl = 'https://bartalogistics.com'

  // Basic pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/cbm-calculator',
    '/blog',
    '/services/air-freight',
    '/services/sea-freight',
    '/services/road-freight',
    '/services/rail-freight',
    '/services/international-moving',
    '/services/warehousing',
    '/services/value-added',
    '/industries/automotive',
    '/industries/technology',
    '/industries/chemicals',
    '/industries/consumer-goods-and-retail',
    '/industries/fair-and-events',
    '/industries/perishables',
    '/industries/relief-cargo-movement-and-defense',
    '/industries/antique-and-arts',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }))

  return [...routes]
}
