import jwt from 'jsonwebtoken';
import Customer from '../models/Customer';

import authConfig from '../../config/auth';

class SessionController{
    async store(req, res){
      const { email, password } = req.body;
  
      const customer = await Customer.findOne({
        where: { email }
      });
  
      if(!customer){
        return res.status(401).json({ message: 'O usuário não está cadastrado.'});
      };
  
      if(!(await customer.checkPassword(password))){
        return res.status(400).json({ message: 'Senha incorreta.'});
      };
  
      const { id, name } = customer;
  
      return res.json({
        customer: {
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
  
  export default new SessionController();