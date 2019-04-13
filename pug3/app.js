var express = require('express');
var apps = express();

//Setting View Engine
apps.set('view engine', 'pug');

//Setting public folder
apps.use(express.static('public'));

//Default Route
apps.get('/', function(req, res){
    res.render('log');
});

apps.post('/', function (req,res) {
    console.log('Cookies: ', req.cookies);
    res.render('Roos')
    });

//Listening to nodeJS Application
apps.listen(4200, function(){
    console.log("Listening to port 4200")
});
