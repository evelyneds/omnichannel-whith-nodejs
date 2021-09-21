'use strict';


module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('customers', [
      {
        //id: 1,
        name: 'Ana Maria',
        email: 'mari@gmail.com',
        password_hash: '123456789',
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      {
        //id: 2,
        name: 'Joao Luiz',
        email: 'jl@gmail.com',
        password_hash: '123456789',
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      {
        //id: 3,
        name: 'Helena Lemmon',
        email: 'hl@gmail.com',
        password_hash: '123456789',
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};