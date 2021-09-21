'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('demands', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      customer_id:{
        type: Sequelize.INTEGER,
        references: { model:'customers', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },

       status_id: {
         type: Sequelize.INTEGER,
         default_value:1,
         references: { model:'statuses', key: 'id'},
         onUpdate: 'CASCADE',
         onDelete: 'SET NULL',
         allowNull: true,
       },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },
  down: queryInterface => {
    return queryInterface.dropTable('demands');
  }
};