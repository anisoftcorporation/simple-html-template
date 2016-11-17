# simple-html-template
This is a very simple HTML template Engine for Node JS. Where you can choose what will be openning tag and closing tag

To install , execute the command 
**npm install simple-html-template**

To have it updated in dependencies section in your package.json too execute the below command for installing the module
**npm install simple-html-template --save**

To use this Template engine, in your Nodejs code

Below is Node code
```
//***Node JS code starts **/////////
var express = require('express')
var templ = require('simple-html-template'); /////Require the Module


var app = express()


app.engine('html', templ) /////Telling my App that files with .html extension will be rendered with this template engine. You can put anything you want
app.set('views', 'views') // specify the views directory
app.set('view engine', 'html') // register the template engine
app.set('open_tag','<?'); ////Optional , you can specify open_tag , default <?
app.set('close_tag','/?>'); ///Optional , you can specify close_tag default />

app.get('/', function (req, res) {
  `res.render('index', { title: 'Hey', message1: 'Hello there!',message2: 'how are you' }) /// index.html will be our template file , and we are passing parameters that will be displayed 
	  
})

app.listen(1947, function () {
  console.log('Example app listening on port 1947!')
})
```
///NodeJS code ended///////////////////////////////

Below is the ccontent of index.html which is inside views folder
```
<title>
<?title/?>
</title>
<body>
<h1><?message1/?></h1>
<p><?message2/?></p><h1><?message1/?></h1>
</body>
```

If you want to use other tags rather than <? and /? you can specify the same in app settings ass below
I am planning to use # as open tag and /# as close tag, so first i will be changing the below settings first
```
app.set('open_tag','#');
app.set('close_tag','/#');
```

Then i will modify my same index.html template file accordingly
```
<title>
#title/#
</title>
<body>
<h1>#message1/#</h1>
<p>#message2/#</p><h1>#message1/#</h1>
</body>
```
