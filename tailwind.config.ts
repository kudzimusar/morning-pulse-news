 import type { Config } from "tailwindcss";
 
 export default {
   content: [
     "./index.html",
     "./*.tsx",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
     extend: {
       fontFamily: {
         sans: ['Inter', 'sans-serif'],
         serif: ['Playfair Display', 'Georgia', 'serif'],
       },
       colors: {
         whatsapp: {
           teal: 'hsl(168, 100%, 25%)',
           light: 'hsl(142, 70%, 49%)',
           bg: 'hsl(36, 24%, 90%)',
           outgoing: 'hsl(108, 100%, 93%)',
           incoming: 'hsl(0, 0%, 100%)',
         },
         newspaper: {
           cream: 'hsl(45, 30%, 96%)',
           ink: 'hsl(0, 0%, 10%)',
           muted: 'hsl(0, 0%, 40%)',
           accent: 'hsl(0, 70%, 45%)',
           border: 'hsl(0, 0%, 80%)',
         }
       }
     }
   },
   plugins: [],
 } satisfies Config;