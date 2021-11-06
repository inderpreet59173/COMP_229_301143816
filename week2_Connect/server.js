const connect = require('connect');
var http = require('http');

var app = connect();

//next handles request in middleware. //using import (test.js)
 function helloWorld(req, res, next){ 
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Happy World');
} 

function byeWorld(req, res, next){ 
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bye Happy World');
} 

//this part comes in controller in case of MVC
app.use('/hello', helloWorld); //use is a connect function. If somebody goes to this url display helloWorld function
//ex: /aboutMe page incase we have that page in our cloud
app.use('/bye', byeWorld); //execute byeWorld func when someone visits url /bye.

app.listen(3000);