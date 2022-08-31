var express = require('express')
const routes = require('./routes/index.ts')

const app = express()

const port = 8080

app.get('/', (req: any, res: any) => {
  res.send('Server in express')
});

app.listen(port, () => {
  console.log('running on port ' + port)
});

routes(app)
