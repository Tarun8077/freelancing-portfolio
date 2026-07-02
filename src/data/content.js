import {
  HiOutlineChatBubbleLeftRight,
  HiOutlinePencilSquare,
  HiOutlineCommandLine,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';

// ---- About: skill groups ----
export const skillGroups = [
  { label: 'Frontend', skills: ['React', 'JavaScript', 'Tailwind CSS'] },
  { label: 'Backend', skills: ['Python', 'FastAPI', 'Flask', 'REST APIs'] },
  { label: 'Data & AI', skills: ['TensorFlow', 'PostgreSQL'] },
  { label: 'Tools', skills: ['Git', 'GitHub'] },
];

export const valueChips = [
  'Business-first thinking',
  'Performance-focused',
  'Clear communication',
  'On-time delivery',
];

// ---- Animated counters ----
export const stats = [
  { value: 3, suffix: '+', label: 'Projects shipped' },
  { value: 9, suffix: '', label: 'Services offered' },
  { value: 24, suffix: 'h', label: 'Reply time' },
  { value: 100, suffix: '%', label: 'Client-focused' },
];

// ---- Process ----
export const processSteps = [
  {
    icon: HiOutlineChatBubbleLeftRight,
    step: '01',
    title: 'Discovery',
    description:
      'We talk through your goals, your users, and your budget. I make sure I truly understand the problem before writing a single line of code.',
  },
  {
    icon: HiOutlinePencilSquare,
    step: '02',
    title: 'Design & Plan',
    description:
      'I map out the structure, the look, and the tech — so you know exactly what you are getting before we build.',
  },
  {
    icon: HiOutlineCommandLine,
    step: '03',
    title: 'Build',
    description:
      'I develop your project with clean, fast, scalable code — and keep you updated along the way, so you are never left in the dark.',
  },
  {
    icon: HiOutlineRocketLaunch,
    step: '04',
    title: 'Launch & Support',
    description:
      'We go live, and I make sure everything runs perfectly. Ongoing support is always available when you need it.',
  },
];

// ---- Why work with me / interim social proof ----
export const whyReasons = [
  {
    title: 'Business-First',
    description:
      'I do not just build what you ask for. I understand why you need it — and build for the outcome.',
  },
  {
    title: 'Clear Communication',
    description:
      'No jargon, no ghosting. You will always know where your project stands, in plain language.',
  },
  {
    title: 'Fast & Reliable',
    description:
      'Modern, optimized builds that load fast and hold up — delivered on the timeline we agree on.',
  },
];

// ---- Founder's promise (first-person commitment; swap for a client quote once collected) ----
export const testimonials = [
  {
    eyebrow: 'My promise to you',
    quote:
      "I treat every project like it's my own business on the line — senior-level care, honest communication, and work built to perform, not just to look good. When you win, I win.",
    name: 'Tarun Sherwal',
    role: 'Full Stack Developer',
  },
];

// ---- FAQ ----
export const faqs = [
  {
    q: 'How much does a website or app cost?',
    a: 'Every project is different, so I do not do one-size-fits-all pricing. Tell me your goals and I will give you a clear, honest quote — no hidden fees, no surprises.',
  },
  {
    q: 'How long does a project take?',
    a: 'A landing page can be ready in days; a full web app takes longer. Once I understand your scope, I will give you a realistic timeline and stick to it.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes — I work remotely with clients worldwide. Location is never a barrier.',
  },
  {
    q: 'I am not technical. Is that a problem?',
    a: 'Not at all. I explain everything in plain language and handle the technical side for you. You focus on your business; I will handle the code.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. I offer ongoing maintenance and support to keep your site fast, secure, and up to date.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Absolutely. I can modernize an outdated site into something premium, fast, and mobile-friendly — often without starting from scratch.',
  },
  {
    q: 'What kinds of businesses do you work with?',
    a: 'Startups, restaurants, entrepreneurs, agencies, and small businesses — anyone who wants a website or app that actually works for them.',
  },
];

// ---- Contact form service options ----
export const serviceOptions = [
  'Business Website',
  'Landing Page',
  'Full-Stack Web App',
  'AI Application',
  'Dashboard',
  'API Development',
  'Website Redesign',
  'Fixes & Maintenance',
  'Something else',
];

export const budgetOptions = [
  'Not sure yet',
  'Under ₹25k',
  '₹25k–₹75k',
  '₹75k–₹2L',
  '₹2L+',
];
