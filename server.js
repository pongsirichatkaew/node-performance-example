const express = require('express');

const app = express();

function delay(duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    //   event loop is blocked
  }
}

app.get('/', (req, res) => {
  // JSON.stringify
  // JSON.parse
  // [5,1,2].sort()
  // blocking event loops
  // crypto modules https://nodejs.org/api/crypto.html
  // server cant be started when use this but this only take a few seconds

  res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
  // delay the response
  delay(9000);
  res.send(`Ding ding ding! ${process.pid}`);
});

console.log(`Running server.js`);

// if (cluster.isMaster) {
//   console.log(`Master has been started...`);
//   const NUM_WORKERS = os.cpus().length;
//   // GET NUMBER OF LOGICAL CORES IN SERVER MACHINE
//   console.log('NUM_WORKERS', NUM_WORKERS);
//   for (let index = 0; index < NUM_WORKERS; index++) {
//     cluster.fork();
//   }
// } else {
//   console.log('Worker process started...');
//   app.listen(3000);
// }

console.log('Worker process started...');
app.listen(3000);
