const picture = require("../models/picture.model");

module.exports = {
    getPictures() {
        return new Promise((resolve, reject) => {
            picture.find({}, (err, collection, info) => {
                console.log(collection)
                if(err) {
                    reject(err);
                    return;
                }

                resolve(collection);
            })
        })
    }
}