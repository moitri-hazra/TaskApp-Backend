const {Router} = require('express');
const { getTask, saveTask, updateTask, deleteTask, singleTask } = require('../controllers/TaskerController');

const router = Router();

router.get('/', getTask)
router.get('/task/:id', singleTask);
router.post('/save', saveTask)
router.post('/update', updateTask)
router.post('/delete', deleteTask)

module.exports = router;