'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees', {
      id: {
        type: Sequelize.INTEGER,//tipo
        allowNull: false, // permite valor vazio
        autoIncrement: true,//auto incremento
        primaryKey: true,//relacionamento com outra tabela
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: { 
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('employees');
  }
};

/*
npx sequelize-cli db:migrate
npx sequelize db:migrate:undo
*/










