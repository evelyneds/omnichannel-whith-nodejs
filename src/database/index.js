import Sequelize from "sequelize";
import Employee from '../app/models/Employee';
import Store from '../app/models/Store';
import databaseConfig from '../config/database';

const models = [ Employee, Store ];

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