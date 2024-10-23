define((function () { 'use strict';

  const util = () => {
    const body = document.querySelector("body");
    const prevHTML = body.innerHTML;

    body.innerHTML = `
    ${prevHTML}
     <h2>Utils JS render</h2>
  `;
  };

  const body = document.querySelector("body");

  body.innerHTML = "<h1>Main JS render</h1>";
  util();

}));
