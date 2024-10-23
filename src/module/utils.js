export const util = () => {
  const body = document.querySelector("body");
  const prevHTML = body.innerHTML;

  body.innerHTML = `
    ${prevHTML}
     <h2>Utils JS render</h2>
  `;
};
