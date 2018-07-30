const express = require('express');
const app = express();
let port = process.env.PORT || 8080;
let bodyParser   = require('body-parser');
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port)
console.log("You're on localhost " + port);

module.exports = app
