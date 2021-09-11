import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
  static init(sequelize) {
    super.init({
        date: Sequelize.DATE,
        canceled_at: Sequelize.DATE,
      }, {
        sequelize
      }
    );
    return this;
  }
  static associate(models){
    this.belongsTo( models.Customer, { foreignKey: 'customer_id', as: 'customer'})
    this.belongsTo( models.Employee, { foreignKey: 'employee_id', as: 'employee'})
  }
};

export default Appointment;