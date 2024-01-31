/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                custom: '-4px 4px 26px 0px rgba(75, 100, 119, 0.69), 4px 4px 16px 0px rgba(255, 255, 255, 0.15), 4px 4px 26px 0px rgba(255, 255, 255, 0.37);',
            },
            rotate: {
                custom: '-9.253deg',
            },
        },
        fontFamily: {
            Poppins: ['Poppins', 'sans-serif'],
            Avenir: ['Inter', 'sans-serif'],
        },
    },
    plugins: [],
};
