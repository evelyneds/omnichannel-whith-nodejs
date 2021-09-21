'use strict';


module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('employees', [
      {
        name: 'Mary Lene',
        email: 'mari@gmail.com',
        password_hash: '123456789',
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      {
        //id: 2,
        name: 'Evelyn Santos',
        email: 'evelyn@gmail.com',
        password_hash: '123456789',
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      {
        //id: 3,
        name: 'Bruce Lemon',
        email: 'bruce@gmail.com',
        password_hash: '123456789',
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('employees', null, {});
  }
};