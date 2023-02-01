const express = require("express")
const app = express()
const route = require("./routes/route")
const mongoose = require('mongoose')
const multer = require("multer")

mongoose.set("strictQuery", true);

app.use(express.json());
app.use(multer().any())

mongoose.connect("mongodb+srv://Sakshi:monday123@cluster0.z5dpz2x.mongodb.net/group7Database",
    { useNewUrlParser: true })
    .then(() => console.log("Mongodb is connected."))
    .catch((err) => console.log(err));

app.use("/", route);

app.listen(3000, function () {
    console.log("Express app is running on port " + 3000);
});