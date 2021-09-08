
import { Router } from 'express';
import EmployeeController from './app/controller/EmployeeController';
import StoreController from './app/controller/StoreController';

const routes = new Router();

 //Teste
  routes.get('/', (req, res) => {  
   res.json({ message: "Olá meninas! Boa noite" })    
 }); 

//Padronização das Rotas em CRUD_ [create_ read_ update_ delete_]

//Rotas Employee
 routes.post('/create_employee', EmployeeController.store);
 routes.get('/read_employee', EmployeeController.index);
 

//Rotas Store
routes.post('/create_store', StoreController.store);
routes.get('/read_store', StoreController.index);
routes.put('/update_store', StoreController.update);




 export default routes;