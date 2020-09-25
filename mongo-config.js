const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://alvaro:${process.env.MONGO_PASS}@brinferdb.owdn5.mongodb.net/brinferdb?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on("error", (error) => {
    console.log("db error!", error);
})

db.once("open", () => {
    console.log("Success starting mongo!");
})

module.exports = {
    con: db,
    Schema: mongoose.Schema,
    model: mongoose.model,
}