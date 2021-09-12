import Demand from "../models/Demand";
import Status from "../models/Status";
import Customer from "../models/Customer";
import OrderItens from '../models/OrderItens';
import Product from "../models/Product";
import {Op} from "sequelize"; 

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

  async updateStatus(req, res) {
    //Validação funcionário
    const employee = req.isEmployee;
    if (employee == false) {
        return res.status(404).json({ message: "Usuário não autorizado" });
    };
    const demand = await Demand.findByPk(req.params.id);
    if (!demand) {
      return response(res, 404, "Pedido não encontrado");
    } else {
      demand.status_id = 3
      await demand.save()
      return res
        .status(200)
        .json({ message: "Status alterado para Retirado" });
    }
  }

  async show(req, res) {
    const demand= await Demand.findByPk(req.params.id);

    const {id,customer_id, status_id}= await Demand.findByPk(req.params.id);

    const status = await Status.findOne({
      where: {
        id: status_id ,
      },
      attributes: ['status'],
    });

    const customer = await Customer.findOne({
      where: {
        id: customer_id ,
      },
      attributes: ['name'],
    });

    const orderItens = await OrderItens.findAll({
      where: {
        demand_id: id ,
      },
    });

    var itens = [];

    orderItens.forEach(
      (orderItens) => {
        itens.push((orderItens.dataValues.product_id));
      }
    )
    const products = await Product.findAll({
      where: {
        id: itens 
      },
      attributes: ['description'],
    });
    
    return res.json({id, customer_id, customer, status,demand,products});
  }
}

export default new DemandController();
