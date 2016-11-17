var express = require('express')
var templ = require('simple-html-template');


var app = express()
app.engine('baba', templ)
app.set('views', 'views') // specify the views directory
app.set('view engine', 'baba') // register the template engine
app.set('open_tag','<?');
//app.set('close_tag','/?>');

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message1: 'Hello there!',message2: 'how are you' })
	  
})

app.listen(1947, function () {
  console.log('Example app listening on port 1947!')
})