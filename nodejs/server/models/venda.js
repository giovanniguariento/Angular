module.exports = (sequelize, DataTypes) => {

    const Venda = sequelize.define('vendas', {

      id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
      },  
      usuario : DataTypes.INTEGER,      
      produto: DataTypes.INTEGER,
      quantidade: DataTypes.INTEGER,
      preco_total : DataTypes.DECIMAL
      
    });
  
    return Venda;
  }
