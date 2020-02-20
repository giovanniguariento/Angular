module.exports = (sequelize, DataTypes) => {

    const Professor = sequelize.define('professors', {

      id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
      },  
      nome: DataTypes.STRING,      
	    email: DataTypes.STRING,
      
    });
  
    return Professor;
  }
