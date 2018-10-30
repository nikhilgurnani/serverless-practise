const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({  
  name: String,
  phone: Number,
  dob: Date,
  email: String,
});
userSchema.index({phone: 1, email: 1}, {unique: true});
module.exports = mongoose.model('User', userSchema);