const express = require("express")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", function(req, res) {
    res.send("Hellow World")
})


const PORT = 3000 || process.env.PORT
app.listen(PORT, function() {
    console.log(`Server Started on port ${PORT}`);
})