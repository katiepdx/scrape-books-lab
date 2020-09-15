// import task queue - for producer to add jobs to 
const { booksQueue } = require('./lib/queue.js');

// wrap all tasks in a Promise
// spread array of 50 (pages)
Promise.all([...Array(50)]
  // map through (num, index) and add jobs (objects)
  .map((_, index) => booksQueue.add({ page: index + 1 })))
  
  // then log with a confirmation message that jobs were added to the queue
  .then(() => console.log('New jobs were added to the queue!'));


