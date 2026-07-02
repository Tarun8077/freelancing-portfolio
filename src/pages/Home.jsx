import { lazy, Suspense } from 'react';
import Seo from '../components/common/Seo';
import { personJsonLd } from '../data/site';
import Hero from '../sections/Hero';
import Services from '../sections/Services';

// Below-the-fold sections are code-split and loaded on demand.
const Projects = lazy(() => import('../sections/Projects'));
const About = lazy(() => import('../sections/About'));
const Process = lazy(() => import('../sections/Process'));
const Capabilities = lazy(() => import('../sections/Capabilities'));
const WhyMe = lazy(() => import('../sections/WhyMe'));
const Faq = lazy(() => import('../sections/Faq'));
const Contact = lazy(() => import('../sections/Contact'));

export default function Home() {
  return (
    <>
      <Seo jsonLd={personJsonLd} />
      <Hero />
      <Services />
      <Suspense fallback={<div className="min-h-screen" aria-hidden />}>
        <Projects />
        <About />
        <Process />
        <Capabilities />
        <WhyMe />
        <Faq />
        <Contact />
      </Suspense>
    </>
  );
}
