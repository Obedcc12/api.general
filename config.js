const mongoose = require("mongoose");
const dbconnect =()=> {
    mongoose.set("strictQuery", true)
    mongoose.connect("mongodb://127.0.0.1:27017/api")
    .then((succes) => console.log("Conexion exitosa"))
    .catch((err) => console.log(err.message));
}

module.exports = dbconnect;
