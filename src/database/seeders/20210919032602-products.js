'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        description: 'Notebook i7',
        value: 3700.5,
        quantity: 80,
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      { 
        description: 'Livro Storytelling',
        value: 10.5,
        quantity: 20,
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      {
        description: 'Mascara de Proteção',
        value: 7.5,
        quantity: 100,
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      }
      
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
};
