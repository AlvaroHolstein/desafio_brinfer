const express = require("express");
const cors = require("cors");
const jwt = 
require("dotenv").config()
require("./mongo-config");

const server = express();

const pictureController = require("./mvc/controllers/picture.controller");

const port = process.env.PORT || 5001;

let auth = true;

server.use(cors());

server.get("/auth", (req, res) => {

})

server.get("/pics", async (req, res) => {
    console.log(req)
    try {
        if (auth) {
            let result = await pictureController.getPictures();

            res.json({success: true, data: result});
        } else {
            res.json({ success: false, err: "User not Authenticated!" })
        }
    } catch (err) {
        res.json({success: false, err: err})
    }
})

server.use((err, req, res, next) => {
    if(err) {
        res.json({success: false, err: "Internal Error!"})
    }
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
})