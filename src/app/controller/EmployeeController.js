import Employee from '../models/Employee';

class EmployeeController {
    async store(req, res) {
        const { id, name, email } = await Employee.create(req.body);

        return res.json({ id, name, email });
    };

    async index(req, res) {
        //TODO Criação de GET
        /*const employee = await Employee.find({
            user: req.employee,
        })
            .sort({ createdAt: "desc" })
            .limit(20);

        return res.json(employee);*/
        
        
        const person = {
            name: "Nome da Pessoa",
            email: "teste@teste@.com"
        }
        return res.status(200).json(person);
    };


    async delete(req, res) {
        return res.status(200).json({ message: 'isso ai psiti' });
    };

    async update(req, res) {
        return res.status(200).json({ message: 'isso ai psiti' });
    };
}
export default new EmployeeController();

