const express=require('express');
const mongoose=require('mongoose');
const path=require("path");
const bodyParser=require('body-parser');
const fileUpload=require('express-fileupload');

const userController=require("./controllers/userController");

const productController=require("./controllers/productController");
const middleware=require("./middlewares/");

const app=express();
app.use(fileUpload());
app.set("view engine","ejs");

app.use("/images",express.static("public/img"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb://127.0.0.1:27017/createuser");

app.get("/signup",userController.create);

app.post("/user/create",userController.signup);

app.get("/addProduct",productController.create);

app.post("/product/addProduct",middleware.validateMiddleware, middleware.Mymiddleware, productController.createProduct);

app.get("/productList",productController.getProduct);

app.get("/product/getProduct/:pid",productController.productDetail);

app.get("/",userController.home);



app.use("*",function(req,res){
    res.status(404).json({msg:"NOT FOUND"});
})

app.listen(3000,function(){
    console.log("listening at port 3000");
})