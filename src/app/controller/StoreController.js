import Store from '../models/Store';

class StoreController {
    async store(req, res) {
        const { id, company_name, address } = await Store.create(req.body);
        return res.json({ id, company_name, address });
    };

    async index(req, res) {
        const store = await Store.findAll();
        console.log(store);
        return res.status(200).json(store);
    };

    async delete(req, res) {
        Store.destroy({ where: { id: req.id } });
        return res.status(200).json({ message: 'Removido com sucesso.' });
    };

    async update(req, res) {
        //TODO necessita revisão
        const { id, company_name, address } = await Store.update(req.body);
        const store = await Store.findByPk(req.id)

        return res.status(200).json({ message: 'Atualizado com sucesso' });
    };
}

export default new StoreController();
