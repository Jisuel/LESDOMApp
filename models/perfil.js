'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Perfil.init({
    id_usuario: DataTypes.INTEGER,
    foto_perfil: DataTypes.BLOB,
    marco: DataTypes.BLOB,
    nivel: DataTypes.INTEGER,
    experiencia: DataTypes.INTEGER,
    por2_activado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Perfil',
  });
  Perfil.associate = function(models) {
      Perfil.belongsTo(models.Usuario, { foreignKey: 'id_usuario' });
    };
  return Perfil;
};