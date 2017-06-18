var url = require('url');
var fs = require('fs');

function render(pathToFile, response){
	fs.readFile(pathToFile, null, function(error, data){
		if(error){	
			response.writeHead(404);
			response.write('File not found');
		}else{
			response.write(data);
		}
		response.end();
	});
}

module.exports = {
	handleRequest: function(request, response){
		response.writeHead(200, {'Content-Type': 'text/html'});
		
		var pathToFile = url.parse(request.url).pathname;
		switch(pathToFile) {
		    case '/':
		    	render('./index.html', response);
		    	break;
		    case '/login':
		    	render('./login.html', response);
		    	break;
		    default:
		        response.writeHead(404);
		        response.write('Route not found');
		        response.end();
		}
	}
};