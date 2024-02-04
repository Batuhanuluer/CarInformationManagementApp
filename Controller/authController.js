const Car = require('../models/carmodel');



module.exports.getCars =( async (req,res,next) =>{
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({message : err.message})
    }
}) 

module.exports.createNewCar =(async (req,res,next) =>{
    const car = new Car({
        title:req.body.title,
        description:req.body.description,
        price:req.body.price
    })
    try {
        const newCar = await car.save();
        res.status(201).json(newCar);
        
    } catch (err) {
        res.status(400).json({message:err.message})
    }
}) 

module.exports.getAcar = async (req,res,next) =>{
    res.json(res.car);
}

module.exports.updateACar = async (req,res,next) =>{
    if (req.body.title != null) {
        res.car.title = req.body.title;
      }
    
      if (req.body.description != null) {
        res.car.description = req.body.description;
      }
    
      if (req.body.price != null) {
        res.car.price = req.body.price;
      }
    
      try {
        const updatedCar = await res.car.save();
        res.json(updatedCar);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
}

module.exports.deleteACar = async (req, res, next) => {
  try { 
    if (!res.car) {
      return res.status(404).json({ message: 'Car information not found.' });
    }

    const deletedCar = await Car.findByIdAndDelete(res.car.id);

    if (!deletedCar) {
      return res.status(404).json({ message: 'Car information not found.' });
    }

    res.json({ message: 'Car deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
