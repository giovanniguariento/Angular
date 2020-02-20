module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define('usuarios', {

      id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
      },  
      nome: DataTypes.STRING,      
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      tipo_usuario : DataTypes.INTEGER,
      cep : DataTypes.STRING,
      logradouro : DataTypes.STRING,
      numero : DataTypes.STRING,
      complemento : DataTypes.STRING,
      cidade : DataTypes.STRING,
      bairro : DataTypes.STRING,
      estado : DataTypes.STRING
      
    });
  
    return Usuario;
  }
