/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tems', [{
      temsName: 'Транспорт',
      init_id: 1,
    },
    {
      temsName: 'Образование',
      init_id: 1,
    },
    {
      temsName: 'Здравоохранение',
      init_id: 1,
    },
    {
      temsName: 'Наука',
      init_id: 2,
    },
    {
      temsName: 'Дороги',
      init_id: 2,
    },
    {
      temsName: 'Соц.Защита',
      init_id: 2,
    },
    {
      temsName: 'Транспорт',
      init_id: 3,
    },
    {
      temsName: 'Здравоохранение',
      init_id: 3,
    },
    {
      temsName: 'Налоги',
      init_id: 3,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tems', null, {});
  },
};
