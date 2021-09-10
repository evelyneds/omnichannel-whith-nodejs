'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      // product_id: {
      //   type: Sequelize.INTEGER,
      //   references: { model:'products', key: 'id'},
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL',
      //   allowNull: true,
      // },
      customer_id:{
        type: Sequelize.INTEGER,
        references: { model:'customers', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      // status_id: {
      //   type: Sequelize.INTEGER,
      //   defaultValue: 1,
      //   references: { model:'status', key: 'id'},
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL',
      //   allowNull: true,
      // },
      // appointment_id: {
      //   type: Sequelize.INTEGER,
      //   references: { model:'appointments', key: 'id'},
      //   onUpdate: 'CASCADE',
      //   onDelete: 'SET NULL',
      //   allowNull: true,
      // },
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
    return queryInterface.dropTable('orders');
  }
};