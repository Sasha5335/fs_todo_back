'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {}
  }
  Task.init(
    {
      body: {
        allowNull: false,
        type: DataTypes.STRING(512),
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      isDone: {
        field: 'is_done',
        type: DataTypes.BOOLEAN,
      },
    },
    {
      deadline: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'Task',
      tableName: 'tasks',
      underscored: true,
    }
  );
  return Task;
};
