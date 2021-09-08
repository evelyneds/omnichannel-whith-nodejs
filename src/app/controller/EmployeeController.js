import Employee from '../models/Employee';

class EmployeeController {
    async store(req, res) {
        const { id, name, email } = await Employee.create(req.body);
        return res.json({ id, name, email });
    };

    async index(req, res) {
        const employee = await Employee.findAll();
        //attributes: ['id', 'address']
        return res.status(200).json(employee);
    };

    async delete(req, res) {
        return res.status(200).json({ message: 'Delete realizado com sucesso.' });
    };

    async update(req, res) {
        return res.status(200).json({ message: 'Atualização realizada com sucesso.' });
    };
}
export default new EmployeeController();

