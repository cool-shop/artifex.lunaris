/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'cat-darkest': '#1A0425',
                'cat-dark': '#320946',
                'cat-contrast': '#dd1155',
                'cat-light': '#fdfffc',
                'cat-contrast-light': '#F8B4CC',
                'cat-teal-light': '#1cd6d9',
                'cat-teal-dark': '#0f7173',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
