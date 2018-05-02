// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/items", function(req, res) {
    var query = {};
    if (req.query.survivorId) {
      query.SurvivorId = req.query.survivorId;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Item.findAll({
      where: query,
      include: [db.Survivor]
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/item/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Item.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Survivor]
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // POST route for saving a new post
  app.post("/api/item", function(req, res) {
    db.Item.create(req.body).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/item/:id", function(req, res) {
    db.Item.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbItem) {
      res.json(dbItem);
    });
  });

  // PUT route for updating posts
  app.put("/api/item", function(req, res) {
    db.Item.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbItem) {
      res.json(dbItem);
    });
  });
};
