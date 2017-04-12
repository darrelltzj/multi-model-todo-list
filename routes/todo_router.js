const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo_controller')

router.get('/', todoController.list)
router.post('/', todoController.create)

router.get('/:id', todoController.listOne)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.delete)

router.get('/new', todoController.new)
router.get('/:id/edit', todoController.edit)

module.exports = router
