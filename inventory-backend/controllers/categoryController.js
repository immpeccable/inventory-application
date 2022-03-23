let Category = require("../models/category");
let Component = require('../models/component');

var async = require('async');


exports.category_list = function (req, res, next) {
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
    console.log("merhaba arkadalsrar");
    async.parallel({

        category: function (callback) {
            console.log(req.params.id)
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
        let category = new Category({
            category_name: req.body.categoy_name,
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

                            if (err) { return next(errr) }
                            else {
                                res.redirect(category.url);
                            }

                        })
                    }
                }
            })

    }
];
