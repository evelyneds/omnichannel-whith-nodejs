import OrderItens from '../models/OrderItens';

class OrderItensController {
    async store(req, res) {
        const { quantity} = req.body;

        const orderItens = await OrderItens.create({
            customer_id: req.userId,
            quantity,
          });

        return res.status(200).json(orderItens);






        const { id } = await OrderItens.create(req.body);
        return res.json({ message: 'Pedido cadastrado com sucesso',id });
    };

    async index(req, res) {
        const orderitens = await OrderItens.findAll({
            attributes: ['id']
        });
        return res.status(200).json(id);
    };

    async delete(req, res) {
        const orderitens = await OrderItens.findByPk(req.params.id);
        await orderitens.destroy();
        return res.status(200).json({ message: 'Pedido removido com sucesso.' });
    };

    async update(req, res) {
        const orderitens = await OrderItens.findByPk(req.params.id);
        await orderitens.update(req.body);
        return res.status(200).json({ message: 'Pedido atualizado com sucesso.' });
    };

    async show(req, res) {
        const orderitens = await OrderItens.findByPk(req.params.id);
        return res.json({ id });
    };
}

export default new OrderItensController();