function logErrors (error, req, res, next) {
  console.log(error);
  next(error)
}

function errorHandler (error, req, res, next){
  res.status(500).json({
    messsage: error.messsage,
    stack: error.stack
  })
}

module.exports = {logErrors, errorHandler}
