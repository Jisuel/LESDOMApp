'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarjeta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tarjeta.init({
    id_usuario: DataTypes.INTEGER,
    numero_tarjeta: DataTypes.STRING,
    fecha_vencimiento: DataTypes.DATE,
    cvv: DataTypes.STRING,
    nombre_titular: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tarjeta',
  });
  Tarjeta.associate = function(models) {
      Tarjeta.belongsTo(models.Usuario, { foreignKey: 'id_usuario' });
    };
  return Tarjeta;
};