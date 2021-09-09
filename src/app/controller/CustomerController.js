import Customer from '../models/Customer';

class CustomerController {
    async store(req, res) {
        const { id, name, email } = await Customer.create(req.body);
        return res.json({ id, name, email });
    };

    async index() {
        const customer = await customer.findAll();
        return res.status(200).json(customer);
    };

    async delete(req, res) {
        return res.status(200).json({ message: 'Removido com sucesso.' });
    };

    async update(req, res) {
        return res.status(200).json({ message: 'Atualizado com sucesso' });
    };
}
export default new CustomerController();

