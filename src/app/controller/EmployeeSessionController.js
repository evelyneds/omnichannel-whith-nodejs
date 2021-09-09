import jwt from 'jsonwebtoken';
import Employee from '../models/Employee';

import authConfig from '../../config/auth';

class EmployeeSessionController{
    async store(req, res){
      const { email, password } = req.body;
  
      const employee = await Employee.findOne({
        where: { email }
      });
  
      if(!employee){
        return res.status(401).json({ message: 'O usuário não está cadastrado.'});
      };
  
      if(!(await employee.checkPassword(password))){
        return res.status(400).json({ message: 'Senha incorreta.'});
      };
  
      const { id, name } = employee;
  
      return res.json({
        employee: {
          id, 
          name, 
          email 
        },
        token: jwt.sign({ id, name, email }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        })
      });
    }
  }
  
  export default new EmployeeSessionController();