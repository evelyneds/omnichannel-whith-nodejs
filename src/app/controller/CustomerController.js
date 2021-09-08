import Customer from '../models/Customer';

class CustomerController {
    async store(req, res) {
      const {id, name, email} = await Customer.create(req.body);
        //const { id, name, email } = await Customer.create(req.body);
        return res.json({id, name, email });
    };

    async index(req, res) {      
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
export default new CustomerController();

