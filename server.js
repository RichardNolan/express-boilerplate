const express = require('express');
const ejs = require('ejs')
const app = express();

const router = require('./router/router');

app.use(express.static(`${__dirname}public`));

app.use('/', router);

app.listen(3000, ()=>{
    console.log("listening on 3000")
});