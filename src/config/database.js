require('dotenv/config')

module.exports={
    dialect:'process.env.DB_DIALECT',
    host:'process.env.DB_HOST',
    username:'process.env.DB_USERNAME',
    password:'process.envprocess.envDB_PASSWORD',
    database:'process.env.DB_NAME',
    define:{
        timeStamps: true,
        underscored: true,
        underscoredAll: true,
        //freezeTableName: true,
    }
}
