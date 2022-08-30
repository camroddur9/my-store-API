const express = require('express')
const app = express()

const port = 8080

app.get('/', (req, res) => {
  res.send('Server in express')
});

app.get('/new-route', (req,res) => {
  res.send('New endpoint')
})

app.get('/products', (req, res) => {
  res.json({
    name: "Product 1",
    price: 1000
  })
})

app.listen(port, () => {
  console.log('running on port ' + port)
});
