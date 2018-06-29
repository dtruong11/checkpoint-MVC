const shortid = require('shortid')
const cows = [{
  id: shortid.generate(),
  name: "Sexy Cow",
  drink: "orange juice",
  partner: "fatty cow"
}, {
  id: shortid.generate(),
  name: "Nerdy Cow",
  drink: "melon juice",
  partner: "skinny cow"
}]


function getAll(limit) {
  return limit ? cows.slice(0, limit) : cows
}

function getOne(id) {
  const errors = []
  const cow = cows.find(el => el.id === id)

  if (!cow) {
    errors.push('cow is not found')
    response = {
      errors
    }
  } else
    return cow
}

function create(body) {
  const errors = []
  const name = body.name
  const drink = body.drink
  const partner = body.partner

  let response
  if (!name || !drink || !partner) {
    errors.push('name, drink and partner are required')
    response = {
      errors
    }
  } else {
    const cow = {
      id: shortid.generate(),
      name,
      drink,
      partner
    }
    response = cow
    cows.push(response)
  }
  return response
}

function update(id, body) {
  const errors = []
  let response
  const name = body.name
  const drink = body.drink
  const partner = body.partner
  const cow = cows.find(cow => cow.id === id)

  if (cow) {
    if (name && drink && partner) {
      cow.name = name
      cow.drink = drink
      cow.partner = partner

      response = cow
      cows.push(response)
    } else {
      errors.push('body does contain the right format')
      response = {
        errors
      }
    }
  } else {
    errors.push('cow is not found')
    response = {
      errors
    }
  }
  return response
}

function destroy(id) {
  const errors = []
  let response
  const cow = cows.find(el => el.id === id)
  if (cow) {
    cows.splice(cows.indexOf(cow), 1)
    response = cow
  } else {
    errors.push('cow is not found')
    response = {
      errors
    }
  }
  return response
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy
}
