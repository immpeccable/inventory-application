let Category = require("../models/category");
let Component = require('../models/component');

var async = require('async');


exports.component_list = function (req, res) {


    Component.find({}, function (err, clist) {
        if (err) { res.send(err) }
        else {
            res.send(clist);
        }
    })

}

exports.component_delete_post = function(req, res){
    
    console.log("delete e geliyor musun")
    console.log(req.params.id);
    Component.findByIdAndRemove(req.params.id, function(err, ress){
        if(err){
            next(err)
        }else{
            console.log("merhaba")
            console.log(ress);
            res.redirect("http://localhost:3001/list");
        }
    })
} 

exports.component_add =

    [


        (req, res, next) => {
            console.log("component create")
            console.log(req.body);

            let ctid;
            Category.findOne({"category_name": req.body.category_name}, function(err, result){
                if(err){
                    return next(err)
                }else{
                    console.log(result);
                    let component = new Component({
                        component_name: req.body.component_name,
                        description: req.body.description,
                        price: req.body.price,
                        stock: req.body.stock,
                        category: result._id
                    })

                    component.save(function(err){
                        if(err){
                            next(err)
                        }else{
                            res.redirect("http://localhost:3001/list")
                        }
                    })
                    
                }
            })

        }
    ];

exports.component_detail = function (req, res) {

    console.log("component detail verioyurm awq");
    Component.findById(req.params.id, function (err, result) {
        if (err) { console.log("hello" + err); res.send(err) }
        else {
            console.log(result);
            res.send(result);
        }
    })

}