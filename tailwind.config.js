  // tailwind.config.js
  module.exports = {
    purge: {
      content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

      options: {
        safelist: ['text-indigo-400', 'bg-green-400', 'rounded', 'font-semibold', 'text-gray-600']
      }
    } ,
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [
       require('@tailwindcss/forms')
      ],
   }