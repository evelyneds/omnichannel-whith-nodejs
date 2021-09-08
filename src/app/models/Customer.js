import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Customer extends Model {
    static init(sequelize) {
        super.init({
          name: Sequelize.STRING,
          email: Sequelize.STRING,
          password: Sequelize.VIRTUAL,
          password_hash: Sequelize.STRING,
        }, 
        {  
          sequelize, 
        });
        this.addHook('beforeSave', async customer => {
          if(customer.password){
            customer.password_hash = await bcrypt.hash(customer.password, 10)
          }
        })
        return this;
      }
}

export default Customer;