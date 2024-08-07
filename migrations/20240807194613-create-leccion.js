'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leccions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      modulo: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      contenido: {
        type: Sequelize.TEXT
      },
      tipo_evaluacion: {
        type: Sequelize.ENUM('selección', 'cámara', 'texto')
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
    await queryInterface.dropTable('Leccions');
  }
};