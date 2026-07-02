// Central site configuration & contact info
export const site = {
  name: 'Tarun Sherwal',
  monogram: 'TS',
  title: 'Full Stack Developer',
  tagline: 'Helping businesses transform ideas into fast, scalable, and user-focused web applications.',
  location: 'Greater Noida, India',
  email: 'tarunsherwal007@gmail.com',
  github: 'https://github.com/Tarun8077',
  linkedin: 'https://www.linkedin.com/in/tarun-kumar-sherwal-29b049208',
  resume: '/resume.pdf',
  available: true,
  replyTime: 'within 24 hours',
  meta: {
    title: 'Tarun Sherwal — Full Stack Developer',
    description:
      'Full Stack Developer helping startups, restaurants, and businesses build fast, modern, high-performing websites and web apps. Available for freelance projects worldwide.',
    url: 'https://tarunsherwal.dev',
    ogImage: '/og-image.png',
  },
};

// schema.org Person structured data for rich search results
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  jobTitle: site.title,
  description: site.meta.description,
  url: site.meta.url,
  image: `${site.meta.url}${site.meta.ogImage}`,
  email: `mailto:${site.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Greater Noida',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  sameAs: [site.linkedin, site.github],
  knowsAbout: [
    'Full Stack Development',
    'React',
    'Python',
    'AI Web Applications',
    'Web Design',
  ],
};

// Order mirrors the page's section flow so scroll-spy highlights progress linearly.
export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

// EmailJS — replace with real IDs (see .env.example)
export const emailjs = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};
