let name = `Huda Prasetyo`;
let someHtmlString = `
  <h1>Hello World - This is template literals</h1>
  Some dummy text that I learn.
  &copy; ${name}
`;

document.getElementById('template').innerHTML = someHtmlString