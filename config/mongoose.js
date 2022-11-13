/****************IMPORTING PACKAGE*******************************/
const mongoose = require("mongoose");

/*******************MAKING CONNECTION***************************/
mongoose.connect("mongodb+srv://csv123:<password>@cluster0.luvqcfx.mongodb.net/?retryWrites=true&w=majority");
//setting it to db
const db = mongoose.connection;

/****************CHECKING CONNECTION****************************/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});
