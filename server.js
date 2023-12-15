const express = require('express');
const app = express();
const PORT = 5000;
app.use('/',(req,res)=>{
    const payload = "This app is dockerized ! 🐳"
    res.status(200).send(payload);
})

app.listen(PORT);
console.log(`Listening to port ${PORT}`)