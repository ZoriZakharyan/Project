const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Init extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tems }) {
      this.hasMany(Tems, {
        foreignKey: 'init_id',
      });
    }
  }
  Init.init({
    initName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Init',
  });
  return Init;
};
