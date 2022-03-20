#! /usr/bin/env node

console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);

var async = require('async')
var Category = require('./models/category')
var Component = require('./models/component')



var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var categories = []
var components = []

function categoryCreate(category_name, description, cb) {
  let category_detail = {category_name:category_name , description: description }
  
  var category = new Category(category_detail);
       
  category.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Category: ' + category);
    categories.push(category)

    cb(null, category)
  }  );
}

function componentCreate(name, description,price, stock, category , cb) {
  let component_detail = {component_name: name, description: description, price: price, stock: stock, category: category};

  let component = new Component(component_detail);
  component.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log('New Component: ' + component);
    components.push(component);
    cb(null, component);
  }   );
}

function createCategories(cb) {
    async.series([
        function(callback) {
          categoryCreate("category_name_1", "category_desc_1",  callback);
        },
        function(callback) {
          categoryCreate("category_name_2", "category_desc_2",  callback);
        },
        function(callback) {
            categoryCreate("category_name_3", "category_desc_3",  callback);
        },
        ],
        // optional callback
        cb);
}

function createItems(cb) {
    async.series([
        function(callback) {
          componentCreate('item_name_1', 'item_description_1', "100", "100", categories[0],  callback);
        },
        function(callback) {
            componentCreate('item_name_2', 'item_description_2', "200", "200", categories[1],  callback);
        },
        function(callback) {
            componentCreate('item_name_3', 'item_description_3', "300", "300", categories[1],  callback);
        },
        function(callback) {
            componentCreate('item_name_4', 'item_description_4', "400", "400", categories[2],  callback);
        },
        function(callback) {
            componentCreate('item_name_5', 'item_description_5', "500", "500", categories[2],  callback);
        }
        ],
        // optional callback
        cb);
}



async.series([
    createCategories,
    createItems
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('items: '+components);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});




