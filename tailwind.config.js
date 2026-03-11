export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00FFF0',
        'neon-magenta': '#FF00D4',
      },
      backgroundColor: {
        'black-90': 'rgba(0,0,0,0.9)',
        'black-95': 'rgba(0,0,0,0.95)',
        'black-98': 'rgba(0,0,0,0.98)',
        'white-90': 'rgba(255,255,255,0.9)',
        'white-95': 'rgba(255,255,255,0.95)',
        'white-98': 'rgba(255,255,255,0.98)',
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(90deg, #00FFF0, #FF00D4)',
        'gradient-135': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 10s ease-in-out infinite',
        'float-glow': 'float-glow 4s ease-in-out infinite',
        'subtle-float': 'subtle-float 6s ease-in-out infinite',
        'pulse': 'pulse 4s ease-in-out infinite',
        'shine': 'shine 8s ease-in-out infinite',
        'title-glow': 'title-glow 4s ease-in-out infinite alternate',
        'percentage-pulse': 'percentage-pulse 2s ease-in-out infinite',
        'rotate-gradient': 'rotate-gradient 4s linear infinite',
        'float-card': 'float-card 6s ease-in-out infinite',
        'float-service': 'float-service 6s ease-in-out infinite',
        'float-contact': 'float-contact 8s ease-in-out infinite',
        'float-card-contact': 'float-card-contact 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'pulse-available': 'pulse-available 2s infinite',
        'pulse-whatsapp': 'pulse-whatsapp 3s infinite',
        'scroll': 'scroll 40s linear infinite',
        'scroll-up': 'scroll-up 25s linear infinite',
        'particle-float': 'particle-float 20s infinite linear',
        'terminal-blink': 'terminal-blink 1s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(180deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(-180deg)' },
        },
        'float-glow': {
          '0%, 100%': { transform: 'translateY(0) scale(1)', boxShadow: '0 15px 35px rgba(0,0,0,0.4), 0 0 25px rgba(0,255,240,0.3), 0 0 50px rgba(0,255,240,0.1), inset 0 0 30px rgba(0,255,240,0.1)' },
          '50%': { transform: 'translateY(-15px) scale(1.01)', boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 35px rgba(0,255,240,0.4), 0 0 60px rgba(0,255,240,0.2), inset 0 0 40px rgba(0,255,240,0.15)' },
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.05)' },
        },
        shine: {
          '0%, 100%': { transform: 'rotate(45deg) translateX(-100%)' },
          '50%': { transform: 'rotate(45deg) translateX(200%)' },
        },
        'title-glow': {
          '0%': { textShadow: '0 15px 40px rgba(0,255,240,0.4), 0 0 50px rgba(0,255,240,0.3)' },
          '50%': { textShadow: '0 15px 50px rgba(0,255,240,0.5), 0 0 60px rgba(0,255,240,0.4), 0 0 70px rgba(255,0,212,0.3)' },
          '100%': { textShadow: '0 15px 40px rgba(0,255,240,0.4), 0 0 50px rgba(0,255,240,0.3), 0 0 80px rgba(255,0,212,0.4)' },
        },
        'percentage-pulse': {
          '0%, 100%': { transform: 'scale(1)', textShadow: '0 0 20px rgba(0,255,240,0.5)' },
          '50%': { transform: 'scale(1.05)', textShadow: '0 0 30px rgba(0,255,240,0.7), 0 0 40px rgba(255,0,212,0.3)' },
        },
        'rotate-gradient': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float-card': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'float-service': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        'float-contact': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-card-contact': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(0,255,240,0.25)' },
          '50%': { boxShadow: '0 0 30px rgba(0,255,240,0.5)' },
        },
        'pulse-available': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,255,240,0.3)' },
          '50%': { boxShadow: '0 0 15px rgba(0,255,240,0.5)' },
        },
        'pulse-whatsapp': {
          '0%, 100%': { boxShadow: '0 5px 20px rgba(0,0,0,0.3), 0 0 15px rgba(37,211,102,0.4)' },
          '50%': { boxShadow: '0 5px 25px rgba(0,0,0,0.4), 0 0 25px rgba(37,211,102,0.7)', transform: 'scale(1.05)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'particle-float': {
          '0%': { transform: 'translateY(100vh) translateX(0)' },
          '100%': { transform: 'translateY(-100px) translateX(100px)' },
        },
        'terminal-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}