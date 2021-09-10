import Demand from '../models/Demand';

class DemandController {
    async store(req, res) {

        const { status_id} = req.body;

        const demand = await Demand.create({
            customer_id: req.userId,
            status_id,
          });

        return res.status(200).json(demand);
    };

    async index(req, res) {
        const demand = await Demand.findAll({
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

export default new DemandController();