
import { Router } from 'express';
import EmployeeController from './app/controller/EmployeeController';

const routes = new Router();
//routes.post('/employee', EmployeeController.store);
//export default  routes;

 
  routes.get('/', (req, res) => {  
   res.json({ message: "Olá meninas! Boa noite" })    
 }); 

 routes.post('/', EmployeeController.store);
 routes.get('/', EmployeeController.index);
 //module.exports = routes;
 export default  routes;