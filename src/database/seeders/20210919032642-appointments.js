'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('appointments', [
      {
        date:'2021-09-07 20:37:10.676+00',
        demand_id: 1,
        store_id: 1,
        canceled_at:null,
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      {
        date:'2021-09-07 20:37:10.676+00',
        demand_id: 2,
        store_id: 2,
        canceled_at:null,
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      {
        date:'2021-09-07 20:37:10.676+00',
        demand_id: 3,
        store_id: 3,
        canceled_at:null,
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('appointments', null, {});
  }
};

