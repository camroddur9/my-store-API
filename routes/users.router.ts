var express = require('express')
var router = express.Router()

router.get('/', (req: any,res: any) => {
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
