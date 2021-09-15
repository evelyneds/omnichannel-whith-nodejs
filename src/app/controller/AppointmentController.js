import * as Yup from "yup";
import { startOfHour, parseISO, isBefore, format } from "date-fns";
import Store from "../models/Store";
import Appointment from "../models/Appointment";
import Demand from "../models/Demand";
import OrderItens from "../models/OrderItens";
import Product from "../models/Product";

class AppointsController {
  async index(req, res) {
    return res.status(200).json({ message: "Teste de Acesso" });
  }
  async store(req, res) {
    const { store_id, date } = req.body;
    let demandUser = await Demand.findOne({
      where: {
        status_id: 1,
        customer_id: req.userId,
      },
    });

    let demand_id = demandUser.id;

    const schema = Yup.object().shape({
      store_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: "Dados são inválidos" });
    }

    const storeExists = await Store.findOne({
      where: {
        id: store_id,
      },
    });
    if (!storeExists) {
      return res
        .status(401)
        .json({ message: "Loja não cadastrada em nossa base!" });
    }

    const startHour = startOfHour(parseISO(date));

    if (isBefore(startHour, new Date())) {
      return res.status(400).json({
        message: "Horário não disponível",
      });
    }

    const appointment = await Appointment.create({
      demand_id,
      store_id,
      date: startHour,
    });

    //Atualização de status
    demandUser.status_id = 2;
    await demandUser.save();

    //Atualização de inventario
    const cart = await OrderItens.findAll({
      where: {
        demand_id,
      },
    });
    const product = cart.map((item) => {
      return item.product_id;
    });
    await Product.decrement("quantity", { where: { id: product } });

    return res.status(200).json(appointment);
  }

  async update(req, res) {
    const appointment = await Appointment.findByPk(req.params.id);

    if (!appointment) {
      return res
        .status(404)
        .json({ message: "Nenhum agendamento encontrado." });
    } else {
      await appointment.update(req.body);
      console.log('Date de function ' + Date())
      return res
        .status(200)
        .json({ message: "Agendamento atualizado com sucesso.", appointment });
    }
  }
}

export default new AppointsController();
