const User = require("../models/User");
const create=(req,res)=>{
    console.log(req.body)
    res.render("user/create");
}

const signup=(req,res)=>{
console.log(req.body);
User.create(req.body, function(err,user){
    if(err){
        // console.log(err);
        return res.redirect("/signup")
    }
    console.log(user);
    res.redirect("/addProduct")
})
}

const home=(req,res)=>{
    res.render("home");
}
module.exports={create,signup,home};
