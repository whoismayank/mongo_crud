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

app.get('/', async(req,res) => {
    try {
        await res.status(200).json({message: 'App is working'})
    } catch (error) {
        await res.status(500).json({message: 'Something went wrong.'})
    }
})


// routing
const alienRouter = require('./routers/aliens');
app.use('/aliens', alienRouter);
app.listen(port, async () => {
    console.log('App is running on port: ' + port);
})    
// mongoose.connection.on("error", error => {
//     console.log('Problem connection to the database'+error);
// });
