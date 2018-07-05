//connect mongodb 
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost', err=>{
    if(err){
        console.info(err)
    }else{
        console.log(`mongodb connected...`)
    }
})