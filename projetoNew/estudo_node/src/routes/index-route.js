'use strict'

const express = require('express');
const router = express.Router();
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
//express.use(express.static('./aplicacao/public'));
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(expressLayouts);
app.use(bodyParser.urlencoded());


router.get('/',(req,res,next)=>{
    res.status(200).send({
        title:"Node api",
        version:"0.0.1"
    });
});

router.get('/index',(req,res,next)=>{
    res.render('index');
});

module.exports = router;