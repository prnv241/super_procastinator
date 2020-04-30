const express = require('express');
const router = express.Router();

const Todo = require('../../models/todos');

//GET api/items

router.get('/', (req, res) => {
  Todo.find()
    .sort({ date: -1 })
    .then((items) => res.json(items))
})

//Post api/items

router.post('/', (req, res) => {
  const newTodo = new Todo({
    name: req.body.name
  });
  newTodo.save()
    .then((item) => res.json(item));
})

//Delete api/items

router.delete('/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then((todo) => todo.remove())
    .then(() => res.json({ success: true }))
    .catch((err) => res.status(404).json({ success: false }));
})



module.exports = router;