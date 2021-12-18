const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

// const img = require('./img');

const server = http.createServer(app);
const db = require('./db');
const res = require('express/lib/response');
app.use(express.static('public'));


app.get('/mySongs', (req, res)=>{
    let htmlString = ``;
    //Loop through the array
    for (let i=0; i<db.length; i++) {   
        //add an empty list item to htmlString
        let album = db[i].name
        htmlString += `<ul>${album}</ul>`;
    }
    res.send(`<ul>${htmlString}</ul>`);
});

app.get('/mySongs/:handle', (req, res)=>{
    const {handle} = req.params;
    const test = db.find(f => f.handle === handle);
    
    if (test){
        let htmlData = ``;
        htmlData += `<h1>${test.name}</h1>`;
        htmlData += `<img src=${test.imgURL}>`;
        htmlData += `<h4>Year: ${test.publishDate}</h4>`;
        htmlData += `<h6>Track List: ${test.songTitles}</h6>`;
        res.send(htmlData)
    }else{
        res.send('No album with that name');
    }
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});