const express = require('express')
const app = express();

require('dotenv').config();
const port = process.env.PORT

app.use(express.static('public'))
app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.render('index')
})

app.listen(port,(req,res)=>{
    console.log(`Port is listening on port ${port}`)
})
