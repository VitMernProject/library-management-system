const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    regno: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    },
    tokens: [
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
})


//password
userSchema.pre('save', async function(next) {
    if(this.isModified('password')){

        this.password = await bcrypt.hash(this.password, 10);
        this.cpassword = await bcrypt.hash(this.cpassword, 10);
    }
    next();
});

//generating token for user
userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id : this._id}, process.env.JWTSECRET);
        this.tokens=this.tokens.concat([{token:token}]);
        await this.save();
        return token;
    } catch (err) {
        console.log(err);

    }
}

const User = mongoose.model('USER', userSchema);
module.exports = User;