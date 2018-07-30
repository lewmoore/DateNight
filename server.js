const express = require('express');
const app = express();
let port = process.env.PORT || 8080;
let bodyParser   = require('body-parser');
app.use(bodyParser.json());
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  function GetValue() {
    var myarray= new Array("item1","item2","item3");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    return random
  }
  console.log(GetValue())
  res.render('index', { random: GetValue() })
})

app.listen(port)
console.log("You're on localhost " + port);

module.exports = app
