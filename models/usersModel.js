const mongoose = require('../bin/mongodb')
const bcrypt = require('bcrypt');
const userSchema =  new mongoose.Schema({
  userName:String,
  mail:String,
  password: String
});

userSchema.pre('save',function(next){
  this.password = bcrypt.hashSync(this.password,10)
  next()
})

module.exports = mongoose.model('users', userSchema)


