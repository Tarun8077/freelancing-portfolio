import { HiArrowRight } from 'react-icons/hi2';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found — Tarun Sherwal" />
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0 bg-accent-radial opacity-40" aria-hidden />
        <div className="relative z-10 flex max-w-lg flex-col items-center gap-6 text-center">
          <span className="label-mono">Error 404</span>
          <h1 className="text-display-lg font-semibold">Lost the thread.</h1>
          <p className="text-lg text-secondary">
            This page doesn&apos;t exist — but your project could. Let&apos;s build something real
            instead.
          </p>
          <Button as="a" href="/" variant="primary" size="lg">
            Back to Home
            <HiArrowRight />
          </Button>
        </div>
      </section>
    </>
  );
}
