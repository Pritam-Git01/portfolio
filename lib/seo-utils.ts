/**
 * SEO Utility Functions
 * Helper functions for generating SEO-optimized metadata, structured data, and more
 */

export const siteConfig = {
  name: 'Pritam Kumar Yadav',
  title: 'Pritam Kumar Yadav | Full Stack Developer in Bengaluru, India',
  description: 'Experienced Full Stack Developer & Software Engineer in Bengaluru, India. Specializing in React, Node.js, Python, TypeScript. 2.8+ years building scalable applications.',
  url: 'https://pritamkumaryadav.com', // Update with your actual domain
  image: '/images/og-image.jpg',
  author: 'Pritam Kumar Yadav',
  location: 'Bengaluru, Karnataka, India',
  email: 'contact@pritamkumaryadav.com', // Update with your actual email
  social: {
    github: 'https://github.com/pritam-yadav',
    linkedin: 'https://linkedin.com/in/pritam-yadav',
    twitter: 'https://twitter.com/pritamyadav',
  }
};

/**
 * Generate page-specific metadata
 */
export function generateMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords = [],
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
}) {
  const fullTitle = title.includes('Pritam') ? title : `${title} | Pritam Kumar Yadav`;
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const imageUrl = image || siteConfig.image;
  
  const defaultKeywords = [
    'Pritam Kumar Yadav',
    'Full Stack Developer',
    'Software Engineer',
    'Bengaluru',
    'India',
  ];
  
  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${imageUrl}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${siteConfig.url}${imageUrl}`],
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Generate Article structured data for blog posts
 */
export function generateArticleSchema({
  title,
  description,
  image,
  datePublished,
  dateModified,
  authorName = siteConfig.author,
  url,
}: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': title,
    'description': description,
    'image': `${siteConfig.url}${image}`,
    'datePublished': datePublished,
    'dateModified': dateModified || datePublished,
    'author': {
      '@type': 'Person',
      'name': authorName,
      'url': siteConfig.url,
    },
    'publisher': {
      '@type': 'Person',
      'name': siteConfig.author,
      'logo': {
        '@type': 'ImageObject',
        'url': `${siteConfig.url}/images/logo.png`,
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}${url}`,
    },
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };
}

/**
 * Generate SoftwareSourceCode schema for projects
 */
export function generateSoftwareSchema({
  name,
  description,
  codeRepository,
  programmingLanguage,
  screenshot,
  url,
}: {
  name: string;
  description: string;
  codeRepository?: string;
  programmingLanguage: string[];
  screenshot?: string;
  url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    'name': name,
    'description': description,
    'codeRepository': codeRepository,
    'programmingLanguage': programmingLanguage.map(lang => ({
      '@type': 'ComputerLanguage',
      'name': lang,
    })),
    'author': {
      '@type': 'Person',
      'name': siteConfig.author,
      'url': siteConfig.url,
    },
    ...(screenshot && {
      'screenshot': `${siteConfig.url}${screenshot}`,
    }),
    ...(url && {
      'url': url,
    }),
  };
}

/**
 * Generate Review/Rating schema
 */
export function generateReviewSchema({
  itemName,
  authorName,
  reviewBody,
  ratingValue,
  bestRating = 5,
  datePublished,
}: {
  itemName: string;
  authorName: string;
  reviewBody: string;
  ratingValue: number;
  bestRating?: number;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    'itemReviewed': {
      '@type': 'Person',
      'name': itemName,
    },
    'author': {
      '@type': 'Person',
      'name': authorName,
    },
    'reviewRating': {
      '@type': 'Rating',
      'ratingValue': ratingValue,
      'bestRating': bestRating,
    },
    'reviewBody': reviewBody,
    'datePublished': datePublished,
  };
}

/**
 * Clean and format text for SEO
 */
export function cleanTextForSEO(text: string, maxLength?: number): string {
  let cleaned = text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim();
    
  if (maxLength && cleaned.length > maxLength) {
    cleaned = cleaned.substring(0, maxLength - 3) + '...';
  }
  
  return cleaned;
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

/**
 * Generate alt text for images based on context
 */
export function generateAltText(
  context: 'profile' | 'project' | 'blog' | 'skill' | 'generic',
  details?: string
): string {
  const baseAlt = 'Pritam Kumar Yadav';
  
  switch (context) {
    case 'profile':
      return `${baseAlt} - Full Stack Developer and Software Engineer in Bengaluru, India`;
    case 'project':
      return `${details} - Project by ${baseAlt}`;
    case 'blog':
      return `${details} - Article by ${baseAlt}`;
    case 'skill':
      return `${details} - Technology used by ${baseAlt}`;
    default:
      return details || baseAlt;
  }
}

/**
 * Extract keywords from text
 */
export function extractKeywords(text: string, minLength = 3): string[] {
  const words = text.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .split(/\s+/)
    .filter(word => word.length >= minLength);
    
  // Remove common stop words
  const stopWords = new Set([
    'the', 'is', 'at', 'which', 'on', 'a', 'an', 'and', 'or', 'but',
    'in', 'with', 'to', 'for', 'of', 'as', 'by', 'that', 'this',
  ]);
  
  return [...new Set(words.filter(word => !stopWords.has(word)))];
}

/**
 * Calculate reading time for blog posts
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Format date for structured data (ISO 8601)
 */
export function formatDateForSchema(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toISOString();
}

/**
 * Generate meta tags for social sharing
 */
export function generateSocialTags({
  title,
  description,
  image,
  url,
  twitterHandle,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
  twitterHandle?: string;
}) {
  return {
    // Open Graph
    'og:title': title,
    'og:description': description,
    'og:image': `${siteConfig.url}${image}`,
    'og:url': `${siteConfig.url}${url}`,
    'og:type': 'website',
    'og:site_name': siteConfig.name,
    
    // Twitter
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': `${siteConfig.url}${image}`,
    ...(twitterHandle && { 'twitter:creator': twitterHandle }),
  };
}

/**
 * Validate and sanitize URL
 */
export function sanitizeUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    return urlObj.toString();
  } catch {
    return url.replace(/[^a-zA-Z0-9-_./]/g, '');
  }
}

/**
 * Generate sitemap entry
 */
export function generateSitemapEntry({
  url,
  lastModified,
  changeFrequency = 'monthly',
  priority = 0.5,
}: {
  url: string;
  lastModified?: Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}) {
  return {
    url: `${siteConfig.url}${url}`,
    lastModified: lastModified || new Date(),
    changeFrequency,
    priority: Math.min(Math.max(priority, 0), 1), // Clamp between 0 and 1
  };
}