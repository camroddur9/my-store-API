var express = require('express')

const productsRouter = require('./products.router')
const categoriesRouter = require('./categories.router')
const userRouter = require('./users.router')

function routersApi(app: any){
  var router = express.Router()
  app.use('/api/v1', router)
  router.use('/products', productsRouter)
  router.use('/categories', productsRouter)
  router.use('/users', productsRouter)
}

module.exports = routersApi
