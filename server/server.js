const express = require('express');
const app = express();
const PORT = 5000;
app.use('/',(req,res)=>{
    const payload = "<h1>This app is dockerized yippee :D ! 🐳</h1>"
    res.status(200).send(payload);
})

app.listen(PORT);
console.log(`Listening to port ${PORT}`)