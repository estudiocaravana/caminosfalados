/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Poppins', 'sans-serif'],
		  },
		extend: {
			aspectRatio: {
				'oro': '1 / 1.62',
			  },
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
	  ],
}
