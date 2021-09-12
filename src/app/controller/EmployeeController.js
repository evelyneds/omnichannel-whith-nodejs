import * as Yup from 'yup';
import Employee from '../models/Employee';

class EmployeeController {
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6)
        });

        if(!(await schema.isValid(req.body))){
            return res.status(401).json({ message: 'Dados Inválidos' })
          }

          const EmployeeExists = await Employee.findOne({
            where: { 
              email: req.body.email 
             }
           });
     
         if(EmployeeExists){
           return res.status(401).json({ message: 'Funcionário já cadastrado' })
         }
     
       const { id, name, email } = await Employee.create(req.body);
       return res.json({ id, name, email });
   };

    async index(req, res) {
        const store = await Employee.findAll({
        attributes: ['id', 'name'] //Retorna campos específicos
        });
        return res.status(200).json(store);
    };

    async delete(req, res) {
        return res.status(200).json({ message: 'Removido com sucesso' });
    };

    async update(req, res) {
        return res.status(200).json({ message: 'Atualizado com sucesso' });
    };    
    
}
export default new EmployeeController();

