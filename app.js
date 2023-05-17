import express from 'express'
import ProductManager from './classes/ProductManager.js'

const ProductManager = new ProductManager
app.get('/Product', async (req,res)=> {
    console.log (req.query.limit)
    const product = await ProductManager.consultarProduct(req.query.limit)
    res.send(product)
} )

app.get('/product/:id', async(req, res)=> {
    const usuario = await usuariosManager.consultarUsuariosPorId(req.params.id)
    res.send(usuario)
})

app.listen (8080, ()=> {console.log('Servidor Levantado')})