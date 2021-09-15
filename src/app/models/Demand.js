import Sequelize, { Model } from 'sequelize';

class Demand extends Model {
  static init(sequelize) {
    super.init({
      }, {
        sequelize
      }
    );
    return this;
  }
  static associate(models){
    this.belongsTo( models.Customer, { foreignKey: 'customer_id', as: 'customer'})
    this.belongsTo( models.Status, { foreignKey: 'status_id', as: 'status'})
  }
};

export default Demand;