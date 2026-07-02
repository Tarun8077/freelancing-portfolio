/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0A0B',
        elevated: '#141416',
        'elevated-2': '#1C1C20',
        'border-subtle': '#26262B',
        primary: '#F5F5F7',
        secondary: '#A1A1AA',
        muted: '#82828B',
        accent: {
          DEFAULT: '#2563EB',
          bright: '#4D8BFF',
          soft: '#3B82F6',
        },
        success: '#22C55E',
      },
      fontFamily: {
        display: ['Satoshi', 'Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6vw, 5.5rem)', { lineHeight: '1.03', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        heading: ['clamp(1.35rem, 2vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        container: '1280px',
        prose: '65ch',
      },
      spacing: {
        section: 'clamp(5rem, 10vw, 10rem)',
        'section-sm': 'clamp(3.5rem, 7vw, 6rem)',
      },
      borderRadius: {
        card: '12px',
        btn: '10px',
      },
      backgroundImage: {
        'accent-radial':
          'radial-gradient(60% 60% at 50% 40%, rgba(59,130,246,0.28) 0%, rgba(59,130,246,0.08) 40%, transparent 70%)',
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 40px -12px rgba(0,0,0,0.6)',
        glow: '0 0 40px -4px rgba(59,130,246,0.35)',
        'glow-lg': '0 0 80px -8px rgba(59,130,246,0.45)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.85)' },
        },
        'aura-breathe': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gradient-orbit': {
          '0%': { transform: 'translate(-8%, -6%) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(6%, 4%) rotate(120deg) scale(1.08)' },
          '66%': { transform: 'translate(-4%, 8%) rotate(240deg) scale(0.96)' },
          '100%': { transform: 'translate(-8%, -6%) rotate(360deg) scale(1)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'aura-breathe': 'aura-breathe 8s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'gradient-orbit': 'gradient-orbit 14s ease-in-out infinite',
        'float-y': 'float-y 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
