// import pool here
const pool = require('../utils/pool.js');

class Book {
  title;
  cover_image;
  rating;
  price;
  in_stock;

  constructor(row) {
    this.title = row.title;
    this.cover_image = row.cover_image;
    this.rating = row.rating;
    this.price = row.price;
    this.in_stock = row.in_stock;  
  }

  // insert book into database 
  static async insert(book) {
    const { rows } = await pool.query(
      'INSERT INTO books (title, cover_image, rating, price, in_stock) VALUES ($1, $2, $3, $4, $5) RETURNING *'
      , [book.title, book.cover_image, book.rating, book.price, book.in_stock]);

    return new Book(rows[0]);
  }
}

module.exports = Book;

