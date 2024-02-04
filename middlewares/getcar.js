const Car = require('../models/carmodel');


// Middleware
module.exports.getCar = async (req, res, next)=> {
    let car;
    try {
      car = await Car.findById(req.params.id);
      if (car == null) {
        return res.status(404).json({ message: 'Car not found.' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.car = car;
    next();
  }