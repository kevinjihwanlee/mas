const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const suggestedClasses = require('./mas_find_classes/ok_classes')

const app = express();

//app.use(bodyParser.json());

app.use(bodyParser.json({limit: '50mb', parameterLimit: 1000000}));


// supports parsing of application/x-www-form-urlencoded post data
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Post request, when register button has been clicked and courseObjects have been sent
app.post('/register', (req, res) => {
  // post logic here
  res.setHeader('Content-Type', 'application/json');
  console.log(suggestedClasses(req.body).length)
  console.log('This has been reached!');
  res.json(200, {success: true});
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.js file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`mas listening on ${port}`);
