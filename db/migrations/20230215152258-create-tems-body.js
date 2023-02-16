/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TemsBodies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bodyName: {
        type: Sequelize.TEXT,
      },
      post: {
        type: Sequelize.TEXT,
      },
      count: {
        type: Sequelize.INTEGER,
      },
      countmin: {
        type: Sequelize.INTEGER,
      },
      data: {
        type: Sequelize.BOOLEAN,
      },
      tems_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tems',
          key: 'id',
        },

      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TemsBodies');
  },
};
