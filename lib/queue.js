// import bull 
const Queue = require('bull');

// make a new task queue in redis
const booksQueue = new Queue('tasks', {
  redis: process.env.REDIS_URL
});

// export the booksQueue to use elsewhere 
module.exports = {
  booksQueue
};
