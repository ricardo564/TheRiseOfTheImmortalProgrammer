/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#FF6B00',
        'menu-header': '#131E44',
        'menu-header-email': '#888888',
        'menu-text-primary': '#626262',
        'hover': '#C65200',
        'product-title': '#626262',
        'app-background': '#F5F5F5',
      },
      animation: {
        'fade-out': 'fade-out 5s ease-in-out',
        'fade-in-from-left': 'fade-in-from-left 0.2s ease-in-out',
        'fade-in-from-right': 'fade-in-from-right 0.2s ease-in-out',
      },
      keyframes: {
        'fade-out': {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0,
            transform: 'translateY( -100px )',
          },
        },
        'fade-in-from-left': {
          '0%': {
            opacity: 0,
            transform: 'translateX( -100px )',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX( 0 )',
          },
        },
        'fade-in-from-right': {
          '0%': {
            opacity: 0,
            transform: 'translateX( 100px )',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX( 0 )',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
