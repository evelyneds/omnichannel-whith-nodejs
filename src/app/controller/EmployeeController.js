import Employee from '../models/Employee';

class EmployeeController {
    async store(req, res) {
        const { id, name, email } = await Employee.create(req.body);

        return res.json({ id, name, email });
    };

    async index(req, res) {
        //TODO Criação de GET
        const employee = await Employee.findOne({ where : {
                email: req.body.email,
             }
        });

        return res.status(200).json(employee);
        
    };








    async delete(req, res) {
        return res.status(200).json({ message: 'isso ai psiti' });
    };

    async update(req, res) {
        return res.status(200).json({ message: 'isso ai psiti' });
    };
}
export default new EmployeeController();

