// import request 
const request = require('../lib/request.js');

describe('Book model request function', () => {
  it('tests that the request function makes a request to the books to scrape', async() => {
    const document = await request();
    
    // find an element on the page and set the expected for that content 
    expect(document.querySelector('.action>h1').textContent).toEqual('All products');
  });
});
