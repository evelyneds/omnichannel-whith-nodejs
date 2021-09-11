import Product from '../models/Product';
import {Op} from "sequelize"; 

class ProductController {
    async store(req, res) {
        const { id, description, value, quantity } = await Product.create(req.body);
        return res.json({ message: 'Produto cadastrado com sucesso', id, description, value, quantity });
    };

    async index(req, res) {
        const product = await Product.findAll({
            where: {
                quantity: {[Op.gt]: 0},
            }, 
            order: [
                ['description', 'ASC'], 
            ],
            attributes: ['id', 'description', 'value']
        })
        if (!product) {
            return res.status(404).json({ message: "Produto não encontrado." });
          }else{
            return res.status(200).json({product, message: "Produtos listado sucesso." });
          } 
    };

    async delete(req, res) {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({message: "Produto não encontrado." });
          }else{
            await product.destroy();
            return res.status(200).json({product, message: "Produto removido com sucesso." });
          } 
    };

    async update(req, res) {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({message: "Produto não encontrado." });
          }else{
        await product.update(req.body);
         return res.status(200).json({ product, message: 'Produto atualizado com sucesso' });
    } 
    };

    async show(req, res) {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({message: "Produto não encontrado." });
          }else{
            return res.status(200).json({ product, message: 'Produto exibido com sucesso' });
          }
    };
}

export default new ProductController();
