"use client";

import Script from 'next/script';

export function StructuredData() {
  // Person Schema - Primary structured data
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://pritamkumaryadav.com/#person",
    "name": "Pritam Kumar Yadav",
    "alternateName": "Pritam Yadav",
    "url": "https://pritamkumaryadav.com",
    "image": {
      "@type": "ImageObject",
      "url": "https://pritamkumaryadav.com/images/profile.jpg",
      "width": 800,
      "height": 800
    },
    "jobTitle": "Full Stack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Software Developer"
    },
    "description": "Experienced Full Stack Developer and Software Engineer specializing in building scalable web applications with React, Node.js, Python, and cloud technologies.",
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Full Stack Development",
      "Frontend Engineering",
      "Backend Engineering",
      "Software Engineering",
      "Web Development",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Kafka",
      "RabbitMQ",
      "Microservices Architecture",
      "RESTful APIs",
      "GraphQL",
      "Machine Learning",
      "Cloud Computing"
    ],
    "knowsLanguage": [
      {
        "@type": "Language",
        "name": "English",
        "alternateName": "en"
      },
      {
        "@type": "Language",
        "name": "Hindi",
        "alternateName": "hi"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": {
        "@type": "Country",
        "name": "India"
      }
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Bachelor's in Computer Science"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "name": "Bachelor's Degree in Computer Science"
      }
    ],
    "award": [
      "2.9+ Years of Professional Experience",
      "50+ Projects Completed",
      "10+ Technical Certifications"
    ],
    "sameAs": [
      "https://github.com/pritam-yadav",
      "https://linkedin.com/in/pritam-yadav",
      "https://twitter.com/pritamyadav",
      "https://dev.to/pritam-yadav",
      "https://stackoverflow.com/users/pritam-yadav"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Professional Inquiries",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  // ProfilePage Schema
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": "https://pritamkumaryadav.com/#profilepage",
    "mainEntity": {
      "@id": "https://pritamkumaryadav.com/#person"
    },
    "url": "https://pritamkumaryadav.com",
    "name": "Pritam Kumar Yadav - Full Stack Developer Portfolio",
    "description": "Professional portfolio showcasing software development projects, technical skills, and experience of Pritam Kumar Yadav, a Full Stack Developer based in Bengaluru, India."
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://pritamkumaryadav.com/#website",
    "url": "https://pritamkumaryadav.com",
    "name": "Pritam Kumar Yadav Portfolio",
    "description": "Official portfolio of Pritam Kumar Yadav - Full Stack Developer and Software Engineer in Bengaluru, India",
    "publisher": {
      "@id": "https://pritamkumaryadav.com/#person"
    },
    "inLanguage": "en-IN",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://pritamkumaryadav.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // WebPage Schema
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://pritamkumaryadav.com/#webpage",
    "url": "https://pritamkumaryadav.com",
    "name": "Pritam Kumar Yadav | Full Stack Developer in Bengaluru, India",
    "description": "Experienced Full Stack Developer & Software Engineer in Bengaluru. Specializing in React, Node.js, Python, TypeScript. 2.8+ years building scalable applications.",
    "isPartOf": {
      "@id": "https://pritamkumaryadav.com/#website"
    },
    "about": {
      "@id": "https://pritamkumaryadav.com/#person"
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://pritamkumaryadav.com/images/og-image.jpg"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://pritamkumaryadav.com"
        }
      ]
    }
  };

  // Offer Schema (for hiring/services)
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Full Stack Development Services",
      "description": "Professional software development services including web application development, API development, cloud deployment, and technical consulting.",
      "provider": {
        "@id": "https://pritamkumaryadav.com/#person"
      },
      "serviceType": [
        "Full Stack Development",
        "Frontend Development",
        "Backend Development",
        "Web Application Development",
        "API Development",
        "Cloud Architecture",
        "Technical Consulting"
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Bengaluru",
          "containedIn": {
            "@type": "State",
            "name": "Karnataka",
            "containedIn": {
              "@type": "Country",
              "name": "India"
            }
          }
        },
        {
          "@type": "Country",
          "name": "India"
        },
        "Global"
      ]
    },
    "availability": "https://schema.org/InStock",
    "availableAtOrFrom": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      }
    }
  };

  // Organization Schema (if freelancing)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://pritamkumaryadav.com/#organization",
    "name": "Pritam Kumar Yadav - Software Development",
    "url": "https://pritamkumaryadav.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://pritamkumaryadav.com/images/logo.png"
    },
    "founder": {
      "@id": "https://pritamkumaryadav.com/#person"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Professional Services",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://github.com/pritam-yadav",
      "https://linkedin.com/in/pritam-yadav",
      "https://twitter.com/pritamyadav"
    ]
  };

  return (
    <>
      {/* Person Schema */}
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />

      {/* ProfilePage Schema */}
      <Script
        id="profilepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema)
        }}
      />

      {/* WebSite Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />

      {/* WebPage Schema */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema)
        }}
      />

      {/* Offer Schema */}
      <Script
        id="offer-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(offerSchema)
        }}
      />

      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </>
  );
}