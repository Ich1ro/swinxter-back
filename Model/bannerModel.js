const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    page: {
        type: String,
    },
    imgUrl: {
        type: String,
    },
    active: {
        type: Boolean,
    }
})

const bannerModel = mongoose.model('banner', bannerSchema);

module.exports = bannerModel;