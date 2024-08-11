const express = require ('express')
const path = require('path')
const mongoose = require ('mongoose')
const cors = require('cors')
const bodyParser = require ('body-parser');
const BookRoutes= require ('./routes/booking.route');   
const http = require('http')
const app = express();
const port = process.env.port || 8082;


mongoose.connect("mongodb://0.0.0.0:27017/bookStore", {useNewUrlParser: true})
mongoose.set('strictQuery', false);
const db= mongoose.connection


db.on('error',()=>{
    console.log("error")
} )
db.once('open', ()=>{
 console.log("connected")
})

app.use(cors())
app.set ('view engine', 'ejs');
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use ('/', BookRoutes);



app.listen(port, ()=>{
    console.log('Listening to port 8082')
})



//How to run project 
//npm run dev