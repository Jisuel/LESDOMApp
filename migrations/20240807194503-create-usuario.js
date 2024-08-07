'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      correo_principal: {
        type: Sequelize.STRING
      },
      correo_secundario: {
        type: Sequelize.STRING
      },
      contrasena: {
        type: Sequelize.STRING
      },
      fecha_registro: {
        type: Sequelize.DATE
      },
      tipo_usuario: {
        type: Sequelize.ENUM('Básico', 'Premium')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};