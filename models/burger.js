module.exports = function(sequelize, DataTypes) {

    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
            // ,
            // set: function(value) {
            //     if (value === 'true' || value === 1) value = true;
            //     if (value === 'false' || value === 0) value = false;
            //     this.setDataValue('devoured', value);
            // }
        }
    //   ,
    //   customer_name: {
    //       type: DataTypes.STRING,
    //       allowNull: false,
    //       validate: {
    //           len: [1]
    //       }
    //   }
    });
  
    Burger.associate = function(models) {
      // each burger belongs to a customer
      // a burger can't be created without a customer due to the foreign key constraint
      Burger.belongsTo(models.Customer, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Burger;
  };