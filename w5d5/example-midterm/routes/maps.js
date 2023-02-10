/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into /maps,
 *   these routes are mounted onto /maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

// /
// /new
// /:map_id
// /:map_id/edit

const express = require("express");
const mapRoutes = express.Router();
const mapQueries = require("../db/queries/maps");

mapRoutes.get("/", (req, res) => {
  mapQueries.getAllMaps().then((maps) => {
    const templateVars = { maps };
    res.render("maps", templateVars);
  });
});
mapRoutes.get("/new", (req, res) => {
  res.render("maps_new");
});
mapRoutes.get("/:map_id", (req, res) => {
  res.render("maps_show");
});
mapRoutes.get("/:map_id/edit", (req, res) => {
  res.render("maps_edit");
});

module.exports = mapRoutes;
