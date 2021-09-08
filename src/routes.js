
import { Router } from 'express';
import EmployeeController from './app/controller/EmployeeController';
import CustomerController from './app/controller/CustomerController';

const routes = new Router();

 //Teste
  routes.get('/', (req, res) => {  
   res.json({ message: "Olá meninas! Boa noite" })    
 }); 

 //Rotas Employee
 routes.post('/employees', EmployeeController.store);
 routes.get('/employees', EmployeeController.index);

 //Rotas Customer
 routes.get('/customers', CustomerController.index);
 routes.post('/customers', CustomerController.store);

 export default routes;