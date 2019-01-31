//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/betaAngularPwa'));

app.get('*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/betaAngularPwa/index.html'));
});

// Start the app by listening on the default Heroku port
console.log('Escuchando en http://127.0.0.1:8005');
app.listen(process.env.PORT || 8005);
