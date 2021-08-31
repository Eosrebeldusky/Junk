const categoriesModel = require('../models/categoriesModel');

module.exports ={

   //busqueda
    getAllCategories: async function(req,res,next){
        try{
            const categ =  await categoriesModel.find()
            res.json(categ)
        }catch(e){
            console.log(e)
        }
    },
    
    getById: async function(req,res,next){
        try{
            const categ = await categoriesModel.findById(req.params.id)
            res.json(categ)
        }catch(e){
            console.log(e)
        }
    },

    //gestion

    createCategory: async function(req, res,next){
        const categ =  new categoriesModel({
            name: req.body.name,            
        })
        const response = await categ.save()
        res.json(response)
    },

    deleteOne: async function(req,res,next) {
        try{
            const categ = await categoriesModel.deleteOne({_id:req.params.id})
            res.json(categ)
        }catch(e){
            next(e)
        }
    },


    updateOne: async function(req,res,next){
        try{
            const categ = await categoriesModel.updateOne({_id:req.params.id},req.body)
            res.json(categ)
        }catch(e){
            console.log(e)
        }
    }

}