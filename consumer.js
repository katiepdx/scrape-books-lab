// import task queue - for consumer to dequeue jobs fromm 
const { booksQueue } = require('./lib/queue.js');

// assign 3 workers to process task/book queue 
// add dirname so file path works on anyone's computer
booksQueue.process(3, `${__dirname}/scrape-worker.js`);
