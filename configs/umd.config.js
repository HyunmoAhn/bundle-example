const html = require("@rollup/plugin-html");

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = {
  input: "src/module/main.js",
  output: {
    file: "output/umd/main.js",
    format: "umd",
  },
  plugins: [html()],
};
