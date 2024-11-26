const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User")
app.use(express.json());
const UserRoutes = require("./routes/UserRoutes");
const connectDB = require("./DBconfig/connectDB")


app.use("/Users", UserRoutes);



connectDB()






app.listen(5000,() => console.log(`Server running on port 5000`))