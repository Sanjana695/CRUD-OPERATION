const validateMiddleware=(req,res,next)=>{
    const {title,price}=req.body;
    if(!title || !price || !req.files){
        return res.redirect("/addProduct");
    }
    next();
}
const Mymiddleware=(req,res,next)=>{
console.log("another middleware");
next();
}

module.exports={validateMiddleware,Mymiddleware};