// import request, parse, and store
const request = require('./lib/request.js');
const parser = require('./lib/parser.js');
const store = require('./lib/store.js');
const pool = require('./lib/utils/pool');

const addBooks = async() => {
  // make a request to the books website
  const getData = await request();

  // parse the document from the request 
  const allBooks = await parser(getData);

  // map through the books and store them to the db
  await store(allBooks);

  const count = await pool.query('SELECT COUNT(*) FROM books');

  console.log('TOTAL', count.rows[0].count);
};

addBooks();
