const express = require('express')
const app = express()

const port = 8080

app.get('/', (req, res) => {
  res.send('Server in express')
});

app.get('/products', (req, res) => {
  res.json(
    [
      {
        name: "Product 1",
        price: 1000
      },
      {
        name: "Product 2",
        price: 2000
      }
    ]
  )
});

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

app.listen(port, () => {
  console.log('running on port ' + port)
});
