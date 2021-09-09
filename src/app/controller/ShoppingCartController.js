import ShoppingCart from '../models/ShoppingCart';

class ShoppingCartController {
    async store(req, res) {
        const { id } = await ShoppingCart.create(req.body);
        return res.json({message: 'Carrinho cadastrado com sucesso',  id});
    };

    async index(req, res) {
        const cart = await ShoppingCart.findAll({
            attributes: ['id']
        });
        return res.status(200).json(cart);
    };

    async delete(req, res) {
        const cart = await ShoppingCart.findByPk(req.params.id);
        await cart.destroy();
        return res.status(200).json({ message: 'Carrinho removido com sucesso.' });
    };

    async update(req, res) {
        const cart = await ShoppingCart.findByPk(req.params.id);
        await cart.update(req.body);
        return res.status(200).json({ message: 'Carrinho atualizado com sucesso.', id });
    };

    async show(req, res) {
        const cart = await ShoppingCart.findByPk(req.params.id);
        return res.json({ id });
    };
}

export default new ShoppingCartController();