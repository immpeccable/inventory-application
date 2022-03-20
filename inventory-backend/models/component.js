const { Double } = require('mongodb');
const { Int32 } = require('mongodb');
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ComponentSchema = new Schema({

    component_name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Double, required:true},
    stock: {type: Int32, required:true},
    category: {type: Schema.Types.ObjectId, ref: 'Category', required: true}
})


ComponentSchema.virtual('url').get(function() {

    return '/list/component/' + this._id;

});

module.exports = mongoose.model('Component', ComponentSchema);