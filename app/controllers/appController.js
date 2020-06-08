'use strict';

var Cliente = require('../model/appModel.js');

exports.list_all_clients = function (req, res) {
    Cliente.getAllClients(function (err, client) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', client);
        res.send(client);
    });
};



exports.create_a_client = function (req, res) {
    var new_client = new Cliente(req.body);

    //handles null error 
    if (!new_client.nome) {

        res.status(400).send({ error: true, message: 'Please provide client' });

    }
    else {

        Cliente.createClient(new_client, function (err, client) {

            if (err)
                res.send(err);
            res.json(client);
        });
    }
};


exports.read_a_client = function (req, res) {
    Cliente.getClientById(req.params.id, function (err, client) {
        if (err)
            res.send(err);
        res.json(client);
    });
};


exports.update_a_client = function (req, res) {
    Cliente.updateById(req.params.id, new Cliente(req.body), function (err, client) {
        if (err)
            res.send(err);
        res.json(client);
    });
};


exports.delete_a_client = function (req, res) {


    Cliente.remove(req.params.id, function (err, client) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};