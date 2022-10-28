// Require modules
const express = require("express");
const path = require("path");

const todoDb = require("./data/todo-db");

// Create the Express app
const app = express();

// Configure the app (app.set)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Mount middleware (app.use)

// Mount routes
app.get("/", function (req, res) {
  res.redirect("/home");
});
app.get("/home", function (req, res) {
  res.render("home",{});
});

app.get("/todos", function (req, res) {
  //render ejs file
  res.render("todos/index.ejs", { todos: todoDb.getAll() });
});

let counterNum = 0;
app.get("/home", function (req, res) {
  let obj = {
    counter: counterNum++,
  };
  res.render("landing.ejs", obj);
});

// Tell the app to listen on port 3000
app.listen(3000, function () {
  console.log(path.join(__dirname, "views"));
});
