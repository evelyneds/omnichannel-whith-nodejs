import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format } from 'date-fns'
import pt from 'date-fns/locale/pt-BR';
import Store from '../models/Store';
import Customer from '../models/Customer';
import Appointment from '../models/Appointment';
import Demand from '../models/Demand';
//import Notifications from '../schema/Notifications';

class AppointsController {
  async index(req, res) {
    return res.status(200).json({ message: 'Teste de Acesso' });
  };
  async store(req, res) {
    console.log(req.userId)
    const { store_id, date } = req.body;
    // console.log(demand_id)
    let demandUser = await Demand.findOne({
      where: {
        status_id: 1,
        customer_id: req.userId
      },
    })
    
    let demand_id = demandUser.id;
    console.log(demand_id);

    const schema = Yup.object().shape({
      store_id: Yup.number().required(),
      date: Yup.date().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'Dados são inválidos' })
    };

    const storeExists = await Store.findOne({
      where: {
        id: store_id,
      }
    });
    if (!storeExists) {
      return res.status(401).json({ message: 'Loja não cadastrada em nossa base!' })
    }

    const startHour = startOfHour(parseISO(date));

    if (isBefore(startHour, new Date())) {
      return res.status(400).json({
        message: 'Horário não disponível'
      })
    }

    const appointment = await Appointment.create({
      demand_id,
      store_id,
      date: startHour,
    });

    demandUser.status_id = 2
    demandUser.save()

    return res.status(200).json(appointment);


    /*async update(req, res) {
      const status = await Status.findByPk(req.params.id);
      if (!status) {
          return res.status(404).json({ message: "Nenhum status encontrado." });
      } else {
          await status.update(req.body);
          return res.status(200).json({ message: 'Status atualizado com sucesso.', status });
      }
  };*/


    /*const user = await Customer.findByPk(req.userId);
    const formDate = format(
      startHour,
      "'dia' dd 'de' MMMM', às' H:mm'h'",
      { locale: pt}
    )*/

    /*
    await Notifications.create({
      content: `Você tem um novo agendamento de ${user.name} data: ${formDate}`,
      user: employee_id
    })
    return res.status(200).json(appointment);
    */ //Não vamos trabalhar com notificações na primeira fase do projeto
  };
}

export default new AppointsController();