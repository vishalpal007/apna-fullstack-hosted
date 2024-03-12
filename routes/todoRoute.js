const { getTodo, addTodo, deleteTodo, updateTodo } = require("../controller/todoController")

const router = require("express").Router()


router
    .get("/", getTodo)
    .post("/add-todo", addTodo)
    .delete("/delete-todo/:id", deleteTodo)
    .put("/update-todo/:id", updateTodo)



module.exports = router