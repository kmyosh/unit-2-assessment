var express = require("express");
var router = express.Router();
const todosCtrl = require("../controllers/todos");

// /todos/new

router.get("/", todosCtrl.index);
router.get("/new", todosCtrl.new);
router.get("/:id", todosCtrl.show);
router.post("/", todosCtrl.create);
router.delete("/:id", todosCtrl.delete);

module.exports = router;
