const { Router } = require('express');
const taskController = require('../controller/task.controller');
// const paginate = require('../middlewares/paginate.mw');

const taskRouter = Router();

taskRouter.post('/', taskController.createTask);
taskRouter.get('/', /*paginate,*/ taskController.getAllTasks);

taskRouter.delete('/:id', taskController.deleteTask);
taskRouter.patch('/:id', taskController.updateTask);

module.exports = taskRouter;
