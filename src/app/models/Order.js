import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init({
        //id: Sequelize.INTEGER,
      }, {
        sequelize
      }
    );
    return this;
  }
  static associate(models){
    this.belongsTo( models.Customer, { foreignKey: 'customer_id', as: 'customer'})
  }
};

export default Order;