import Order from '../models/Order';

class OrderController {
    async store(req, res) {
        const { id } = await Order.create(req.body);
        return res.json({ message: 'Pedido cadastrado com sucesso',id });
    };

    async index(req, res) {
        const order = await Order.findAll({
            attributes: ['id']
        });
        return res.status(200).json(id);
    };

    async delete(req, res) {
        const order = await Order.findByPk(req.params.id);
        await order.destroy();
        return res.status(200).json({ message: 'Pedido removido com sucesso.' });
    };

    async update(req, res) {
        const order = await Order.findByPk(req.params.id);
        await order.update(req.body);
        return res.status(200).json({ message: 'Pedido atualizado com sucesso.' });
    };

    async show(req, res) {
        const order = await Order.findByPk(req.params.id);
        return res.json({ id });
    };
}

export default new OrderController();