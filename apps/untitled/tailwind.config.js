const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#1f2937',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      function hexToRgb(hex) {
        const value = hex.charAt(0) === '#' ? hex.substring(1, 7) : hex;

        return [
          parseInt(value.substring(0, 2), 16),
          parseInt(value.substring(2, 4), 16),
          parseInt(value.substring(4, 6), 16),
        ].join(',');
      }

      function extractColorVars(colorObj, colorGroup = '') {
        return Object.keys(colorObj).reduce((vars, colorKey) => {
          const value = colorObj[colorKey];
          const cssVariable =
            colorKey === 'DEFAULT'
              ? `--color${colorGroup}`
              : `--color${colorGroup}-${colorKey}`;

          const newVars =
            typeof value === 'string'
              ? {
                  [cssVariable]: value,
                  [`${cssVariable}-rgb`]: hexToRgb(value),
                }
              : extractColorVars(value, `-${colorKey}`);

          return { ...vars, ...newVars };
        }, {});
      }

      addBase({
        ':root': extractColorVars(theme('colors')),
      });
    },
  ],
};
