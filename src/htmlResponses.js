const fs = require('fs');

const css = fs.readFileSync(`${__dirname}/../client/style.css`);
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const loadHTML = (request, response, page) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page);
  response.end();
};
const serveFile = (response, file, contentType) => {
  response.writeHead(200, { 'Content-Type': contentType });
  response.write(file);
  response.end();
};
const getIndex = (request, response) => {
  loadHTML(request, response, index);
};
const getCSS = (request, response) => {
  serveFile(response, css, 'text/css');
};
module.exports = {
  getIndex,
  getCSS,
};
