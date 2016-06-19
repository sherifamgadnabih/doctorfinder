var express= require('express');
var http= require('http');
var app=express();

app.get('/',function (request,response) {
    
    response.write('Hello World');
    response.end();
});

app.listen(8080,function () {
    console.log('server is runnig');
})
