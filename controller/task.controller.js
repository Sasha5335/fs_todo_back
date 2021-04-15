const createError = require('http-errors');
const { Task } = require('../models');

module.exports.createTask = async (req, res, next) => {
  try {
    const { body } = req;
    const createdTask = await Task.create(body);

    res.status(201).send(createdTask);
  } catch (err) {
    next(err);
  }
};

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const { pagination = {} } = req;

    const tasks = await Task.findAll({
      ...pagination,
    });

    if (!tasks.length) {
      return next(createError(404, 'Tasks not found'));
    }

    res.send({ data: tasks });
  } catch (err) {
    next(err);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const rowsCount = await Task.destroy({ where: { id } });

    if (rowsCount !== 1) {
      return next(createError(404, 'Task not found'));
    }

    res.send({ data: id });
  } catch (err) {
    next(err);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const [rowsCount, [updatedTask]] = await Task.update(body, {
      where: { id },
      returning: true,
    });

    if (rowsCount !== 1) {
      return next(createError(404, 'Task not found'));
    }

    res.send({ data: updatedTask });
  } catch (err) {
    next(err);
  }
};
