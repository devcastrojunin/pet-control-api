'use strict';
module.exports = function(app) {
  var clientList = require('../controllers/appController');

  // clientList Routes
  app.route('/clientes')
    .get(clientList.list_all_clients)
    .post(clientList.create_a_client);
   
   app.route('/clientes/:id')
    .get(clientList.read_a_client)
    .put(clientList.update_a_client)
    .delete(clientList.delete_a_client);
    };