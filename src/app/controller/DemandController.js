import Demand from "../models/Demand";
const { Op } = require("sequelize"); 

class DemandController {
  async store(req, res) {
    const { status_id } = req.body;

    const demand = await Demand.create({
      customer_id: req.userId,
      status_id,
    });
    return res
      .status(200)
      .json({ message: "Pedido criado com sucesso.", demand });
  }

  async index(req, res) {
    const demand = await Demand.findAll({
      where: {
        status_id: { [Op.gt]: 1 },
        customer_id: req.userId,
      },

      order: [['id', 'ASC']],
      attributes: ['id', 'customer_id', 'status_id'],
    });
    return res.status(200).json(demand);
  }

  async delete(req, res) {
    const demand = await Demand.findByPk(req.params.id);
    if (!demand) {
      return response(res, 404, "Pedido não encontrado");
    } else {
      await demand.destroy();
      return res.status(200).json({ message: "Pedido removido com sucesso." });
    }
  }

  async update(req, res) {
    const demand = await Demand.findByPk(req.params.id);
    if (!demand) {
      return response(res, 404, "Pedido não encontrado");
    } else {
      await demand.update(req.body);
      return res
        .status(200)
        .json({ message: "Pedido atualizado com sucesso." });
    }
  }

  async show(req, res) {
    const demand = await Demand.findByPk(req.params.id);
    return res.json({ id });
  }
}

export default new DemandController();
