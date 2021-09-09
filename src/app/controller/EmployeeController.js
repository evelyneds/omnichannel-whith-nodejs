import Employee from '../models/Employee';

class EmployeeController {
    async store(req, res) {
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

