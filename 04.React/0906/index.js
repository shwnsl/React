const express = require("express");
const router = express.Router();

const todoList = [
    { id: 1, text: "리액트 기초 공부하기", status: false },
    { id: 2, text: "취업 준비하기", status: false },
    { id: 3, text: "여행가기", status: true },
];

router.get("/", (request, response) => {
    response.send("Hello Node.js");
});

router.get("/api/todo", (request, response) => {
    response.json(todoList);
});

router.post("/api/add", (req, res) => {

    const newItem = {
        id: todoList.length + 1,
        text: req.body.text,
        status: false
    }

    todoList.push(newItem);
    res.send(newItem)
})

router.put("/api/todo/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const {status} = req.body;

    const todoIndex = todoList.findIndex((todo) => todo.id === id);
    if (todoIndex === -1) {
        return res.status(404).json({message: "todo not found"})
    }
    todoList[todoIndex].status = status;
    res.send(todoList[todoIndex]);
})

router.delete("/api/todo/:id", (request, response) => {
    const id = parseInt(request.params.id);

    const itemIndex = todoList.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
        return response.status(404).json({message: "item not found"});
    }

    todoList = todoList.filter((item) => item.id !== id);
    response.status(200).json({message: "item deleted successfully"})
})

module.exports = router;