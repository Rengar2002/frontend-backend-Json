const Router = require('express');
const router = new Router();
const fs = require('fs');



router.get('/user',(req,res)=>{
    res.json({message:"Welcome"});
})



router.get('/postevent',(req,res)=>{

    const id = req.query.id;
    const day = req.query.day;
    const year = req.query.year;
    const month = req.query.month;
    const events = req.query.events;
    const description = req.query.description;

    let data = fs.readFileSync('./db/database.json');
    let datapars = JSON.parse(data);
    let newData = [{
        id:id,
        day:day,
        year:year,
       month:month,
        events:events,
        description:description
    }]
    datapars.push(newData);
    fs.writeFileSync('./db/database.json',JSON.stringify(datapars));

  
})

router.get('/postbd',(req,res)=>{
    let data = fs.readFileSync('./db/database.json');
    let datapars = JSON.parse(data);


    res.json({message:datapars})
})

module.exports = router;