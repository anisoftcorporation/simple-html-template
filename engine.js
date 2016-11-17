(function(){
  render = function (filePath, options, callback) { 
	  var fs = require('fs') 

		  //console.log();
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err)
    
	var keys = Object.keys(options);
	var open_tag = options.settings.open_tag;
	
	var close_tag = options.settings.close_tag;
	//console.log(close_tag);
	var rendered =content.toString();
  //  console.log(rendered);
	if(!open_tag)
	  {
	  open_tag = '<?';
	  
	  }
	if(!close_tag)
	  {
	  close_tag = '/?>';
	  
	  }
	//console.log("inside if");
	for(i=0;i<keys.length;i++)
	{

		var token = open_tag+keys[i]+close_tag;
	rendered = rendered.replace(token, options[keys[i]])
   
	
	}

	 
	 //console.log("I am here");
    
    return callback(null, rendered)
  })
}
  module.exports = render;
}).call(this);