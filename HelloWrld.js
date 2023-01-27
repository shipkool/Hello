var express = require('express')
var app = express()

app.get('/', function(req,res){
   res.send('Hello Shipin')
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app committed in the new branch listening at http://%s:%s", host, port)
})