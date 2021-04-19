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

      isDone: {
        field: 'is_done',
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
        validate: {
          notNull: true,
        },
      },

      // deadline: {
      //   type: DataTypes.DATE,
      //   validate: {
      //     isDate: true,
      //   },
      // },
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
