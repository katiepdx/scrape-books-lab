// import pool, fs, and book model
const fs = require('fs');
const pool = require('../lib/utils/pool.js');
const store = require('../lib/store.js');

describe('Book model', () => {
  // drop tables before each test
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('tests that the books are stored to the database', async() => {
    const testBooks = [
      { 
        title: 'A Light in the Attic', 
        cover_image: 'catalogue/a-light-in-the-attic_1000/index.html', 
        rating: 'Three', 
        price: '£51.77', 
        in_stock: true 
      }, { 
        title: 'Test Book 2', 
        cover_image: 'catalogue/a-light-in-the-attic_1000/index.html', 
        rating: 'Three', 
        price: '£51.77', 
        in_stock: true 
      }, { 
        title: 'Test Book 3', 
        cover_image: 'catalogue/a-light-in-the-attic_1000/index.html', 
        rating: 'Three', 
        price: '£51.77', 
        in_stock: true 
      }
    ];

    // console.log('TEST_BOOKS', testBooks);

    // store testBook to db
    await store(testBooks);

    // Select everything from db
    const { rows } = await pool.query('SELECT * FROM books');

    // expect only two rows
    expect(rows).toHaveLength(3);

  });
});

