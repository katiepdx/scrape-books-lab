// parse takes in the document and returns an array of all the books and details 

const parser = (document) => {
  // get the book elements and ...spread into an array
  const allBookElements = [...document.querySelectorAll('.product_pod')];

  // map through
  const bookDetails = allBookElements.map(book => {
    return {
      // book title
      title: book.querySelector('h3>a').getAttribute('title'),
      // book coverImage
      coverImage: book.querySelector('.image_container>a').getAttribute('href'),
      // book rating
      rating: book.querySelector('p').getAttribute('class').split(' ').slice(-1)[0],
      // book price
      price: book.querySelector('.product_price>p').textContent,
      // book in_stock
      inStock: book.querySelector('.instock').textContent.includes('In stock') ? true : false
      
    };
  });

  // console.log('BOOK_DETAILS_PARSE_PAGE', bookDetails);

  return bookDetails;

};

module.exports = parser;
