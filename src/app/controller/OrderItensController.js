import OrderItens from '../models/OrderItens';
import Product from '../models/Product';

class OrderItensController {
    async store(req, res) {
        const { quantity, product_id } = req.body;

        const demand_id = req.params.id;
        console.log(demand_id)

        let itens = await OrderItens.findOne({
            where: { demand_id, product_id }
        })
        try {
            if (quantity === 1) {
                if (!itens) {
                    //throw 'Teste'
                    const orderItens = await OrderItens.create({
                        //customer_id: req.userId,
                        demand_id,
                        product_id,
                        quantity,
                    })
                    return res.status(200).json({ message: 'Produto incluído com sucesso', orderItens });
                } else{
                    return res.status(404).json({ message: 'O produto já está incluido' });
                }
            } else {
                throw "teste"
            }
            next();
        } catch (err) {
            return res.status(404).json({ message: 'A quantidade de itens está limitada a 1 unidade [itens informados:' + quantity + ']' });
        }
    };

    async index(req, res) {
        const orderitens = await OrderItens.findAll({
            attributes: ['id']
        });
        return res.status(200).json(id);
    };

    async delete(req, res) {
        //const { product_id } = req.body;
       // const demand_id = req.params.id;
        //console.log(demand_id)

        const orderitens = await OrderItens.findOne({
                where: {
                  demand_id: req.params.id,
                  product_id: req.body.product_id,
                },
              });
        
        
        if (!orderitens) {
            return response(res, 404, 'Produto não encontrado')
        } else {
            await orderitens.destroy();
            return res.status(200).json({ message: 'Produto removido com sucesso.' });
        };
    };

    async update(req, res) {
        const orderitens = await OrderItens.findByPk(req.params.id);
        if (!orderitens) {
            return response(res, 404, 'Produto não encontrado')
        } else {
            await orderitens.update(req.body);
            return res.status(200).json({ message: 'Produto atualizado com sucesso.' });
        };
    };

    async show(req, res) {
        const orderitens = await OrderItens.findByPk(req.params.id);
        return res.json({ orderitens});
    };
}

export default new OrderItensController();