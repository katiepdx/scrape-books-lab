// import JSDOM and node-fetch
const { JSDOM } = require('jsdom');
const fetch = require('node-fetch');

// request function 
const request = async() => {
  // make request to the site and await for response
  const response = await fetch('http://books.toscrape.com/');
  
  // get the html
  const html = await response.text();

  // get dom
  const dom = new JSDOM(html);

  // return the document
  return dom.window.document;
};

module.exports = request;

