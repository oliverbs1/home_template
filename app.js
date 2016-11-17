var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1>');
});


app.get('/nike', function (req, res) {
    res.send('<h1>Hello nike</h1>');
});

app.use('/css', express.static(__dirname + '/template/complet/css'));
app.use('/images', express.static(__dirname + '/template/images'));
app.use('/js', express.static(__dirname + '/template/complet/js'));

app.get('/page', function (req, res) {
    res.sendFile(__dirname + '/template//complet/final.html');
});

http.listen(1337, function () {
    console.log('listening on *:1337');
});