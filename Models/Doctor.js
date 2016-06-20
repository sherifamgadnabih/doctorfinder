var mongoose=require('mongoose');

var DoctorSchema=mongoose.Schema({
Name:String,
Phone:String,
Address:String

})

module.exports=mongoose.model('Doctor',DoctorSchema);