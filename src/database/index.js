import Sequelize from "sequelize";
import Customer from "../app/models/Customer";
import Employee from '../app/models/Employee';
import databaseConfig from '../config/database';


const models = [ Employee, Customer ];

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