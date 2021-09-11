import Sequelize, { Model } from 'sequelize';

class OrderItens extends Model {
  static init(sequelize) {
    super.init({
      
      quantity: Sequelize.INTEGER,  
      }, {
        sequelize
      }
    );
    return this;
  }
  static associate(models){
    this.belongsTo( models.Order, { foreignKey: 'demand_id', as: 'demand'})
    this.belongsTo( models.Product, { foreignKey: 'product_id', as: 'product'})
  }



};

export default OrderItens;

