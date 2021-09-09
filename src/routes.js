
import { Router } from 'express';
import EmployeeController from './app/controller/EmployeeController';
import StoreController from './app/controller/StoreController';
import CustomerController from './app/controller/CustomerController';
import SessionController from './app/controller/SessionController';

const routes = new Router();

 //Teste
  routes.get('/', (req, res) => {  
   res.json({ message: "Olá meninas! Boa noite" })    
 }); 

//Padronização das Rotas em CRUD_ [create_ read_ update_ delete_]

//Rotas Store
routes.post('/create_store', StoreController.store);
routes.get('/read_store', StoreController.index);
routes.put('/update_store', StoreController.update);

 //Rotas Employee
 routes.post('/create_employees', EmployeeController.store);
 routes.get('/read_employees', EmployeeController.index);

 //Rotas Customer
 routes.post('/create_customer', CustomerController.store);
 routes.get('/read_customers', CustomerController.index);
 routes.post('/create_session', SessionController.store);

 export default routes;