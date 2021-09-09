
import { Router } from 'express';
import EmployeeController from './app/controller/EmployeeController';
import StoreController from './app/controller/StoreController';
import CustomerController from './app/controller/CustomerController';
import SessionController from './app/controller/SessionController';
import EmployeeSessionController from './app/controller/EmployeeSessionController';
import ProductController from './app/controller/ProductController';

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

 export default routes;