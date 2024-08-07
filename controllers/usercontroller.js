const { Usuario } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { nombre, correo_principal, contrasena } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    const user = await Usuario.create({
      nombre,
      correo_principal,
      contrasena: hashedPassword,
      tipo_usuario: 'Básico',
      fecha_registro: new Date()
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { correo_principal, contrasena } = req.body;
  try {
    const user = await Usuario.findOne({ where: { correo_principal } });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    const isValidPassword = await bcrypt.compare(contrasena, user.contrasena);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Contraseña inválida' });
    }
    const token = jwt.sign({ id: user.id_usuario }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  register,
  login
};
