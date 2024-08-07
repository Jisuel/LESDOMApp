'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progreso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Progreso.init({
    id_usuario: DataTypes.INTEGER,
    id_leccion: DataTypes.INTEGER,
    completado: DataTypes.BOOLEAN,
    fecha_completado: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Progreso',
  });
  Progreso.associate = function(models) {
      Progreso.belongsTo(models.Usuario, { foreignKey: 'id_usuario' });
      Progreso.belongsTo(models.Leccion, { foreignKey: 'id_leccion' });
    };
  return Progreso;
};