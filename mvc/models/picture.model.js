const { Schema, model } = require("../../mongo-config");

const pictureSchema = new Schema({
    img: {
        type: String
    }
})

const pictureModel = model("pictures", pictureSchema);

module.exports = pictureModel;