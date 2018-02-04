var express = require("express"),
    app = express(),
    request = require('request'),
    bodyparser = require('body-parser'),
    path = require('path');


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/error', (req, res) => {
  res.render('error');
});


app.listen(process.env.PORT || 3000, () => {
  console.log('Server started...');
});
