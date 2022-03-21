let Category = require("../models/category");
let Component = require('../models/component');

var async = require('async');


exports.component_list = function(req, res){


    Component.find({}, function(err, clist){
        if(err){res.send(err)}
        else{
            res.send(clist);
        }
    })

}

exports.component_detail = function(req, res){


    Component.findById(req.params.id, function(err, result){
        if(err){console.log("hello"+err); res.send(err)}
        else{
            res.send(result);
        }
    })

}