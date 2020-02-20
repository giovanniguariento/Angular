module.exports = (sequelize, DataTypes) => {

    const Produto = sequelize.define('produtos', {

      id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
      },  
      nome: DataTypes.STRING,      
      descricao: DataTypes.STRING,
      preco : DataTypes.DECIMAL
      
    });
  
    return Produto;
  }
