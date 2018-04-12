const express = require('express');
const app = express();
const https = require('https');

app.use(express.static('./'));


const url = 'https://code.brainsapp.org/sw.js';

https.get(url, (res) => {
    console.clear();
    res.setEncoding("utf8");
    let body = "";
    res.on("data", data => {
        body += data;
    });

    res.on('end', () => {
        console.log(body)
    })

    // console.log(res);
});


app.listen(3000, () => {
    console.log('app run on port 3000')
});