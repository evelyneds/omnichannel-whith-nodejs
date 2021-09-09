import Sequelize, { Model } from 'sequelize';

class Product extends Model {

    static init(sequelize) {
        super.init({
            description: Sequelize.STRING,
            value: Sequelize.DOUBLE,
            quantity: Sequelize.INTEGER,
        },
            {
                sequelize,
            });
        return this;
    }
}

export default Product;