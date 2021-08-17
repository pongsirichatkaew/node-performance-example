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

  res.send('Performance examples');
});

app.get('/timer', (req, res) => {
  // delay the response
  delay(9000);
  res.send('Ding ding ding!');
});

app.listen(3000);
