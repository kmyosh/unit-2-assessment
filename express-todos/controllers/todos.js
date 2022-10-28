const Todo = require("../models/todo");

function index(req, res) {
  res.render("todos/index.ejs", { todos: Todo.getAll(), time: req.time });
}

function show(req, res) {
  res.render("todos/show.ejs", {
    todo: Todo.getOne(req.params.id),
  });
}

function newTodo(req, res) {
  res.render("todos/new.ejs");
}

function create(req, res) {
  const todo = { todo: req.body.todo };
  Todo.create(todo);
  res.redirect("/todos");
}

function deleteTodo(req, res) {
  Todo.deleteOne(req.params.id);
  res.redirect("/todos");
}

module.exports = {
  index,
  show,
  new: newTodo,
  create,
  delete: deleteTodo,
};
