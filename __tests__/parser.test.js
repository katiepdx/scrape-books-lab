const parser = require('../lib/parser.js');
const request = require('../lib/request.js');

describe('tests the book parse function', () => {
  it('should take the document html and return an array of all the books and their details', async() => {
    
    // get the document
    const document = await request();

    // get the li/the books from the document
    const bookDetails = await parser(document);

    // console.log('BOOK DETAILS', bookDetails);

    // expect to equal an array containing a random book and details from page.

    expect(bookDetails).toEqual(expect.arrayContaining([
      { title: 'A Light in the Attic', coverImage: 'catalogue/a-light-in-the-attic_1000/index.html', rating: 'Three', price: '£51.77', inStock: true },
      { title: 'Sapiens: A Brief History of Humankind', coverImage: 'catalogue/sapiens-a-brief-history-of-humankind_996/index.html', rating: 'Five', price: '£54.23', inStock: true }
    ]));

  });
});
