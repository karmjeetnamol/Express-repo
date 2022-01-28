const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use((req,res,next) =>{
    console.log(`${req.method} request to ${req.url}`)
    next();
})
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("homepage")
})

app.get('/about',(req,res)=>{
    res.send("about page")
})

app.post("/",(req,res)=>{
    res.send("posted!")
})

app.listen(PORT,()=>{
    console.log(`listenin on port ${PORT}`)
})