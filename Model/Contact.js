const mongosse=require('mongoose')


const ContactScheme=mongosse.Schema({
    user:{
        type: mongosse.Schema.Types.ObjectId,
        ref: 'users'
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        // unique: true // we do not need the unique email
    },
    phone:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    relationship:{
        type: String,
        default: 'Personal'
    }
})

module.exports=mongosse.model('Contact', ContactScheme)