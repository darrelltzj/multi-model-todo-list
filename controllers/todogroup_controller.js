let Todogroup = require('../models/todogroup')
let Todo = require('../models/todo')

let todogroupController = {
  list: (req, res) => {
    Todogroup.find({}, (err, todogroups) => {
      if (err) throw err
      // res.send(todogroups)
      res.render('todogroup/index', { todogroups: todogroups })
    })
  },

  new: (req, res) => {
    Todo.find({}, (err, allTodos) => {
      if (err) console.error(err)
      res.render('todogroup/create', { allTodos: allTodos })
    })
  },

  listOne: (req, res) => {
    Todogroup.findById(req.params.id).populate('todos').exec((err, item) => {
      if (err) throw err
      // res.send(item)
      res.render('todogroup/single-group', { item: item })
    })
  },

  listTodos: (req, res) => {
    // res.send('todo in todogroups')
    Todogroup.findById(req.params.id).populate('todos').exec((err, item) => {
      if (err) throw err
      res.send(item.todos)
      res.render('todogroup/single-group-todos', { items: item.todos })
    })
  },

  create: (req, res) => {
    // Todogroup.create(req.body, (err, output) => {
    //   if (err) console.error(err)
    //   res.redirect('/todogroups')
    // })
    let newTodogroup = new Todogroup(req.body)
    newTodogroup.save(function (err, savedEntry) {
      if (err) throw err
      res.redirect('/todogroups')
    })
  }

}

module.exports = todogroupController
