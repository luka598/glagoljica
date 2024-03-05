/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'text': 'var(--text)',
      'text-fg': 'var(--text-fg)',
      'background': 'var(--background)',
      'background-fg': 'var(--background-fg)',
      'primary': 'var(--primary)',
      'primary-fg': 'var(--primary-fg)',
      'secondary': 'var(--secondary)',
      'secondary-fg': 'var(--secondary-fg)',
      'accent': 'var(--accent)',
      'accent-fg': 'var(--accent-fg)',
      'success': 'var(--success)',
      'success-fg': 'var(--success-fg)',
      'danger': 'var(--danger)',
      'danger-fg': 'var(--danger-fg)',
    },

  },
  plugins: [],
}