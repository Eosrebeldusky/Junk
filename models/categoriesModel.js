const mongoose = require('../bin/mongodb')

const categorySchema =  new mongoose.Schema({name: String});

    categorySchema.static.findByIdAndValidate = async function(id){
        const categ = await this.findById(id);
            if(!categ){
                return{
                    error:true,
                    message:'No existe esa categoria'
                }
            }
            return categ;
    }


module.exports = mongoose.model('categories', categorySchema)


