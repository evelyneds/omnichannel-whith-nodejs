'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'demands', 
      'appointment_id', {
        type: Sequelize.INTEGER,
        references: { model: 'appointments', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
    )
  },
  down: async (queryInterface, Sequelize) => {
  }
};
