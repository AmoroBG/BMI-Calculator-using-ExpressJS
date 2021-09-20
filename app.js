const express = require("express")
const path = require("path")

const app = express()
app.use(express.static("public"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})
app.post("/", function(req, res) {
    let weight = Number(req.body.weight)
    let height = Number(req.body.height)
    let BMI = weight / height
    console.log(req.body);
    res.send(`<h2> The BMI is ${BMI} </h2>`)
})


const PORT = 3000 || process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})