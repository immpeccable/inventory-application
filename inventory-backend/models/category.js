let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let CategorySchema = new Schema({

    category_name: {type: String, required: true},
    description: {type: String, required: true},
})


CategorySchema.virtual('url').get(function() {

    return '/list/category/' + this._id;

});

module.exports = mongoose.model('Category', CategorySchema);