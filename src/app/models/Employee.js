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
            employee.password_hash = await bcrypt.hash(employee.password, 10)
          }
        })
        return this;
      }
      checkPassword(password){
        return bcrypt.compare(password, this.password_hash)
      }

}

export default Employee;