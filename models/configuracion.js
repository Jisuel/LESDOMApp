'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Configuracion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Configuracion.init({
    id_usuario: DataTypes.INTEGER,
    sonidos_activados: DataTypes.BOOLEAN,
    modo_oscuro: DataTypes.BOOLEAN,
    notificaciones_activadas: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Configuracion',
  });
  Configuracion.associate = function(models) {
      Configuracion.belongsTo(models.Usuario, { foreignKey: 'id_usuario' });
    };
  return Configuracion;
};