const defaultTheme = require('tailwindcss/defaultTheme');

// im using this simply because webstorm doesn't work well with tailwind ;)
function rem2px(input, fontSize = 16) {
    if (input == null) {
        return input;
    }
    switch (typeof input) {
        case 'object':
            if (Array.isArray(input)) {
                return input.map((val) => rem2px(val, fontSize));
            }
            const ret = {};
            for (const key in input) {
                ret[key] = rem2px(input[key], fontSize);
            }
            return ret;
        case 'string':
            return input.replace(
                /(\d*\.?\d+)rem$/,
                (_, val) => `${parseFloat(val) * fontSize}px`,
            );
        case 'function':
            return eval(input.toString().replace(
                /(\d*\.?\d+)rem/g,
                (_, val) => `${parseFloat(val) * fontSize}px`,
            ));
        default:
            return input;
    }
}

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      ...rem2px(defaultTheme),
      extend: {

      }
    },

    plugins: [],
}