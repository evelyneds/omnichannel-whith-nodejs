module.exports = {
  swagger: '2.0',
  info: {
    description: 'Documentação de API',
    version: '1.0.0',
    title: 'Luiza Coders',
    contact: { email: '' }

  },
  servers: [{
    host: "localhost:3333",
    basePath: "/",
    schemes: ['http', 'https'],
  }],
  //http://localhost:3333/swagger/


  //Employee

  //Customer

  paths: {
    //Store
    '/create_store': {//nome da rota
      post: {
        tags: [
          'Store',
        ],
        parameters: [
          {
            in: 'body',//body
            name: 'body',
            description: 'Cadastro de Loja ...',
            required: true,
            schema: { $ref: '#/definitions/CreateStore' },
          },
        ],
        summary: 'Cadastra uma loja na base',
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
            description: 'Loja cadastrada com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/CreateStore' },
            },
          },
          409: { description: 'Erro ao cadastrar Loja!' },
        },
      },
      definitions: {
        Product: {
          type: 'object',
          required: [
            'company_name',
            'adress',
          ],
          properties: {
            id: {
              type: 'integer',
              format: 'integer',
            },
            company_name: { type: 'string' },
            adress: { type: 'string' },
          },
          xml: { name: 'Store' },
        }
      },
    },
    '/read_store': {
      get: {
        tags: [
          'Store',
        ],
        parameters: [],
        summary: 'Lista lojas',
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
            description: 'Listagem de lojas realizada com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/ReadStore' },
            },
          },
          409: { description: 'Erro ao listar lojas!' },
        },
        definitions: {
          Product: {
            type: 'object',
            required: [
              'company_name',
              'adress',
            ],
            properties: {
              id: {
                type: 'integer',
                format: 'integer',
              },
              company_name: { type: 'string' },
              adress: { type: 'double' },
            },
            xml: { name: 'Store' },
          }
        },
      },
    },
    //Status
    '/create_status': {
      post: {
        tags: [
          'Status',
        ],
        parameters: [
          {
            in: 'body',//body
            name: 'body',
            description: 'Cadastro de status ...',
            required: true,
            schema: { $ref: '#/definitions/CreateStatus' },
          },
        ],
        summary: 'Cadastra um status na base',
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
            description: 'Status cadastrado com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/CreateStatus' },
            },
          },
          409: { description: 'Erro ao cadastrar status!' },
        },
      },
      definitions: {
        Product: {
          type: 'object',
          required: [
            'status',
          ],
          properties: {
            id: {
              type: 'integer',
              format: 'integer',
            },
            status: { type: 'string' },
          },
          xml: { name: 'Status' },
        }
      },
    },
    '/read_status': {
      get: {
        tags: [
          'Status',
        ],
        parameters: [ ],
        summary: 'Lista status disponivel',
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
            description: 'Listagem de status realizada com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/ReadStatus' },
            },
          },
          409: { description: 'Erro ao listar status!' },
        },
        definitions: {
          Product: {
            type: 'object',
            required: [
              'status',
       
            ],
            properties: {
              id: {
                type: 'integer',
                format: 'integer',
              },
              status: { type: 'string' },
            
            },
            xml: { name: 'Status' },
        }},
      },
    },
    '/show_status/{id}': {
      get: {
        tags: [
          'Status',
        ],
        parameters: [
          // expected params.
          {
            name: "id", // name of the param
            in: "path", // location of the param
            schema: {
              items: { $ref: '#/definitions/ReadStatusI' },
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
            description: 'Listagem de status realizada com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/ReadStatusI' },
            },
          },
          409: { description: 'Erro ao listar status!' },
        },
        definitions: {
          Product: {
            type: 'object',
            required: [
              'status',
            ],
            properties: {
              id: {
                type: 'integer',
                format: 'integer',
              },
              status: { type: 'string' },
          
            },
            xml: { name: 'Status' },
          }
        },
      },
    },
    //Product
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
        }
      },
    },

    '/read_product': {
      get: {
        tags: [
          'Product',
        ],
        parameters: [],
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
          }
        },
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
          }
        },
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
          }
        },
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
          }
        },
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
        description: { type: 'string' },//{ type: 'string' }
        value: { type: 'double' },
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
        description: { type: 'string' },//{ type: 'string' }
        value: { type: 'double' },
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
        description: { type: 'string' },//{ type: 'string' }
        value: { type: 'double' },
        quantity: { type: 'integer' },
      },
      json: { description: 'Product' },
    },
    UpdateProduct: {
      type: 'object',
      required: [
        'description',
        'value',
        'quantity',
      ],
      properties: {
        description: { type: 'string' },//{ type: 'string' }
        value: { type: 'double' },
        quantity: { type: 'integer' },
      },
      json: { description: 'Product' },
    },

    // Store
    CreateStore: {
      type: 'object',
      required: [
        'company_name',
        'adress'
      ],
      properties: {
        company_name: { type: 'string' },//{ type: 'string' }
        adress: { type: 'string' },

      },
      json: { description: 'Product' },
    },
    ReadStore: {
      type: 'object',
      required: [
        'company_name',
        'adress'
      ],
      properties: {
        company_name: { type: 'string' },//{ type: 'string' }
        adress: { type: 'string' },
      },
      json: { description: 'Store' },
    },
    //Status 
    CreateStatus: {
      type: 'object',
      required: [
        'status',
      ],
      properties: {
        status: { type: 'string' },//{ type: 'string' } 
      },
      json: { description: 'Status' },
    },
    ReadStatus: {
      type: 'object',
      required: [
        'status',
      ],
      properties: {
        status: { type: 'string' },//{ type: 'string' }
   
      },
      json: { description: 'Status' },
    },
    ReadStatusI: {
      type: 'object',
      required: [
        'status',
   
      ],
      properties: {
       status: { type: 'string' },//{ type: 'string' }

      },
      json: { description: 'Status' },
    },
  },

  //
  externalDocs: {
    description: 'Acesse o repositorio',
    url: 'http://github.com',
  },
}