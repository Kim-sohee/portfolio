const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/test/', (req, res)=>{
    res.sendFile(path.join(__dirname, "test.html"));
});

app.listen(port, ()=>{
    console.log(`server is listening at localhost: ${port}`);
});