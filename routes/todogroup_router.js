const express = require('express')
const router = express.Router()
const todogroupController = require('../controllers/todogroup_controller')

router.route('/')
.get(todogroupController.list)
.post(todogroupController.create)

router.route('/new')
.get(todogroupController.new)
// .get((req, res) => res.send('new todogroups'))

router.route('/:id')
// .get((req, res) => res.send('id todogroups'))
.get(todogroupController.listOne)

router.route('/:id/todos')
.get(todogroupController.listTodos)

router.route('/:id/edit')
.get((req, res) => res.send('edit id todogroups'))

module.exports = router
