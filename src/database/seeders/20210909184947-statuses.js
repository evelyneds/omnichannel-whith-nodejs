'use strict';

//const { } = require("sequelize/types");

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('statuses', [
      {
        id: 1,
        status: 'Realizado',
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      },
      {
        id: 2,
        status: 'Retirado',
        created_at:'2021-09-07 20:37:10.676+00',
        updated_at:'2021-09-07 20:37:10.676+00',
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('statuses', null, {});
  }
};
//Para excluir todas:
//npx sequelize db:seed:undo:all

//Para rodar todas as Seeders
//npx sequelize-cli db:seed:all
