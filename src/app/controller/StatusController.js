import Status from '../models/Status';

class StatusController {
    async store(req, res) {
        const { id, status } = await Status.create(req.body);
        return res.json({ message: 'Status cadastrado com sucesso',id, status });
    };

    async index(req, res) {
        const status = await Status.findAll({
            attributes: ['id', 'status']
        });
        return res.status(200).json(status);
    };

    async delete(req, res) {
        const status = await Status.findByPk(req.params.id);
        await status.destroy();
        return res.status(200).json({ message: 'Status removido com sucesso.' });
    };

    async update(req, res) {
        const status = await Status.findByPk(req.params.id);
        await status.update(req.body);
        return res.status(200).json({ message: 'Status atualizado com sucesso.', status });
    };

    async show(req, res) {
        const status = await Status.findByPk(req.params.id);
        return res.json({ status });
    };
}

export default new StatusController();