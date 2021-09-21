'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('demands', [
      {
        customer_id: 1,
        status_id: 1,
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      {
        customer_id: 2,
        status_id: 3,
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      {
        customer_id: 3,
        status_id: 3,
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('demands', null, {});
  }
};

