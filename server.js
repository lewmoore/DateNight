const express = require('express');
const app = express();
let port = process.env.PORT || 8080;
let bodyParser   = require('body-parser');
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  function getValue() {
    var myarray = new Array("item1","item2","item3","item4","item5");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    return random
  }
  console.log(getValue)
  res.render('index', { getValue: getValue() })
})

app.listen(port)
console.log("You're on localhost " + port);

module.exports = app
