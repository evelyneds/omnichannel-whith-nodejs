import Sequelize, { Model } from 'sequelize';

class OrderItens extends Model {
  static init(sequelize) {
    super.init({
      unit_cost: Sequelize.DOUBLE,  
      quantity: Sequelize.INTEGER,
        //canceled_at: Sequelize.DATE,
      }, {
        sequelize
      }
    );
    return this;
  }
  static associate(models){
    this.belongsTo( models.Order, { foreignKey: 'order_id', as: 'order'})
    this.belongsTo( models.Product, { foreignKey: 'product_id', as: 'product'})
    this.belongsTo( models.Customer, { foreignKey: 'customer_id', as: 'customer'})
  }
};

export default OrderItens;