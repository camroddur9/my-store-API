var express = require('express')
var router = express.Router()

router.get('/:categoryId/products/:productsId', (req: any,res: any) => {
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


