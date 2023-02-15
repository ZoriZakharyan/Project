/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Inits', [{
      initName: 'Федеральные',
    },
    {
      initName: 'Региональные',
    },
    {
      initName: 'Муниципальные',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Inits', null, {});
  },
};
