'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Suscripcion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Suscripcion.init({
    id_usuario: DataTypes.INTEGER,
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    estado: DataTypes.ENUM('activa', 'inactiva'),
    monto: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Suscripcion',
  });
  Suscripcion.associate = function(models) {
      Suscripcion.belongsTo(models.Usuario, { foreignKey: 'id_usuario' });
    };
  return Suscripcion;
};