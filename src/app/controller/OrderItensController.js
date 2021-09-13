import OrderItens from '../models/OrderItens';
import Demand from '../models/Demand';
import Product from '../models/Product';


class OrderItensController {
    async store(req, res) {
        const { quantity, product_id } = req.body;
        // console.log(demand_id)
        let demandUser = await Demand.findOne({
            where: {
                status_id: 1,
                customer_id: req.userId
            },
        })

        if (!demandUser){
            demandUser = await Demand.create({
                status_id: 1,
                customer_id: req.userId
            })
        }

        const produto = await Product.findOne({
            where: {
                id: product_id,
            },
          });
        //const produto = Product.product_id
        if (!produto) {
            return res.status(404).json({ message: 'O produto não existe' });
        }

        if (produto.quantity < 1) {
            return res.status(404).json({ message: 'Produto indisponível' });
        }
        console.log(produto.quantity)

        const demand_id = demandUser.id;
        //console.log(demand_id);

        let itens = await OrderItens.findOne({
            where: { demand_id, product_id }
        })
        try {
            if (quantity === 1) {
                if (!itens) {
                    //throw 'Teste'
                    const orderItens = await OrderItens.create({
                        demand_id,
                        product_id,
                        quantity,
                    })
                    return res.status(200).json({ message: 'Produto incluído com sucesso', orderItens });
                } else {
                    return res.status(404).json({ message: 'O produto já está incluido' });
                }
            } else {
                throw "teste"
            }
            next();
        } catch (err) {
            //TODO - Incluir um IF e produto não encontrado 404
            return res.status(404).json({ message: 'A quantidade de itens está limitada a 1 unidade [itens informados:' + quantity + ']' });
        }
    };

    async index(req, res) {
        const orderitens = await OrderItens.findAll({
            attributes: ['id']
        });
        return res.status(200).json(orderitens);
    };

    async delete(req, res) {      
        let demandUser = await Demand.findOne({
            where: {
                status_id: 1,
                customer_id: req.userId
            },
        })
        const demand_id = demandUser.id;
        console.log(demand_id);//Fim todo

        const orderitens = await OrderItens.findOne({
            where: {
                demand_id,
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
        return res.json({ orderitens });
    };
}

export default new OrderItensController();