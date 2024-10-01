const Products = require('../models/Products')
const Buy = require('../models/Buy');
const { Op } = require('sequelize')

class ProductsController{

      static async showProducts(req,res){

        let search = '';
        if(req.query.search){
         search = req.query.search;
        }

       
        const products = await Products.findAll({raw:true, where: {
            name: { [Op.like]: `%${search}%` }
        },})

        res.render('products/home',{products})
    }
       
    

    static async registerUser(req,res){
        res.render('auth/register')

    }

    static async registerProductsPost(req,res){
        
    }

    static async addProducts(req,res){
        res.render('products/add')
    }

    static async addProductsPost(req, res){
        const name = req.body.name
        const price = req.body.price
        const image = req.body.image
        const product = {name:name, price:price, image:image}

        await Products.create(product)

        res.redirect('/products')
    }

    static async seeProducts(req,res){
        const id = req.params.id;

        const product = await Products.findOne({where:{id:id}, raw:true})

        res.render('products/seemore', {product})
    }

    static async removeProducts(req,res){
        const id = req.params.id;
        await Products.destroy({where:{id:id}})
        res.redirect('/')
    }

    static async buyProducts(req,res){
        const product = await Buy.findAll({raw:true})
        

        res.render('products/buy',{product})
    }
    
    static async addProductscart(req,res){
        const name = req.body.name;
        const price = req.body.price;
        const image = req.body.image;
        const buy = {name:name, price:price, image:image}

        await Buy.create(buy)

        res.redirect('/products/buy')

       
    }

    static async removeBuy(req,res){
        const id = req.body.id;
        await Buy.destroy({where:{id:id}})
        res.redirect('/products/buy')
    }

    static async finishPost(req,res){
        
        res.redirect('/products/finish')
    }
     static async finish(req,res){
        res.render('products/finish')
     }
     

}



module.exports = ProductsController