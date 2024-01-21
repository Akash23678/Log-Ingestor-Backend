const express = require("express");
const dotenv = require('dotenv').config();
const rateLimit = require("./rateLimit");

const app = express();
const PORT = process.env.PORT || 3000;

const logRouter = require("./Routers/logRouter")

const connectMongoDB = require("./connectionDB");

//if You want to use RateLimit Globally across all Routes --> app.use(rateLimit);
//app.use(rateLimit);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/logs", logRouter);

app.use("/", rateLimit, (req, res) => {
    res.send("Home Page")
})

app.use("*", (req, res) => {
    return res.status(404).json({ Error: "Page you are looking for does not exist, pls check url" })
})





connectMongoDB()
.then(()=>{
    app.listen(PORT || 3000, ()=> console.log(`App is listening on port ${PORT}: http://localhost:3000`))
})
.catch((error)=>{
    console.log("MongoDB Connection FAILED!!!!!", error);
})

// app.listen(process.env.PORT || 3000, () => console.log(`Server Running at http://localhost:${process.env.PORT}`));

