import express from 'express'
import productManager from '../classes/productManager.js'
const app = express()

const productManager = new productManager
app.get('/product', async (req,res)=> {
    const limit = req.query.limit
    const products = await productManager.getProducts(req.query.limit)
    res.send(products)
} )

app.get('/product/:id', async(req, res)=> {
    const products = await productManager.getProductById(req.params.id)
    res.send(usuario)
})

app.listen (8080, ()=> {console.log('Servidor Levantado')})