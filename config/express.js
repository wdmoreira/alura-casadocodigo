var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser') //utiliado para pegar requisiçoes http como get . npm install body-parser --save
var expressValidator = require('express-validator')

module.exports = function() {

    var app = express();
    app.set('view engine', 'ejs');
    app.set('views','./app/views');
    app.use(bodyParser.urlencoded({extended:true})) //bodyParser a fora como a url é enviada. extended:true informa que poderá usar mais propriedaes. 
    app.use(bodyParser.json())

    app.use(expressValidator()) // Utiliazando a epress-validator. 


    load('routes',{cwd: 'app'})
        .then('infra')
        .into(app);

    return app;

}