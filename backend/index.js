const express = require('express');
const PORT = 4000;
const app = express();
const cors = require('cors');
const router = require('./router/index');


app.use(express.json());
app.use('/',router)


app.get('/api',(req,res)=>{
    res.json({message:"Hello world"})
})

app.listen(PORT,()=>{
    console.log('i am working  http://localhost:4000')
});
