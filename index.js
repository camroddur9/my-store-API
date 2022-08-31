const express = require('express')
const faker = require('faker')
const app = express()

const port = 8080

app.get('/', (req, res) => {
  res.send('Server in express')
});

app.get('/products', (req, res) => {
  const { size } = req.query
  const limit = size || 10
  const products = []

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
  }

  res.json(products)
});

app.get('/products/filter', (req, res) => {
  res.send('filter')
})

app.get('/products/:id', (req, res) => {
  const { id }= req.params
  res.json(
    {
      id,
      name: "products 2",
      price: 2000
    }
  )
})

app.get('/categories/:categoryId/products/:productsId', (req,res) => {
  const {categoryId, productsId} = req.params
  res.json(
    {
      categoryId,
      productsId,
      name: "products 2",
      price: 2000
    }
  )
})

app.get('/user', (req,res) => {
  const { limit, offset } = req.query
  if(limit && offset){
    res.json({
      limit,
      offset
    })
  }
  else{
    res.send('no query params')
  }
})

app.listen(port, () => {
  console.log('running on port ' + port)
});
