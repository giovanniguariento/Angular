create database grandeporte;

use grandeporte;

create table professors (
    id int primary key auto_increment,
    nome varchar (255),
    email varchar (255)
);

create table usuarios (
    id int primary key auto_increment,
    nome varchar (255),
    email varchar (255),
    senha varchar (255),
    tipo_usuario  int ,
    cep  varchar (255),
    logradouro  varchar (255),
    numero  varchar (255),
    complemento  varchar (255),
    cidade  varchar (255),
    bairro  varchar (255),
    estado  varchar (255)
);

create table produtos (
    id int primary key auto_increment,
    nome varchar (255),
    descricao varchar (255),
    preco  decimal (10,2) 
);

create table vendas (
    id int primary key auto_increment,
    produto int references produto(id),
    usuario int references usuarios(id),
    quantidade int ,
    preco_total decimal (10,2)
);

