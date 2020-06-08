'user strict';
var sql = require('../db.js');

//Task object constructor
var Cliente = function(cliente){
    this.id = cliente.id;
    this.nome = cliente.nome;
    this.email = cliente.email;
    this.cpf = cliente.cpf;
    this.usuario = cliente.usuario;
    this.senha = cliente.senha;
    this.endereco = cliente.endereco;
    this.numero = cliente.numero;
    this.complemento = cliente.complemento;
    this.bairro = cliente.bairro;
    this.estado = cliente.estado;
    this.cidade = cliente.cidade;
    this.isAdmin = cliente.isAdmin;
    this.created_at = new Date();
    this.updated_at = new Date();
};
Cliente.createClient = function (newClient, result) {    
        sql.query("INSERT INTO clientes set ?", newClient, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Cliente.getClientById = function (clientId, result) {
        sql.query("Select * from clientes where id = ? ", clientId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);              
                }
            });   
};
Cliente.getAllClients = function (result) {
        sql.query("Select * from clientes", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('tasks : ', res);  

                 result(null, res);
                }
            });   
};
Cliente.updateById = function(id, client, result){
  sql.query("UPDATE clientes SET nome = ? WHERE id = ?", [client.nome, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Cliente.remove = function(id, result){
     sql.query("DELETE FROM clientes WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Cliente;