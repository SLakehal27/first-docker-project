const express = require('express');
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors());
app.use('/',(req,res)=>{
    const payload = "This app is dockerized yippee :D! 🐳"
    res.status(200).send(payload);
})

app.listen(PORT);
console.log(`Listening to port ${PORT}`)