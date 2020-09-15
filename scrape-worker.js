/* eslint-disable no-console */
// import request, parse, store, and pool
const request = require('./lib/request.js');
const parser = require('./lib/parser.js');
const store = require('./lib/store.js');
const pool = require('./lib/utils/pool');

// add books for one page - pass in a job
module.exports = async(job) => {
  // log job status - each job has a page
  console.log(`From scrape.js page. About to scrape page ${job.data.page} from books to scrape site.`);

  // make a request to the books website
  const getData = await request(job.data.page);

  // parse the document from the request 
  const allBooks = await parser(getData);

  // map through the books and store them to the db
  await store(allBooks);

  // count of books in db
  const count = await pool.query('SELECT COUNT(*) FROM books');

  console.log('TOTAL', count.rows[0].count);
};

