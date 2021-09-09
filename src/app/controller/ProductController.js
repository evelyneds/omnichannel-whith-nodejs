import Product from '../models/Product';

class ProductController {
    async store(req, res) {
        const { id, description, value, quantity } = await Product.create(req.body);
        return res.json({ message: 'Produto cadastrado com sucesso', id, description, value, quantity });
    };

    async index(req, res) {
        const product = await Product.findAll({
        });
        return res.status(200).json(product);
    };

    async delete(req, res) {
        const product = await Product.findByPk(req.params.id);
        await product.destroy();
        return res.status(200).json({ message: 'Produto removido com sucesso.' });
    };

    async update(req, res) {
        const product = await Product.findByPk(req.params.id);
        await product.update(req.body);
        return res.json({ product });
        // return res.status(200).json({ message: 'Produto atualizado com sucesso' });
    };

    async show(req, res) {
        const product = await Product.findByPk(req.params.id);
        return res.json({ product });

    };
}

export default new ProductController();
