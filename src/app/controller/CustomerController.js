import Customer from '../models/Customer';

class CustomerController {
    async store(req, res) {
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

