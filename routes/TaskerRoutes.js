const {Router} = require('express');
const { getTask, saveTask, updateTask, deleteTask, singleTask } = require('../controllers/TaskerController');

const router = Router();

router.get('/tasks', getTask)
router.get('/task/:id', singleTask);
router.post('/', saveTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router;
