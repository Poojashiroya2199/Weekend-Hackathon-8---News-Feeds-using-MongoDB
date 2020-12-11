const express = require('express')
const app = express()
const port = 8080
const {newsArticleModel}=require('./connector');
const onePageArticleCount = 10


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/newFeeds',(req,res)=>{
    const limit=req.body.limit;
    const offset=req.body.offseet;
    res.send({newsArticleModel});
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;