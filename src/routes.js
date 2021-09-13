
import { Router } from 'express';

import EmployeeController from './app/controller/EmployeeController';
import StoreController from './app/controller/StoreController';
import CustomerController from './app/controller/CustomerController';
import SessionController from './app/controller/SessionController';
import EmployeeSessionController from './app/controller/EmployeeSessionController';
import ProductController from './app/controller/ProductController';
import StatusController from './app/controller/StatusController';
import AppointmentController from './app/controller/AppointmentController';
import OrderItensController from './app/controller/OrderItensController';
import DemandController from './app/controller/DemandController';

import authMiddleware from './app/middlewares/auth';

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../swagger';

const routes = new Router();
routes.use('/swagger',swaggerUI.serve, swaggerUI.setup(swaggerDocument));
//Teste
routes.get('/', (req, res) => {
  res.json({ message: "Teste de Rotas OK." })
});

//Padronização das Rotas em CRUD_ [create_ read_ update_ delete_]

//Rotas Store
routes.get('/read_store', StoreController.index);
routes.get('/show_store/:id', StoreController.show);

//Rotas Employee
routes.post('/create_employees', EmployeeController.store);
routes.get('/read_employees', EmployeeController.index);
routes.post('/create_employee_session', EmployeeSessionController.store);

//Rotas Customer
routes.post('/create_customer', CustomerController.store);
routes.get('/read_customer', CustomerController.index);
routes.post('/create_session', SessionController.store);

//Rotas Product
routes.get('/read_product', ProductController.index);
routes.get('/show_product/:id', ProductController.show);

//Rotas Status
routes.post('/create_status', StatusController.store);
routes.get('/read_status', StatusController.index);
routes.put('/update_status/:id', StatusController.update);
routes.delete('/delete_status/:id', StatusController.delete);
routes.get('/show_status/:id', StatusController.show);

routes.use(authMiddleware);

routes.post('/create_store', StoreController.store);
routes.put('/update_store/:id', StoreController.update);
routes.delete('/delete_store/:id', StoreController.delete);

routes.post('/create_product', ProductController.store);
routes.delete('/delete_product/:id', ProductController.delete);
routes.put('/update_product/:id', ProductController.update);

routes.post('/create_appointment', AppointmentController.store);
routes.put('/update_appointment/:id', AppointmentController.update);

//Rotas Order/Demand
//routes.post('/create_demand', DemandController.store); Demanda criada automaticamente
routes.get('/read_demand', DemandController.index);
//routes.put('/update_demand/:id', DemandController.update); Demanda atualizada automaticamente
routes.delete('/delete_demand/:id', DemandController.delete);
routes.get('/show_demand/:id', DemandController.show); //Retorna detalhes do pedido
routes.put('/finish_demand/:id', DemandController.updateStatus);
routes.get('/show_All_demand/:id', DemandController.showAll); //Retorna todos os pedidos do customer

//Rotas OrderItens
routes.post('/create_itens', OrderItensController.store);
routes.get('/read_itens', OrderItensController.index);
routes.put('/update_itens/:id', OrderItensController.update);
routes.delete('/delete_itens', OrderItensController.delete);
routes.get('/show_itens/:id', OrderItensController.show);


export default routes;