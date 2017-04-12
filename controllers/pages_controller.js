let Page = require('../models/todo')

let todosController = {
  list: (req, res) => {
    Page.find({}, (err, todos) => {
      if (err) throw err
      res.render('todo/index', { todos: todos })
    })
  },

  new: (req, res) => {
    res.render('todo/create')
  },

  listOne: (req, res) => {
    Page.findById(req.params.id, (err, todoItem) => {
      if (err) throw err
      res.render('todo/single-todo', { todoItem: todoItem })
    })
  },

  create: (req, res) => {
    let newTodo = new Page({
      title: req.body.title,
      description: req.body.description,
      completed: false
    })
    newTodo.save(function (err, savedEntry) {
      if (err) throw err
      res.redirect('/todo')
    })
  },

  edit: (req, res) => {
    Page.findById(req.params.id, (err, todoItem) => {
      if (err) throw err
      res.render('todo/edit', { todoItem: todoItem })
    })
  },

  update: (req, res) => {
    Page.findOneAndUpdate({
      _id: req.params.id
    }, {
      title: req.body.title,
      description: req.body.description,
      completed: req.body.completed
    }, (err, todoItem) => {
      if (err) throw err
      res.redirect('/todo/' + todoItem.id)
    })
  },

  delete: (req, res) => {
    Page.findByIdAndRemove(req.params.id, (err, todoItem) => {
      if (err) throw err
      res.redirect('/todo')
    })
  }

}

module.exports = todosController
