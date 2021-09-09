import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Employee extends Model {

    static init(sequelize) {
        super.init({
          name: Sequelize.STRING,
          email: Sequelize.STRING,
          password: Sequelize.VIRTUAL,
          password_hash: Sequelize.STRING
         
        }, 
        {  
          sequelize, 
        });
        this.addHook('beforeSave', async employee => {
          if(employee.password){
            employee.password_hash = await this.passwordHash(employee.password)
          }
        })
        return this;
      }

    static passwordHash (password) {
      return bcrypt.hash(password, 10);
    }
}

export default Employee;