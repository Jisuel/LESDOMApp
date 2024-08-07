'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Leccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Leccion.init({
    modulo: DataTypes.STRING,
    titulo: DataTypes.STRING,
    contenido: DataTypes.TEXT,
    tipo_evaluacion: DataTypes.ENUM('selección', 'cámara', 'texto')
  }, {
    sequelize,
    modelName: 'Leccion',
  });
  Leccion.associate = function(models) {
      Leccion.hasMany(models.Progreso, { foreignKey: 'id_leccion' });
    };
  return Leccion;
};