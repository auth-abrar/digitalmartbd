import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digitalmartbd.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/checkout', '/order-confirmation/', '/account'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
