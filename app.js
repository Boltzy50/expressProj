const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const mySongs = require('./db');

const server = http.createServer(app);






// enable static public folder
// app.use(express.static('public'));



//  app.get('/', (req, res)=>{
    
//  })