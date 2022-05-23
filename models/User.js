const mongoose=require('mongoose');
const bcrypt=require("bcrypt");
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    username:{type:String},
    password:{type:String},
})

UserSchema.pre('save',function(next){
    const user=this;
    bcrypt.hash(user.password,5,function(err,hash){
        user.password=hash
        next();
    })
})
const User=mongoose.model("User",UserSchema);

module.exports=User;