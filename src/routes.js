const productsHandler = require('./handlers/productsHandler')
const usersHandler = require('./handlers/usersHandler')

const userSchema = require('./schemas/userSchema')
const {
  productSchema,
  productSchemaRequired
} = require('./schemas/productSchema')

module.exports = [
  /** users **/
  {
    method: 'POST',
    path: '/register',
    handler: usersHandler.register,
    options: {
      validate: {
        payload: userSchema
      },
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/login',
    handler: usersHandler.login,
    options: {
      auth: false
    }

  },
  /** products **/
  {
    method: 'GET',
    path: '/products',
    handler: productsHandler.index,
    options: {
      auth: false
    }
  },
  {
    method: 'GET',
    path: '/products/{idProduct}',
    handler: productsHandler.show,
    options: {
      auth: false
    }
  },
  {
    method: 'POST',
    path: '/products',
    handler: productsHandler.store,
    options: {
      validate: {
        payload: productSchemaRequired
      },
      auth: 'jwt'
    }
  },
  {
    method: 'PATCH',
    path: '/products/{idProduct}',
    handler: productsHandler.update,
    options: {
      validate: {
        payload: productSchema
      },
      auth: 'jwt'
    }
  },
  {
    method: 'DELETE',
    path: '/products/{idProduct}',
    handler: productsHandler.destroy,
    options: {
      auth: 'jwt'
    }
  }
]
