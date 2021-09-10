import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import Appointment from '../app/models/Appointment';
import Customer from '../app/models/Customer';
import Employee from '../app/models/Employee';
import Order from '../app/models/Order';
import OrderItens from '../app/models/OrderItens';
import Product from '../app/models/Product';
import ShoppingCart from '../app/models/ShoppingCart';
import Status from '../app/models/Status';
import Store from '../app/models/Store';
import Demand from '../app/models/Demand';

const models = [ Appointment, Customer, Employee, Order, OrderItens, Product, ShoppingCart, Status, Store, Demand ];

class Database{
  constructor(){
    this.init()
  }

  init(){
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

export default new Database();