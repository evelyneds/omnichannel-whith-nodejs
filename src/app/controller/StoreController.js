import Store from '../models/Store';

class StoreController {
    async store(req, res) {
        //Validação funcionário
        const employee = req.isEmployee;
        if (employee == false) {
            return res.status(404).json({ message: "Usuário não autorizado" });
        };

        const store = await Store.create(req.body);
        if (!store) {
            return res.status(404).json({ message: "Loja não encontrado." });
        } else {
            return res.status(200).json({ store, message: 'Loja cadastrada com sucesso' });
        }
    };

    async index(req, res) {
        const store = await Store.findAll({
        });
        if (!store) {
            return res.status(404).json({ message: "Loja não encontrado." });
        } else {
            return res.status(200).json({ store, message: 'Loja listada com sucesso' });
        }
    };

    async delete(req, res) {
        const employee = req.isEmployee;
        if (employee == false) {
            return res.status(404).json({ message: "Usuário não autorizado" });
        };

        const store = await Store.findByPk(req.params.id);
        if (!store) {
            return res.status(404).json({ message: "Loja não encontrada." });
        } else {
            await store.destroy();
            return res.status(200).json({ message: 'Loja removida com sucesso.' });
        }
    };


    async update(req, res) {
        const employee = req.isEmployee;
        if (employee == false) {
            return res.status(404).json({ message: "Usuário não autorizado" });
        };
        const store = await Store.findByPk(req.params.id);
        if (!store) {
            return res.status(404).json({ message: "Loja não encontrada." });
        } else {
            await store.update(req.body);
            return res.status(200).json({ store, message: 'Loja atualizada com sucesso.' });
        }
    };

    
    async show(req, res) {
        const store = await Store.findByPk(req.params.id);
        if (!store) {
            return res.status(404).json({message: "Loja não encontrada." });
          }else{
            return res.status(200).json({ store, message: 'Loja exibido com sucesso' });
          }
    };
}

export default new StoreController();
