const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema ({

    name: {
        type : String
    }, 

    subject: {
        type : String
    }, 

    


})

module.exports=  mongoose.model('Book', BookSchema)