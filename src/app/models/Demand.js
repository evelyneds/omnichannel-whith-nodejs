import Sequelize, { Model } from 'sequelize';

class Demand extends Model {
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
    //this.belongsTo( models.Product, { foreignKey: 'product_id', as: 'product'})
    this.belongsTo( models.Customer, { foreignKey: 'customer_id', as: 'customer'})
    this.belongsTo( models.Status, { foreignKey: 'status_id', as: 'status'})
    //this.belongsTo( models.Appointment, { foreignKey: 'appointment_id', as: 'appointment'})
  }
};

export default Demand;