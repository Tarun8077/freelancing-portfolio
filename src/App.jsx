import { Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/common/SmoothScroll';
import ScrollProgress from './components/common/ScrollProgress';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <SmoothScroll>
      <a
        href="#top"
        className="sr-only rounded-btn bg-accent px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70]"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Navbar />
      <main id="top">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
