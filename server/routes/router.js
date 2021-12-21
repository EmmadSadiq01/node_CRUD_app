const express = require('express');
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')

/**
 * @description Root Route
 * @method get
 */

route.get('/', services.HomeRoute)

/**
* @description addUser
* @method get /addUser
*/

route.get('/addUser', services.addUser)


/**
* @description updateUser
* @method get /updateUser
*/

route.get('/updateUser', services.updateUser)

module.exports = route;

/**
* @description CreateUser
* @method post /api/createUser
*/

route.post('/api/createUser', controller.createUser)
/**
* @description getUser
* @method get /api/getUser
*/

route.get('/api/getUsers', controller.getUser)
/**
* @description updateUser
* @method put /api/updateUser
*/

route.put('/api/updateUser/:id', controller.updateUser)


/**
* @description deleteUser
* @method put /api/deleteUser
*/

route.delete('/api/deleteUser/:id', controller.deleteUser)

module.exports = route;