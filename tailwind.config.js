/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
 darkMode: 'class', // или 'media' для prefers-color-scheme
 theme: {
    extend: {
        colors: {
            // Добавляем к стандартной палитре
            'brand': {
            50: '#f0f9ff',
            100: '#e0f2fe',
            500: '#0ea5e9', // Основной брендовый
            900: '#0c4a6e',
            },
            // Или переопределяем
            'blue': {
            500: '#3b82f6', // Заменяем стандартный синий
            }
        },
        fontFamily: {
            // Подключаем кастомные шрифты
            'sans': ['Inter', 'system-ui', 'sans-serif'],
            'mono': ['Fira Code', 'monospace'],
            'display': ['Gilroy', 'sans-serif'],
        },
        fontSize: {
            // Добавляем кастомные размеры
            'xxs': '0.625rem', // 10px
            '10xl': '10rem',
        },
        screens: {
            // Добавляем свои брейкпоинты
            'xs': '475px', // Маленькие телефоны
            '3xl': '1920px', // 4K мониторы

            // Или переопределяем существующие
            'lg': '1100px', // Вместо 1024px

            // Max-width брейкпоинты
            'max-md': {'max': '767px'}, // @media (max-width: 767px)

            // Диапазоны
            'tablet': {'min': '640px', 'max': '1023px'},
        }
    },
},
 plugins: [],
}
