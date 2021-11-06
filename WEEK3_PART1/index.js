//adding 3rd party node modules
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/home', (req, res) => {
    res.send('Welcome to home');
})

app.listen(port, () => {
    console.log("Our first express server");
});