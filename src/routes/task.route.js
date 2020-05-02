const { Router} = require('express')
const router = Router();

const { getTasks, createTask, getTask, updateTask, deleteTask } = require('../controller/tasks.controller')

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;