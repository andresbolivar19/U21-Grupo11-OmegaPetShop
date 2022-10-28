// Guarda toda la libreria de express.*
// const express = require('express');

// Guarda solo express.Router
const { Router } = require('express');
const swaggerUI = require('swagger-ui-express')
const swaggerDocs = require('./swagger.json')

const authController = require ('../controllers/authController');
const userController = require ('../controllers/userController');

let router = Router();

router.use('/api-docs', swaggerUI.serve);
router.get('/api-docs', swaggerUI.setup(swaggerDocs));

// Authentication
router.post('/auth/login', authController.login );
// Se agrega authController.verifyToken para que verifique token antes de entrar a la ruta
router.post('/auth/test', authController.verifyToken, authController.test );

// Users
router.post('/user/save', userController.saveUser );


module.exports = router;
