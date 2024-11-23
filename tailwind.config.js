/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                apple: {
                    50: '#f0fdf2',
                    100: '#dcfce2',
                    200: '#bbf7c7',
                    300: '#8ff0a4',
                    400: '#4ade6a',
                    500: '#22c546',
                    600: '#16a335',
                    700: '#15802d',
                    800: '#166529',
                    900: '#145324',
                    950: '#052e10',
                },
            },
        },
    },
    plugins: [],
};
