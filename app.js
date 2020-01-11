const translate = require('moji-translate');
const express = require("express");
const app = express();
const port = process.env.port;
app.use(express.static('public')); //use static files in ROOT/public folder

app.get('/emoji', function(request, response){
  response.set('Content-Type', 'application/json');
  response.send(JSON.stringify({text:translate.translate(request.query.text)}));
});

app.listen(port, function(){
  console.log('App is running... on port', port);
});
