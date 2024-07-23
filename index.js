const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const baseurl = "https://kim-sohee.github.io/portfolio/";

app.use(express.static(path.join(baseurl, 'public')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(baseurl, "index.html"));
});

app.listen(port, ()=>{
    console.log(`server is listening at localhost: ${port}`);
});