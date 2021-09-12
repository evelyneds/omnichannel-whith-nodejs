'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('appointments', {
      id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        autoIncrement: true,
        primaryKey:true,
      },
      date:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      demand_id:{
        type: Sequelize.INTEGER,
        references: { model:'demands', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
     /* order_id:{
        type: Sequelize.INTEGER,
        references: { model:'order', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },*/
      store_id:{
        type: Sequelize.INTEGER,
        references: { model:'stores', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      canceled_at:{
        type: Sequelize.DATE,
        allowNull:true,
      },
      created_at:{
        type: Sequelize.DATE,
        allowNull:false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: queryInterface => {
     return queryInterface.dropTable('appointments')
  }
};
