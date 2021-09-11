module.exports = {
    swagger: '2.0',
    info: {
      description: 'Documentação de API',
      version: '1.0.0',
      title: 'Luiza Coders',
      contact: { email: ''}
  
    },
  servers:[{
    host: "localhost:3333",
    basePath: "/",
    schemes: ['http', 'https'],
    } ],
    
//Store

//Employee

//Customer

//Produtos
    paths: {
      '/create_product': {
        post: {
          tags: [
            'Product',
          ],
          parameters: [
            {
              in: 'body',//body
              name: 'body',
              description: 'Cadastro de produto ...',
              required: true,
              schema: { $ref: '#/definitions/CreateProduct' },
            },
          ],
          summary: 'Cadastra um Produto na base',
          description: '',
          operationId: 'add',
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],
          responses: {
            200: {
              description: 'Produto cadastrado com sucesso!',
              schema: {
                type: 'array',
                items: { $ref: '#/definitions/CreateProduct' },
              },
            },
            409: { description: 'Erro ao cadastrar produto!' },
          },
        },
        definitions: {
          Product: {
            type: 'object',
            required: [
              'description',
              'value',
              'quantity',
            ],
            properties: {
              id: {
                type: 'integer',
                format: 'integer',
              },
              description: { type: 'string' },
              value: { type: 'double' },
              quantity: { type: 'Integer' },
            },
            xml: { name: 'Product' },
        }},
      },
   
      '/read_product': {
        get: {
          tags: [
            'Product',
          ],
          parameters: [ ],
          summary: 'Lista produtos disponivel (Com estoque)',
          description: '',
          operationId: 'Read',
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],
          responses: {
            200: {
              description: 'Listagem de produtos realizada com sucesso!',
              schema: {
                type: 'array',
                items: { $ref: '#/definitions/ReadProduct' },
              },
            },
            409: { description: 'Erro ao listar produtos!' },
          },
          definitions: {
            Product: {
              type: 'object',
              required: [
                'description',
                'value',
                'quantity',
              ],
              properties: {
                id: {
                  type: 'integer',
                  format: 'integer',
                },
                description: { type: 'string' },
                value: { type: 'double' },
                quantity: { type: 'Integer' },
              },
              xml: { name: 'Product' },
          }},
        },
      },

      '/read_product_id/{id}': {
        get: {
          tags: [
            'Product',
          ],
          parameters: [
            // expected params.
            {
              name: "id", // name of the param
              in: "path", // location of the param
              schema: {
                items: { $ref: '#/definitions/ReadProductI' },
              },
              required: true, // Mandatory param
              description: "A single todo id", // param desc.
            },
          ],
          summary: 'Lista produtos especifico',
          description: '',
          operationId: 'ReadI',
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],
            responses: {
            200: {
              description: 'Listagem de produtos realizada com sucesso!',
              schema: {
                type: 'array',
                items: { $ref: '#/definitions/ReadProductI' },
              },
            },
            409: { description: 'Erro ao listar produtos!' },
          },
          definitions: {
            Product: {
              type: 'object',
              required: [
                'description',
                'value',
                'quantity',
              ],
              properties: {
                id: {
                  type: 'integer',
                  format: 'integer',
                },
                description: { type: 'string' },
                value: { type: 'double' },
                quantity: { type: 'Integer' },
              },
              xml: { name: 'Product' },
          }},
        },
      },

      '/update_product/{id}': {
        put: {
          tags: [
            'Product',
          ],
          parameters: [
            // expected params.
            {
              name: "id", // name of the param
              in: "path", // location of the param
              schema: {
                items: { $ref: '#/definitions/UpdateProduct' },
              },
              required: true, // Mandatory param
              description: "A single todo id", // param desc.
            },
          ],
          summary: 'Lista produtos especifico',
          description: '',
          operationId: 'UpdateProduct',
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],
            responses: {
            200: {
              description: 'Listagem de produtos realizada com sucesso!',
              schema: {
                type: 'array',
                items: { $ref: '#/definitions/UpdateProduct' },
              },
            },
            409: { description: 'Erro ao listar produtos!' },
          },
          definitions: {
            Product: {
              type: 'object',
              required: [
                'description',
                'value',
                'quantity',
              ],
              properties: {
                id: {
                  type: 'integer',
                  format: 'integer',
                },
                description: { type: 'string' },
                value: { type: 'double' },
                quantity: { type: 'Integer' },
              },
              xml: { name: 'Product' },
          }},
        },
      },
      '/delete_product/{id}': {
        delete: {
          tags: [
            'Product',
          ],
          parameters: [
            // expected params.
            {
              name: "id", // name of the param
              in: "path", // location of the param
              schema: {
                items: { $ref: '#/definitions/DeleteProduct' },
              },
              required: true, // Mandatory param
              description: "A single todo id", // param desc.
            },
          ],
          summary: 'Deletar produto especifico',
          description: '',
          operationId: 'DeleteProduct',
          consumes: [
            'application/json',
          ],
          produces: [
            'application/json',
          ],
            responses: {
            200: {
              description: 'Produto deletado com sucesso!',
              schema: {
                type: 'array',
                items: { $ref: '#/definitions/DeleteProduct' },
              },
            },
            409: { description: 'Erro ao deletar produto!' },
          },
          definitions: {
            Product: {
              type: 'object',
              required: [
                'description',
                'value',
                'quantity',
              ],
              properties: {
                id: {
                  type: 'integer',
                  format: 'integer',
                },
                description: { type: 'string' },
                value: { type: 'double' },
                quantity: { type: 'Integer' },
              },
              xml: { name: 'Product' },
          }},
        },
      },
    
    },
   
//Status

// Order

// Cart

// OrderItens


    //Modelo
    definitions: {
   
      CreateProduct: {
        type: 'object',
        required: [
          'description',
          'value',
          'quantity',
        ],
        properties: {
          description:{ type: 'string'},//{ type: 'string' }
          value: { type: 'double'},
          quantity: { type: 'integer' },
        },
        json: { description: 'Product' },
      },
      ReadProduct: {
        type: 'object',
        required: [
          'description',
          'value',
          'quantity',
        ],
        properties: {
          description:{ type: 'string' } ,//{ type: 'string' }
          value: { type: 'double'},
          quantity: { type: 'integer' },
        },
        json: { description: 'Product' },
      },
      ReadProductI: {
        type: 'object',
        required: [
          'description',
          'value',
          'quantity',
        ],
        properties: {
          description:{ type: 'string' } ,//{ type: 'string' }
          value: { type: 'double'},
          quantity: { type: 'integer' },
        },
        json: { description: 'Product' },
      },
      //
    },
    UpdateProduct: {
      type: 'object',
      required: [
        'description',
        'value',
        'quantity',
      ],
      properties: {
        description:{ type: 'string' } ,//{ type: 'string' }
        value: { type: 'double'},
        quantity: { type: 'integer' },
      },
      json: { description: 'Product' },
    },
    //

    
// UpdateProduct
    //
    externalDocs: {
      description: 'Acesse o repositorio',
      url: 'http://github.com',
    },
  } 