/* eslint-disable no-console */
// import task queue - for producer to add jobs to 
const { booksQueue } = require('./lib/queue.js');
const pool = require('./lib/utils/pool.js');
const fs = require('fs');

// drop tables if exists before add jobs
pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));

// wrap all tasks in a Promise
// spread array of 50 (pages)
Promise.all([...Array(50)]
  // map through (num, index) and add jobs (objects)
  .map((_, index) => booksQueue.add({ page: index + 1 })))

  // then log with a confirmation message that jobs were added to the queue
  .then(() => console.log('New jobs were added to the queue!'));


