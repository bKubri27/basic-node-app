const express = require('express')
const app = express();

app.get('/',(req, res) => {
    res.send("welcome to the home page sweetheart");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Wazzapp Queen B");
});

