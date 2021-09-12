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
    this.belongsTo( models.Demand, { foreignKey: 'demand_id', as: 'demand'})
    this.belongsTo( models.Store, { foreignKey: 'store_id', as: 'store'})
  }

  
};

export default Appointment;