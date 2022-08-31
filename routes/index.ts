const productsRouter = require('./products.router')
const categoriesRouter = require('./categories.router')
const userRouter = require('./users.router')

function routersApi(app: any){
  app.use('/products', productsRouter)
  app.use('/categories', productsRouter)
  app.use('/users', productsRouter)
}

module.exports = routersApi
