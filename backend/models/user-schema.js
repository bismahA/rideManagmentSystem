const mongoose=require('mongoose');
const autoIncrement=require('mongoose-auto-increment') ;


const RequestData = mongoose.Schema({
    Amount: Number,
    Message: String,
    Phone: Number
});

autoIncrement.initialize(mongoose.connection);
RequestData.plugin(autoIncrement.plugin, 'Requests');
const requests = mongoose.model('Requests', RequestData);

module.exports=requests;