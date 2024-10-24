const html = require("@rollup/plugin-html");

const template = (script) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rollup Bundle</title>
  </head>
  <body>
    ${script}
  </body>
  </html>`;
};

/**
 * @type {import('rollup').RollupOptions}
 */
module.exports = {
  input: "src/module/main.js",
  output: {
    file: "output/amd/main.js",
    format: "amd",
  },
  plugins: [
    html({
      template: ({ files }) => {
        const requireJsCDN =
          "https://requirejs.org/docs/release/2.3.7/minified/require.js";
        const scripts = files.js
          .map(({ fileName }) => {
            return `<script data-main="${fileName}" src="${requireJsCDN}"></script>`;
          })
          .join("\n");

        return template(scripts);
      },
    }),
  ],
};
