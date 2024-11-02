const express = require("express");
const route = require('./config/route')
const app = express();

app.use('/public', express.static('public'));
app.set('view engine', 'ejs');

app.use(route)
app.listen(2001,() =>{
    console.log("server is running on port 2001");

})