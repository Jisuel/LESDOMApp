'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    correo_principal: DataTypes.STRING,
    correo_secundario: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    fecha_registro: DataTypes.DATE,
    tipo_usuario: DataTypes.ENUM('Básico', 'Premium')
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  Usuario.associate = function(models) {
      Usuario.hasMany(models.Perfil, { foreignKey: 'id_usuario' });
      Usuario.hasMany(models.Suscripcion, { foreignKey: 'id_usuario' });
      Usuario.hasMany(models.Tarjeta, { foreignKey: 'id_usuario' });
      Usuario.hasMany(models.Progreso, { foreignKey: 'id_usuario' });
      Usuario.hasMany(models.Configuracion, { foreignKey: 'id_usuario' });
    };
  return Usuario;
};