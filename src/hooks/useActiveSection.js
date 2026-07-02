import { useEffect, useState } from 'react';

// Scroll-spy: returns the id of the section currently in view.
export function useActiveSection(ids, options = {}) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id.replace('#', '')))
      .filter(Boolean);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1], ...options }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, options]);

  return active;
}
