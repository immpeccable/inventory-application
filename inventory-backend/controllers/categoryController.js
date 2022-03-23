let Category = require("../models/category");
let Component = require('../models/component');

var async = require('async');


exports.category_list = function (req, res, next) {
    //console.log("category-list")
    Category.find({}, [], function (err, p) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(p);
        }
    });
}

exports.category_detail = function (req, res, next) {
    
    async.parallel({
        category: function (callback) {
            //console.log(req.params.id)
            Category.findById(req.params.id).exec(callback);
        },
        components: function (callback) {
            Component.find({ 'category': req.params.id }).exec(callback);
        },
    },
        function (err, results) {
            if (err) { console.log(err); return next(err) }
            if (results.category == null) {
                let nerr = new Error("no category found");
                nerr.status = 404;
                return next(nerr);
            } else {
                console.log("no error");
                console.log(results);
                res.send(results);
            }
        })
}

exports.category_create_post = [

   
    (req, res, next) => {
        console.log("category create")
        console.log(req.body);
        let category = new Category({
            category_name: req.body.category_name,
            description: req.body.description
        })

        Category.findOne({ 'category_name': req.body.category_name })
            .exec(function (err, found_category) {
                if (err) { return next(err) }
                else {
                    if (found_category) {
                        res.redirect(found_category.url);
                    } else {
                        category.save(function (err) {

                            if (err) { return next(err) }
                            else {
                                res.redirect("http://localhost:3001/list");
                            }

                        })
                    }
                }
            })

    }
];

exports.category_delete_post = function(req, res){
    
    console.log("delete post")
    async.parallel({
        category: function (callback) {
            //console.log(req.params.id)
            Category.findById(req.params.id).exec(callback);
        },
        components: function (callback) {
            Component.find({ 'category': req.params.id }).exec(callback);
        },
    },
        function (err, results) {
            if (err) { console.log(err); return next(err) }
            if (results.category) {
                
                Category.findByIdAndRemove(req.params.id, function deleteCategory(err){
                    if(err){
                        return next(err)
                    }else{
                        
                        let len = results.components.length
                        for(let i = 0; i<len; i++){
                            Component.findByIdAndRemove(results.components[i]._id, function deleteComp(err){
                                if(err){
                                    next(err)
                                }
                            });
                        }
                        res.redirect("http://localhost:3001/list");
                    }
                })

            } else {
                res.send("Something Went Wrong")
            }
        })

}
exports.category_delete_get = function(req, res){
    res.send("mereana dnya");
}