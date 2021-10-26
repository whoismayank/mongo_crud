const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 9000;
const url = 'mongodb://127.0.0.1:27017/AlienDBex';
mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;
con.on('open', () => {
    console.log(`connected`);
})
app.listen(port, async () => {
    console.log('App is running on port: ' + port);
})    
// mongoose.connection.on("error", error => {
//     console.log('Problem connection to the database'+error);
// });
