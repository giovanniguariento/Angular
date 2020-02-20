//var somaModulo = require ('./somar') ;
//var http = require('http');
const util = require('util')
var express = require('express');
var Sequelize = require('sequelize');
var bodyParser = require('body-parser');
var cors = require('cors');



const porta = process.env.PORT || 8080;

//const sequelize = new Sequelize('grandeporte', 'root', 'root', {host: 'localhost', dialect: 'mysql'}  );

const { Professors, Usuarios, Produtos , Vendas } = require('./sequelize')

var app = express();

app.use(bodyParser.json())
app.use( cors() )
//console.log(Professor);
//console.log(util.inspect(Professor, {showHidden: false, depth: null}))

app.get('/' , function (request, response){
    response.send('Olá');
});

// app.get('/usuario' , function (request, response){
//     response.send('Usuário');
// });

app.get('/professores' , cors(), function (request, response){
    Professors.findAll().then( p => {
        console.log(p);
        response.send(p);
    }
    );
});

app.post('/professores' , function (request, response){
    Professors.create(request.body).then( p => {
        console.log(p);
        response.send(p);
    }
    );
});

app.get('/professores/:id' , function (request, response){
    Professors.findOne(
        {
            where: { id: request.params.id }
        }
    ).then( p => {
        console.log(p);
        response.send(p);
    }
    );
});

app.patch('/professores/:id' , function (request, response){
    Professors.update(request.body,
        {
            where: { id: request.params.id }
        }
    ).then( p => {
        console.log(p);
        //response.send(p);

        Professors.findOne(
            {
                where: { id: request.params.id }
            }
        ).then( p1 => {
            console.log(p1);
            response.send(p1);
        }
        );


    }
    );
});

app.delete('/professores/:id' , function (request, response){
    Professors.destroy(
        {
            where: { id: request.params.id }
        }
    ).then( p => {

        response.send(true);
    }
    );
});

// --------------------------------------------------------------

app.get('/usuarios' , cors(), function (request, response){
    Usuarios.findAll().then( p => {
        console.log(p);
        response.send(p);
    }
    );
});

app.post('/usuarios' , function (request, response){
    Usuarios.create(request.body).then( p => {
        console.log(p);
        response.send(p);
    }
    );
});

app.post('/usuarios/auth', function (request, response) {
  Usuarios.findOne({
    where: {
      email : request.body.email,
      senha : request.body.senha
    }
  }).then(p => {
    console.log(p);
    if (p){
      response.send(true);
    }
    else {
      response.send(false);
    }


  });
});

app.get('/usuarios/:id' , function (request, response){
    Usuarios.findOne(
        {
            where: { id: request.params.id }
        }
    ).then( p => {
        console.log(p);
        response.send(p);
    }
    );
});

app.patch('/usuarios/:id' , function (request, response){
    Usuarios.update(request.body,
        {
            where: { id: request.params.id }
        }
    ).then( p => {
        console.log(p);
        //response.send(p);

        Usuarios.findOne(
            {
                where: { id: request.params.id }
            }
        ).then( p1 => {
            console.log(p1);
            response.send(p1);
        }
        );


    }
    );
});

app.post('/usuarios/:id' , function (request, response){
    Usuarios.update(request.body,
        {
            where: { id: request.params.id }
        }
    ).then( p => {
        console.log(p);
        //response.send(p);

        Usuarios.findOne(
            {
                where: { id: request.params.id }
            }
        ).then( p1 => {
            console.log(p1);
            response.send(p1);
        }
        );


    }
    );
});

app.delete('/usuarios/:id' , function (request, response){
    Usuarios.destroy(
        {
            where: { id: request.params.id }
        }
    ).then( p => {

        response.send(true);
    }
    );
});

// --------------------------------------------------------------

app.get('/produtos' , cors(), function (request, response){
    Produtos.findAll().then( p => {
        console.log(p);
        response.send(p);
    }
    );
});

app.post('/produtos' , function (request, response){
    Produtos.create(request.body).then( p => {
        console.log(p);
        response.send(p);
    }
    );
});


app.get('/produtos/:id' , function (request, response){
    Produtos.findOne(
        {
            where: { id: request.params.id }
        }
    ).then( p => {
        console.log(p);
        response.send(p);
    }
    );
});

app.patch('/produtos/:id' , function (request, response){
    Produtos.update(request.body,
        {
            where: { id: request.params.id }
        }
    ).then( p => {
        console.log(p);
        //response.send(p);

        Produtos.findOne(
            {
                where: { id: request.params.id }
            }
        ).then( p1 => {
            console.log(p1);
            response.send(p1);
        }
        );


    }
    );
});

app.post('/produtos/:id' , function (request, response){
    Produtos.update(request.body,
        {
            where: { id: request.params.id }
        }
    ).then( p => {
        console.log(p);
        //response.send(p);

        Produtos.findOne(
            {
                where: { id: request.params.id }
            }
        ).then( p1 => {
            console.log(p1);
            response.send(p1);
        }
        );


    }
    );
});

app.delete('/produtos/:id' , function (request, response){
    Produtos.destroy(
        {
            where: { id: request.params.id }
        }
    ).then( p => {

        response.send(true);
    }
    );
});

// --------------------------------------------------------------

app.get('/vendas' , cors(), function (request, response){
    Vendas.findAll().then( p => {
        console.log(p);
        response.send(p);
    }
    );
});

app.post('/vendas' , function (request, response){
    Vendas.create(request.body).then( p => {
        console.log(p);
        response.send(p);
    }
    );
});

app.get('/vendas/:id' , function (request, response){
    Vendas.findOne(
        {
            where: { id: request.params.id }
        }
    ).then( p => {
        console.log(p);
        response.send(p);
    }
    );
});

app.patch('/vendas/:id' , function (request, response){
    Vendas.update(request.body,
        {
            where: { id: request.params.id }
        }
    ).then( p => {
        console.log(p);
        //response.send(p);

        Vendas.findOne(
            {
                where: { id: request.params.id }
            }
        ).then( p1 => {
            console.log(p1);
            response.send(p1);
        }
        );


    }
    );
});

app.post('/vendas/:id' , function (request, response){
    Vendas.update(request.body,
        {
            where: { id: request.params.id }
        }
    ).then( p => {
        console.log(p);
        //response.send(p);

        Vendas.findOne(
            {
                where: { id: request.params.id }
            }
        ).then( p1 => {
            console.log(p1);
            response.send(p1);
        }
        );


    }
    );
});

app.delete('/vendas/:id' , function (request, response){
    Vendas.destroy(
        {
            where: { id: request.params.id }
        }
    ).then( p => {

        response.send(true);
    }
    );
});



app.listen(porta , ()=> { console.log('Porta' , porta) });


/*
express = require('express');

console.log('olá');

var r = somaModulo(1,3);

console.log(r);

http.createServer().listen(3000);
console.log('O servidor está rodando na porta 3000');

*/


/*sequelize.authenticate()
    .then(
        () => {console.log('DB conectado');}
    ).catch(
        () => {console.log('DB NÂO conectado');}
    );
*/
