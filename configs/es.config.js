const html = require("@rollup/plugin-html");

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = {
  input: "src/module/main.js",
  output: {
    file: "output/es/main.js",
    format: "es",
  },
  plugins: [html()],
};
