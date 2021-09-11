
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

const routes = new Router();

//Teste
routes.get('/', (req, res) => {
  res.json({ message: "Teste de Rotas OK." })
});

//Padronização das Rotas em CRUD_ [create_ read_ update_ delete_]

//Rotas Store
routes.post('/create_store', StoreController.store);
routes.get('/read_store', StoreController.index);
routes.put('/update_store', StoreController.update);

//Rotas Employee
routes.post('/create_employees', EmployeeController.store);
routes.get('/read_employees', EmployeeController.index);
routes.post('/create_employee_session', EmployeeSessionController.store);

//Rotas Customer
routes.post('/create_customer', CustomerController.store);
routes.get('/read_customers', CustomerController.index);
routes.post('/create_session', SessionController.store);

//Rotas Product
routes.post('/create_product', ProductController.store);
routes.get('/read_product', ProductController.index);
routes.put('/update_product/:id', ProductController.update);
routes.delete('/delete_product/:id', ProductController.delete);
routes.get('/read_product_id/:id', ProductController.show);

//Rotas Status
routes.post('/create_status', StatusController.store);
routes.get('/read_status', StatusController.index);
routes.put('/update_status/:id', StatusController.update);
routes.delete('/delete_status/:id', StatusController.delete);
routes.get('/show_status/:id', StatusController.show);

/*//Rotas Appointment
routes.post('/create_appointment', AppointmentController.store);
routes.get('/read_appointment', AppointmentController.index);
routes.put('/update_appointment/:id', AppointmentController.update);
routes.delete('/delete_appointment/:id', AppointmentController.delete);
routes.get('/show_appointment/:id', AppointmentController.show);
*/

//routes.use(authMiddleware);



//Rotas Order/Demand
routes.post('/create_demand', DemandController.store);
routes.get('/read_demand', DemandController.index);
routes.put('/update_demand/:id', DemandController.update);
routes.delete('/delete_demand/:id', DemandController.delete);
routes.get('/show_demand/:id', DemandController.show);


//Rotas OrderItens
routes.post('/create_itens/:id', OrderItensController.store);
routes.get('/read_itens', OrderItensController.index);
routes.put('/update_itens/:id', OrderItensController.update);
routes.delete('/delete_itens/:id', OrderItensController.delete);
routes.get('/show_itens/:id', OrderItensController.show);


export default routes;