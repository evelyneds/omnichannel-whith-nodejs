import Sequelize, { Model } from 'sequelize';

class ShoppingCart extends Model {
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
    this.belongsTo( models.Product, { foreignKey: 'product_id', as: 'product'})
    this.belongsTo( models.Customer, { foreignKey: 'customer_id', as: 'customer'})
  }
};
export default ShoppingCart;