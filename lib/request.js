// import JSDOM and node-fetch
const { JSDOM } = require('jsdom');
const fetch = require('node-fetch');

// request function for a page
const request = async(page) => {
  // make request to the site and await for response
  const response = await fetch(`http://books.toscrape.com/catalogue/page-${page}.html`);
  
  // get the html
  const html = await response.text();

  // get dom
  const dom = new JSDOM(html);

  // return the document
  return dom.window.document;
};

module.exports = request;

