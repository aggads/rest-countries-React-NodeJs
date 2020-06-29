const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 4043;
const app = express();
var cors = require('cors');
app.use(cors());

app.use('/', require('./backend/routes/countries'));

app.use(favicon(__dirname + '/build/favicon.ico'));

app.use(express.static(__dirname+ '/'));
app.use(express.static(path.join(__dirname, '/build')));

// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build', 'index.html'));
});

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


app.listen(port, () => {
  console.log("Server running on port 4043");
 });

