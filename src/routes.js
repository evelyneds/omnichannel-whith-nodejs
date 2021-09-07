
import { Router } from 'express';
import EmployeeController from './app/controller/EmployeeController';

const routes = new Router();
//routes.post('/employee', EmployeeController.store);
//export default  routes;

 
  routes.get('/', (req, res) => {  
   res.json({ message: "Olá meninas! Boa noite" })    
 }); 

 routes.post('/e', EmployeeController.store);
 routes.get('/e', EmployeeController.index);
 //module.exports = routes;
 export default  routes;