const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Post request, when register button has been clicked and courseObjects have been sent
app.post('/', (req, res) => {
  // post logic here
  console.log('This has been reached!');
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.js file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`mas listening on ${port}`);