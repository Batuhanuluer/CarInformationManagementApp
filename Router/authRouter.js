const express = require('express');
const app = express();
const authController = require('../Controller/authController');
const getCarmd = require('../middlewares/getcar');

app.get('/cars', authController.getCars);

app.post('/carsadd', authController.createNewCar);

app.get('/cars/:id', getCarmd.getCar, authController.getAcar);

app.patch('/cars/:id', getCarmd.getCar, authController.updateACar);

app.delete('/cars/:id', getCarmd.getCar, authController.deleteACar);

module.exports = app;
