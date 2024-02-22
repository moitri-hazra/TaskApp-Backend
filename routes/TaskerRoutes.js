const {Router} = require('express');
const { getTask, saveTask, updateTask, deleteTask, singleTask } = require('../controllers/TaskerController');
const authController = require('../controllers/UserController');

const router = Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

router.get('/', getTask)
router.get('/task/:id', singleTask);
router.post('/save', saveTask)
router.post('/update', updateTask)
router.post('/delete', deleteTask)

module.exports = router;