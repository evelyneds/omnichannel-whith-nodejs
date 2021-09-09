import Employee from '../models/Employee';

class EmployeeController {
    async store(req, res) {
        const { id, name, email } = await Employee.create(req.body);
        return res.json({ id, name, email });
    };

    async index(req, res) {
        const employee = await Employee.findAll();
        return res.status(200).json(employee);
    };

        //TODO Criação de GET
        const employee = await Employee.findOne({ where : {
                email: req.body.email,
                password_hash: await Employee.passwordHash(req.body.password)
             }
        });

        return res.json(employee);
        
    };

    async delete(req, res) {
        return res.status(200).json({ message: 'Delete realizado com sucesso.' });
    };

    async update(req, res) {
        return res.status(200).json({ message: 'Atualização realizada com sucesso.' });
    };
}
export default new EmployeeController();

