//globals and requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 5000;

//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

//get
app.get('/', function(req, res) {
    res.sendFile(path.resolve('server/public/views/index.html'));
    console.log('app.get');
});

//POST
app.post('/calculator', function(req, res) {
    console.log('Rock City!');
    console.log( req.body );
    var input = req.body;
    calculationStation(input);
    res.send(answer);
    res.sendStatus(200);
});

//listen
app.listen(port, function() {
    console.log( 'listening' );
});

function calculationStation() {
    var answer = 0
    console.log('calculationStation');
    if ( input.type = 'add' ) {
        return ( answer = input.x + input.y );
    } else if ( type = 'subtract' ) {
        return ( answer = input.x - input.y );
    } else if ( type = 'multiply' ) {
        return ( answer = input.x * input.y );
    } else if ( type  = 'divide' ) {
        return ( answer = input.x / input.y );
    };
} //end calculationStation

// function add(x, y) {
//     return (x + y);
// } //end add
//
// function subtract(x, y) {
//     return (x - y);
// } //end subtract
//
// function multiply(x, y) {
//     return (x * y);
// } //end multiply
//
// function divide(x, y) {
//     return (x / y);
// } //end divide
