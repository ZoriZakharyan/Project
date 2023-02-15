const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TemsBody extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tems, User }) {
      this.belongsTo(Tems, {
        foreignKey: 'tems_id',
      });
      this.belongsTo(User, {
        foreignKey: 'user_id',
      });
    }
  }
  TemsBody.init({
    bodyName: DataTypes.TEXT,
    post: DataTypes.TEXT,
    count: DataTypes.INTEGER,
    data: DataTypes.BOOLEAN,
    tems_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'TemsBody',
  });
  return TemsBody;
};
