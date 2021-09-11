import Status from '../models/Status';


class StatusController {
    async store(req, res) {
        const status = await Status.create(req.body);
        if (!status) {
            return res.status(404).json({ message: "Erro ao cadastrar status." });
        } else {
            return res.status(200).json({ status, message: 'Status cadastrado com sucesso' });
        }
    };

    async index(req, res) {
        const status = await Status.findAll({
            attributes: ['id', 'status']

        });
        if (!status) {
            return res.status(404).json({ message: "Nenhum status encontrado." });
        } else {
            return res.status(200).json({ status, message: 'Status listado com sucesso' });
        }

    };

    async delete(req, res) {
        const status = await Status.findByPk(req.params.id);
        if (!status) {
            return res.status(404).json({ message: "Nenhum status encontrado." });
        } else {
            await status.destroy();
            return res.status(200).json({ message: 'Status removido com sucesso.' });
        }
    };

    async update(req, res) {
        const status = await Status.findByPk(req.params.id);
        if (!status) {
            return res.status(404).json({ message: "Nenhum status encontrado." });
        } else {
            await status.update(req.body);
            return res.status(200).json({ message: 'Status atualizado com sucesso.', status });
        }
    };

    async show(req, res) {
        const status = await Status.findByPk(req.params.id);
        if (!status) {
            return res.status(404).json({message: "Status não encontrado." });
          }else{
            return res.status(200).json({ status, message: 'Status exibido com sucesso' });
          }
    };
}

export default new StatusController();