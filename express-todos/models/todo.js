const todos = [
  { id: 125223, todo: "Feed Dogs", done: true },
  { id: 127904, todo: "Learn Express", done: false },
  { id: 139608, todo: "Buy Milk", done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};

function deleteOne(id) {
  const idx = todos.findIndex((todo) => todo.id === parseInt(id));
  todos.splice(idx, 1);
}

function create(todo) {
  todo.id = Date.now() % 1000000;
  todo.done = false;
  todos.push(todo);
}

function getAll() {
  return todos;
}

function getOne(id) {
  const todo = todos.find((todo) => todo.id === parseInt(id));
  return todo;
}
