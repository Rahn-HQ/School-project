import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },boxShadow: {
        '3xl': '12px 12px 5px 0px rgba(20,39,56,0.75);',
      },dropShadow: {
        '3xl': '1px 2px 2px rgba(20,39,56,0.75)',
      }
    },
  },
  plugins: [],
}
export default config
