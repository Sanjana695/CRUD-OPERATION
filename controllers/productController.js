const Product=require('../models/Product');
const path=require('path');

const create=(req,res)=>{
    console.log(req.body);
    res.render("addProduct");
}
const createProduct=(req,res)=>{
    console.log(req.body);
    const img=req.files.pic;
    img.mv(path.resolve(__dirname,"public/img",img.name),(err)=>{
        Product.create({...req.body,pic:img.name},(err,product)=>{
            console.log(product)
            res.redirect("/productList")
        })
    })
}

const getProduct= async(req,res)=>{
    console.log(req.body);
    const products= await Product.find();
    console.log(products)
    res.render("productList",{products})
}

const productDetail=async(req,res)=>{
    console.log(req.body);
    const pid=req.params.pid;
    console.log("pid:",pid);
    const prod=await Product.findById(pid);
    res.render("productDetail",{product:prod});
}

module.exports={create,createProduct,getProduct,productDetail};