let Category = require("../models/category");

console.log("merhaba dünya")


exports.category_list = function(req, res, next){
    console.log("hello wolrd");
    Category.find({}, "category_name").exec(function(err, list_category){
        if(err){return next(err)}
        else{
            console.log("list category: "+list_category);
            res.send(list_category)
        }
    })
}