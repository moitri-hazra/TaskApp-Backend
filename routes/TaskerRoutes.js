const {Router} = require('express');
const { getTask, saveTask, updateTask, deleteTask, singleTask } = require('../controllers/TaskerController');

const router = Router();

router.get('/tasks', getTask)
router.get('/task/:id', singleTask);
router.post('/save', saveTask)
router.put('/update/:id', updateTask)
router.delete('/delete/:id', deleteTask)

module.exports = router;
