// Import Book model for the insert method
const Book = require('./models/Book.js');

// map through books and store them to db function
const store = (allBooks) => {
  return Promise.all(
    allBooks.map((book) => Book.insert(book))
  );
};

module.exports = store;
