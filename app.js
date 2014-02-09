
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'movies')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.getfiledir = function  () {
 var array = fs.readdirSync('movies').filter(function(item) {
    return /(mkv|avi|rmvb)$/.test(item);
});

return array;
}


app.get('/', function  (req,res) {
    res.render('index',{array:app.getfiledir()});
});
app.get('/users', user.list);

//app.listen(app.get('port'), function(){
  //console.log('Express server listening on port ' + app.get('port'));
//});

module.exports = app;


