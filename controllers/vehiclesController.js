const carsModel = require('../models/carsModel');

module.exports ={


    //busqueda
    getAllCars: async function(req,res,next){
        try{
            const junk =  await carsModel.find()
            res.json(junk)
        }catch(e){
            console.log(e)
        }
    },
    
    getById: async function(req,res,next){
        try{
            const junk = await cars.findById(re.params.id)
            res.json(junk)
        }catch(e){
            console.log(e)
        }
    },

    //gestion

    createCar: async function(req, res,next){
        const cars =  new carsModel({
            brand: req.body.brand,
            model: req.body.model, 
            type: req.body.type,
            motorSize: req.body.motorSize,
            entryDate: req.body.entryDate,
            description: req.body.description,
            fee:req.body.fee,
        })
        const car = await cars.save()
        res.json(car)
    },

    deleteOne: async function(req,res,next) {
        try{
            const junk = await carsModel.deleteOne({_id:req.params.id})
            res.json(junk)
        }catch(e){
            next(e)
        }
    },


    updateOne: async function(req,res,next){
        try{
            const junk = await carsModel.updateOne({_id:req.params.id},req.body)
            res.json(junk)
        }catch(e){
            console.log(e)
        }
    }

}