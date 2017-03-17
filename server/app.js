//globals and requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var port = 5000;

//uses
app.use ( express.static( 'server/public') );

//get
app.get( '/', function( req, res ) {
  res.sendFile( path.resolve( 'server/public/views/index.html' ) );
  console.log('app.get');
});

//listen
app.listen( port, function() {
    console.log('listening');
});
