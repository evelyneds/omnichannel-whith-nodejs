'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stores', [
      {
        company_name: 'Loja Store 01',
        address: 'Rua dos patriotas 125',
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      { 
        company_name: 'Loja Mega 02',
        address: 'Rua café com leite 1350',
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      {
        company_name: 'Loja Luiza 03',
        address: 'Rua java 150',
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('stores', null, {});
  }
};