
import { Router } from 'express';
import EmployeeController from './app/controller/EmployeeController';

const routes = new Router();
  routes.get('/', (req, res) => {  
   res.json({ message: "Teste de Rota" })    
 }); 

//Padronização das Rotas em CRUD_ [create_ read_ update_ delete_]

 routes.post('/create_employee', EmployeeController.store);
 routes.get('/list_employee', EmployeeController.index);
 
 export default  routes;


 