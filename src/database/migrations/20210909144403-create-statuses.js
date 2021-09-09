'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('statuses', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        //default_value: new Date()
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        //default_value: new Date()
      },
    })
  },
  down: queryInterface => {
    return queryInterface.dropTable('statuses');
  }
};