const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tems extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Init }) {
      this.belongsTo(Init, {
        foreignKey: 'init_id',
      });
    }
  }
  Tems.init({
    temsName: DataTypes.STRING,
    init_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tems',
  });
  return Tems;
};
