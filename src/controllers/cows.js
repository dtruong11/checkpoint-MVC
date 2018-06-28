const model = require('../models/cows')

function getAll(req, res, next) {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.status(200).json({
    data
  })
}

function getOne(req, res, next) {
  const data = model.getOne(req.params.id)
  res.status(200).json({
    data
  })
}

function create(req, res, next) {
  const result = model.create(req.body)

  if (result.errors) {
  return  next({
      status: 400,
      message: 'Could not create new cow',
      errors: result.errors
    })
  }

  res.status(201).json({
    data: result
  })
}

function update(req, res, next) {
  const result = model.update(req.params.id, req.body)

  if (result.errors) {
  return  next({
      status: 404,
      message: 'Could not find cow',
      errors: result.errors
    })
  }

  res.status(200).json({
    data: result
  })
}

function destroy(req, res, next) {
  const result = model.destroy(req.params.id)

  if (result.errors) {
  return  next({
      status: 404,
      message: 'Could not find cow',
      errors: result.errors
    })
  }
  res.status(200).json({
    data: result
  })
}


module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy
}
