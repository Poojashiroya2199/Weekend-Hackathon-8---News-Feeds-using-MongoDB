const express = require('express')
const app = express()
const port = 8080
const {newsArticleModel}=require('./connector');
const onePageArticleCount = 10


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/newFeeds',(req,res)=>{
    const limit=!is.NaN(req.query.limit)|| req.query.limit?10:parseInt(req.query.limit);
    const offset=!is.NaN(req.query.offset)|| req.query.offset?10:parseInt(req.query.offset);
    newsArticleModel.find().limit(limit).skip(offset).then((ele)=>{
        res.send(ele);
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;