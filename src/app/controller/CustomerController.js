import * as Yup from 'yup';
import Customer from '../models/Customer';

class CustomerController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6)
        });

        if(!(await schema.isValid(req.body))){
            return res.status(401).json({ message: 'Dados Inválidos' })
          }
      
          const userExists = await Customer.findOne({
             where: { 
               email: req.body.email 
              }
            });
      
          if(userExists){
            return res.status(401).json({ message: 'Usuário já cadastrado em nossa base' })
          }
      

        const { id, name, email } = await Customer.create(req.body);
        return res.json({ id, name, email });
    };
    

    async index(req,res) {
        const customer2 = await Customer.findAll();
        //const {id, name, email} = customer
        return res.status(200).json(customer2);
    };

    async delete(req, res) {
        return res.status(200).json({ message: 'Removido com sucesso.' });
    };

    async update(req, res) {
        return res.status(200).json({ message: 'Atualizado com sucesso' });
    };
}
export default new CustomerController();

