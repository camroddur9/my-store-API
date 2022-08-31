var express = require('express')
const faker = require('faker')

var router = express.Router()

router.get('/', (req: any, res: any) => {
  const { size } = req.query
  const limit = size || 10
  const products: Array<any> = []

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
  }

  res.json(products)
});

router.get('/filter', (req: any, res: any) => {
  res.send('filter')
})

router.get('/:id', (req: any, res: any) => {
  const { id }= req.params
  res.json(
    {
      id,
      name: "products 2",
      price: 2000
    }
  )
})

router.post('/', (req: any, res: any) => {
  const body = req.body
  res.json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req: any, res: any) => {
  const body = req.body
  const {id} = req.params
  res.json({
    message: 'updated',
    data: body,
    id
  })
})

module.exports = router
