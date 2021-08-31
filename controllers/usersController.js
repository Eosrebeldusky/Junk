const userModel = require('../models/usersModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {

    create: async function(req,res,next){
        try{
        const user = new userModel({
            userName: req.body.userName,
            mail: req.body.mail,
            password: req.body.password
        })
          const userCreated = await user.save()  
          res.json(userCreated)
        }catch(e){
            if(e.message){
                res.status(500).json({status:'error', mensaje:e.message})
                return
            }
            next(e)
        }       
    },

    getAll: async function (req,res,next){
        const users = await userModel.find()
        res.json(users)
    },

    login: async function(req,res,next){
        const userLogin =  await userModel.findOne({mail:req.body.mail}) // esta constante va al metodo de bcript
            if(!userLogin){
                res.json({error: true, message:'Mail Incorrecto'})
                return
            }

        if(bcrypt.compareSync(req.body.password,userLogin.password)){
            const token = jwt.sign({userId:userLogin._id},req.app.get('secretKey'),{expiresIn:'1h'}) // la secret Key la seteo en el App.js
            res.json({error:false, message:'login ok', token:token})
            return
        }else{
            res.json({error:true, message:'password incorrecto'})
        }

    }
}