const parser = require('../lib/parser.js');
const request = require('../lib/request.js');

describe('tests the book parse function', () => {
  it('should take the document html and return an array of all the books and their details', async() => {
    
    // get the document
    const document = await request(2);

    // get the li/the books from the document
    const bookDetails = await parser(document);

    // console.log('BOOK DETAILS', bookDetails);

    // expect to equal an array containing a random book and details from page.

    expect(bookDetails).toEqual(expect.arrayContaining([
      { title: 'In Her Wake', cover_image: 'in-her-wake_980/index.html', rating: 'One', price: '£12.84', in_stock: true },
      { title: 'The Four Agreements: A Practical Guide to Personal Freedom', cover_image: 'the-four-agreements-a-practical-guide-to-personal-freedom_970/index.html', rating: 'Five', price: '£17.66', in_stock: true }
    ]));

  });
});
