module.exports = {
  swagger: '2.0',
  info: {
    description: 'Documentação de API',
    version: '1.0.0',
    title: 'OMNIGIRLS',
    contact: { email: '' }

  },
  servers: [{
    host: "localhost:3333",
    basePath: "/",
    schemes: ['http', 'https'],
    
  }],
  //http://localhost:3333/swagger/

  "securityDefinitions": {
    "bearerAuth": {
      type: "apiKey",
      in: "header",
      name: "Authorization",
      description: "Enter your bearer token in the format **Bearer &lt;token>**",
    }
  },

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
    //Customer
    '/create_customer': {
      post: {
        tags: [
          'Customer',
        ],
        parameters: [
          {
            in: 'body',//body
            name: 'body',
            description: 'Cadastro de cliente ...',
            required: true,
            schema: { $ref: '#/definitions/CreateCustomer' },
          },
        ],
        summary: 'Cadastra um Cliente na base',
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
            description: 'Cliente cadastrado com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/CreateCustomer' },
            },
          },
          409: { description: 'Erro ao cadastrar cliente!' },
        },
      },
      definitions: {
        Product: {
          type: 'object',
          required: [
            'name',
            'email',
            'password',
          ],
          properties: {
            id: {
              type: 'integer',
              format: 'integer',
            },
            name: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },
          },
          xml: { name: 'Customer' },
        }
      },
    },
<<<<<<< HEAD
    '/read_customer': {
      get: {
        "security": [
          {
            "bearerAuth": []
          }
        ],
=======

    '/read_customer': {
      get: {
>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
        tags: [
          'Customer',
        ],
        parameters: [],
<<<<<<< HEAD
        summary: 'Exibir Dados de todos os usuarios',
=======
        summary: 'Lista Clientes cadastrados',
>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
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
<<<<<<< HEAD
            description: 'Exibir Dados do Usuario ',
=======
            description: 'Listagem de clientes realizada com sucesso!',
>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/ReadCustomer' },
            },
          },
<<<<<<< HEAD
          409: { description: 'Erro ao verificar dados do usuario!' },
=======
          409: { description: 'Erro ao listar cliente!' },
>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
        },
        definitions: {
          Product: {
            type: 'object',
            required: [
              'name',
              'email',
<<<<<<< HEAD
=======
              'password',
>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
            ],
            properties: {
              id: {
                type: 'integer',
                format: 'integer',
              },
              name: { type: 'string' },
              email: { type: 'string' },
<<<<<<< HEAD
=======
              password: { type: 'string' },
>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
            },
            xml: { name: 'Customer' },
          }
        },
      },
    },
<<<<<<< HEAD
  //Employee
      '/create_employees': {
        post: {
          tags: [
            'Employee',
          ],
          parameters: [
            {
              in: 'body',//body
              name: 'body',
              description: 'Cadastro de cliente ...',
              required: true,
              schema: { $ref: '#/definitions/CreateEmployee' },
            },
          ],
          summary: 'Cadastra um colaborador na base',
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
              description: 'Colaborador cadastrado com sucesso!',
              schema: {
                type: 'array',
                items: { $ref: '#/definitions/CreateEmployee' },
              },
            },
            409: { description: 'Erro ao cadastrar colaborador!' },
          },
        },
        definitions: {
          Product: {
            type: 'object',
            required: [
              'name',
              'email',
              'password',
            ],
            properties: {
              id: {
                type: 'integer',
                format: 'integer',
              },
              name: { type: 'string' },
              email: { type: 'string' },
              password: { type: 'string' },
            },
            xml: { name: 'Employee' },
          }
        },
      },
      '/read_employees': {
        get: {
          tags: [
            'Employee',
          ],
          parameters: [],
          summary: 'Exibir Dados de todos os colaboradores',
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
              description: 'Exibir Dados do colaborador ',
              schema: {
                type: 'array',
                items: { $ref: '#/definitions/ReadEmployee' },
              },
            },
            409: { description: 'Erro ao verificar dados do colaborador!' },
          },
          definitions: {
            Product: {
              type: 'object',
              required: [
                'name',
                'email',
              ],
              properties: {
                id: {
                  type: 'integer',
                  format: 'integer',
                },
                name: { type: 'string' },
                email: { type: 'string' },
              },
              xml: { name: 'Employee' },
            }
          },
        },
      },
  
=======

    //sessacao
    '/create_session': {
      post: {
        "security": [
          {
             "bearerAuth": []
          }
       ],
        tags: [
          'Session',
        ],
        "components": {        
          "securitySchemes": {
            "bearerAuth": {
              "type": "http",
              "scheme": "bearer",
              "bearerFormat": "JWT"
            }
          }
        
      },
        parameters: [
          {
            in: 'body',//body
            name: 'body',
            description: 'Cadastro de status ...',
            required: true,
            schema: { $ref: '#/definitions/CreateSession' },
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
              items: { $ref: '#/definitions/CreateSession' },
            },
          },
          409: { description: 'Erro ao cadastrar status!' },
        },
      },
      definitions: {
        Product: {
          type: 'object',
          required: [
            'name',
            'email',
            'password',
          ],
          properties: {
            id: {
              type: 'integer',
              format: 'integer',
            },
            name: { type: 'string' },
            email:{ type: 'string' },
            password:{ type: 'string' },
          },
          xml: { name: 'Session' },
        }
      },
    },



>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
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
        parameters: [],
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
          }
        },
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
    '/delete_status/{id}': {
      delete: {
        tags: [
          'Status',
        ],
        parameters: [
          // expected params.
          {
            name: "id", // name of the param
            in: "path", // location of the param
            schema: {
              items: { $ref: '#/definitions/DeleteStatus' },
            },
            required: true, // Mandatory param
            description: "A single todo id", // param desc.
          },
        ],
        summary: 'Deletar status especifico',
        description: '',
        operationId: 'DeleteStatus',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json',
        ],
        responses: {
          200: {
            description: 'Status deletado com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/DeleteStatus' },
            },
          },
          409: { description: 'Erro ao deletar status!' },
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
        summary: 'Lista status especifico',
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
    '/update_status/{id}': {
      put: {
        tags: [
          'Status',
        ],
        parameters: [
          // expected params.
          {
            name: "id", // name of the param
            in: "path", // location of the param
            schema: {
              items: { $ref: '#/definitions/UpdateStatus' },
            },
            required: true, // Mandatory param
            description: "A single todo id", // param desc.
          },
        ],
        summary: 'Lista status especifico',
        description: '',
        operationId: 'UpdateStatus',
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
              items: { $ref: '#/definitions/UpdateStatus' },
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
        "security": [
          {
            "bearerAuth": []
          }
        ],
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

    //Demand
<<<<<<< HEAD
    '/create_demand': {
      post: {
        tags: [
          'Demand',
        ],
        parameters: [
          {
            in: 'body',//body
            name: 'body',
            description: 'Cadastro de pedido ...',
            required: true,
            schema: { $ref: '#/definitions/CreateDemand' },
          },
        ],
        summary: 'Cadastra um Pedido na base',
        description: 'cadastro',
        operationId: 'add',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json',
        ],
        responses: {
          200: {
            description: 'Pedido cadastrado com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/CreateDemand' },
            },
=======
  '/create_demand': {
    post: {
      tags: [
        'Demand',
      ],
      parameters: [
        {
          in: 'body',//body
          name: 'body',
          description: 'Cadastro de pedido ...',
          required: true,
          schema: { $ref: '#/definitions/CreateDemand' },
        },
      ],
      summary: 'Cadastra um Pedido na base',
      description: 'cadastro',
      operationId: 'add',
      consumes: [
        'application/json',
      ],
      produces: [
        'application/json',
      ],
      responses: {
        200: {
          description: 'Pedido cadastrado com sucesso!',
          schema: {
            type: 'array',
            items: { $ref: '#/definitions/CreateDemand' },
          },
        },
        409: { description: 'Erro ao cadastrar pedido!' },
      },
    },
    definitions: {
      Product: {
        type: 'object',
        required: [
          'customer_id',
        
        
        ],
        properties: {
          id: {
            type: 'integer',
            format: 'integer',
          },
          customer_id: { type: 'integer' },
          
         
        },
        xml: { name: 'Demand' },
      }
    },
  },
  '/read_demand': {
    get: {
      tags: [
        'Demand',
      ],
      parameters: [],
      summary: 'Lista histórico de pedidos',
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
          description: 'Listagem de pedidos realizada com sucesso!',
          schema: {
            type: 'array',
            items: { $ref: '#/definitions/ReadDemand' },
>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
          },
          409: { description: 'Erro ao cadastrar pedido!' },
        },
      },
      definitions: {
        Product: {
          type: 'object',
          required: [
            'customer_id',
            'status_id',

          ],
          properties: {
            id: {
              type: 'integer',
              format: 'integer',
            },
            customer_id: { type: 'integer' },
            status_id: { type: 'integer' },

          },
          xml: { name: 'Demand' },
        }
      },
    },
    '/read_demand': {
      get: {
        "security": [
          {
            "bearerAuth": []
          }
        ],
        tags: [
          'Demand',
        ],
        parameters: [],
        summary: 'Lista histórico de pedidos',
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
            description: 'Listagem de pedidos realizada com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/ReadDemand' },
            },
          },
          409: { description: 'Erro ao listar pedidos!' },
        },
        definitions: {
          Product: {
            type: 'object',
            required: [
              'customer_id',
              'status_id',

            ],
            properties: {
              id: {
                type: 'integer',
                format: 'integer',
              },
              customer_id: { type: 'integer' },
              status_id: { type: 'integer' },
            },
            xml: { name: 'Demand' },
          }
        },
      },
    },
    '/delete_demand/{id}': {
      delete: {
        tags: [
          'Demand',
        ],
        parameters: [
          // expected params.
          {
            name: "id", // name of the param
            in: "path", // location of the param
            schema: {
              items: { $ref: '#/definitions/DeleteDemand' },
            },
            required: true, // Mandatory param
            description: "A single todo id", // param desc.
          },
        ],
        summary: 'Deletar pedido especifico',
        description: '',
        operationId: 'DeleteDemand',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json',
        ],
        responses: {
          200: {
            description: 'Pedido deletado com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/DeleteDemand' },
            },
          },
          409: { description: 'Erro ao deletar pedido!' },
        },
        definitions: {
          Product: {
            type: 'object',
            required: [
              'customer_id',
              'status_id',
            ],
            properties: {
              id: {
                type: 'integer',
                format: 'integer',
              },
              customer_id: { type: 'integer' },
              status_id: { type: 'Integer' },
            },
            xml: { name: 'Demand' },
          }
        },
      },
    },

    '/show_demand/{id}': {
      get: {
        "security": [
          {
            "bearerAuth": []
          }
        ],
        tags: [
          'Demand',
        ],
        parameters: [
          // expected params.
          {
            name: "id", // name of the param
            in: "path", // location of the param
            schema: {
              items: { $ref: '#/definitions/ShowDemandI' },
            },
            required: true, // Mandatory param
            description: "A single todo id", // param desc.
          },
        ],
        summary: 'Lista pedido especifico',
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
            description: 'Listagem de pedido realizada com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/ShowDemandI' },
            },
          },
          409: { description: 'Erro ao listar pedido!' },
        },
        definitions: {
          Product: {
            type: 'object',
            required: [
              'product_id',
              'customer_id',
              'status_id',
            ],
            properties: {
              id: {
                type: 'integer',
                format: 'integer',
              },
              product_id: { type: 'integer' },
              customer_id: { type: 'integer' },
              status_id: { type: 'integer' },
            },
            xml: { name: 'Demand' },
          }
        },
      },
    },
    
    //Order-itens
    '/create_itens': {
      post: {
        "security": [
          {
            "bearerAuth": []
          }
        ],
        tags: [
          'Order-Itens',
        ],
        parameters: [
          {
            in: 'body',//body
            name: 'body',
            description: 'Adiciona produto no carrinho',
            required: true,
            schema: { $ref: '#/definitions/CreateOrderItens' },
          },
        ],
        summary: 'Adiciona um produto no carrinho',
        description: 'cadastro',
        operationId: 'add',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json',
        ],
        responses: {
          200: {
            description: 'Item adicionado com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/CreateOrderItens' },
            },
          },
          409: { description: 'Erro ao adicionar item!' },
        },
      },
      definitions: {
        Product: {
          type: 'object',
          required: [
            'demand_id',
            'product_id',
            'quantity',

          ],
          properties: {
            id: {
              type: 'integer',
              format: 'integer',
            },
            demand_id: { type: 'integer' },
            product_id: { type: 'integer' },
            quantity: { type: 'integer' },

          },
          xml: { name: 'OrderItens' },
        }
      },
    },
    '/delete_itens': {
      delete: {
        "security": [
          {
            "bearerAuth": []
          }
        ],
        tags: [
          'Order-Itens',
        ],
        parameters: [
          {
            in: 'body',//body
            name: 'body',
            description: 'Deleta um produto do carrinho',
            required: true,
            schema: { $ref: '#/definitions/DeleteOrderItens' },
          },
        ],
        summary: 'Deleta um produto do carrinho',
        description: 'cadastro',
        operationId: 'OrderItens',
        consumes: [
          'application/json',
        ],
        produces: [
          'application/json',
        ],
        responses: {
          200: {
            description: 'Item removido com sucesso!',
            schema: {
              type: 'array',
              items: { $ref: '#/definitions/DeleteOrderItens' },
            },
          },
          409: { description: 'Erro ao remover item!' },
        },
      },
      definitions: {
        Product: {
          type: 'object',
          required: [
            'product_id', 
          ],
          properties: {
            id: {
              type: 'integer',
              format: 'integer',
            },
          
            product_id: { type: 'integer' },
     

<<<<<<< HEAD
          },
          xml: { name: 'OrderItens' },
        }
      },
    },
  '/show_itens/{id}': {
=======
  '/show_demand/{id}': { 
>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
    get: {
      "security": [
        {
          "bearerAuth": []
        }
      ],
      tags: [
        'Order-Itens',
      ],
      parameters: [
        // expected params.
        {
          name: "id", // name of the param
          in: "path", // location of the param
          schema: {
            items: { $ref: '#/definitions/OrderItensI' },
          },
          required: true, // Mandatory param
          description: "A single todo id", // param desc.
        },
      ],
      summary: 'Lista produtos',
      description: '',
      operationId: 'ReadId',
      consumes: [
        'application/json',
      ],
      produces: [
        'application/json',
      ],
      responses: {
        200: {
          description: 'Listagem de pedido realizada com sucesso!',
          schema: {
            type: 'array',
            items: { $ref: '#/definitions/OrderItensI' },
          },
        },
        409: { description: 'Erro ao listar pedido!' },
      },
      definitions: {
        Product: {
          type: 'object',
          required: [
          
            'quantity',
            'createdAt',
            'updatedAt',
            "demand_id",
            "product_id",
          ],
          properties: {
            id: {
              type: 'integer',
              format: 'integer',
            },
            quantity: { type: 'integer' },
            createdAt: { type: 'date' },
            updatedAt: { type: 'date' },
            product_id: { type: 'integer' },
          },
          xml: { name: 'OrderItens' },
        }
      },
    },
  },

    //fim do path
  },




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
    DeleteStatus: {
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
    UpdateStatus: {
      type: 'object',
      required: [
        'status',

      ],
      properties: {
        status: { type: 'string' },//{ type: 'string' }

        json: { description: 'Status' },
      }
    },
    CreateDemand: {
      type: 'object',
      required: [
        'customer_id',
<<<<<<< HEAD
        'status_id',

      ],
      properties: {
        customer_id: { type: 'integer' },//{ type: 'string' }
        status_id: { type: 'integer' },

=======
        
       
      ],
      properties: {
        customer_id: { type: 'integer' },//{ type: 'string' }
        
  
>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
      },
      json: { description: 'Demand' },
    },
    ReadDemand: {
      type: 'object',
      required: [
        'customer_id',
        'status_id',
      ],
      properties: {
        customer_id: { type: 'integer' },//{ type: 'string' }
        status_id: { type: 'integer' },
      },
      json: { description: 'Demand' },
    },
    DeleteDemand: {
      type: 'object',
      required: [
        'customer_id',
        'status_id',
      ],
      properties: {
        customer_id: { type: 'integer' },
        status_id: { type: 'integer' },//{ type: 'string' }

      },
      json: { description: 'Demand' },
    },
    ShowDemandI: {
      type: 'object',
      required: [
        'customer_id',
        'status_id',
      ],
      properties: {
        customer_id: { type: 'integer' },//{ type: 'string' }
        status_id: { type: 'integer' },
      },
      json: { description: 'Demand' },
    },
    CreateCustomer: {
      type: 'object',
      required: [
        'name',
        'email',
        'password',
      ],
      properties: {
        name: { type: 'string' },//{ type: 'string' }
        email: { type: 'string' },
        password: { type: 'string' },
<<<<<<< HEAD
      },
      json: { description: 'Product' },
    },
    CreateOrderItens: {
      type: 'object',
      required: [
        'demand_id',
        'product_id',
        'quantity',
      ],
      properties: {
        demand_id: { type: 'integer' },
        product_id: { type: 'integer' },
        quantity: { type: 'integer' },
      },
      json: { description: 'OrderItens' },
    },
    DeleteOrderItens: {
      type: 'object',
      required: [
        'product_id',
      ],
      properties: {
        product_id: { type: 'interger' },//{ type: 'string' }
      },
      json: { description: 'OrderItens' },
    },
    OrderItensI: {
      type: 'object',
      required: [
        'quantity',
        'createdAt',
        'updatedAt',
        "demand_id",
        "product_id",
      ],
      properties: {
        quantity: { type: 'integer' },
        createdAt: { type: 'date' },
        updatedAt: { type: 'date' },
        product_id: { type: 'integer' },
      },
      json: { description: 'OrderItens' },
    },
    UpdateItens: {
      type: 'object',
      required: [
        'demand_id',
        'product_id',
        'quantity',
      ],
      properties: {
        demand_id: { type: 'Integer' },
        product_id: { type: 'Integer' },
        quantity: { type: 'Integer' },
      },
      json: { description: 'OrderItens' },
    },
    //Employee
    CreateEmployee: {
      type: 'object',
      required: [
        'name',
        'email',
        'password',
      ],
      properties: {
        name: { type: 'string' },//{ type: 'string' }
        email: { type: 'string' },
        password: { type: 'string' },
=======
>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
      },
      json: { description: 'Customer' },
    },
<<<<<<< HEAD
=======
    CreateSession: {
      type: 'object',
      required: [
        'name',
        'email',
        'password',
      ],
      properties: {
        name: { type: 'string' },//{ type: 'string' }
        email: { type: 'string' },
        password: { type: 'string' },
        
  
      },
      json: { description: 'Session' },
    },




>>>>>>> 88b29719c7d5b22fe749716ca6855776d62c1e55
    //fim modelo
  },


  //
  externalDocs: {
    description: 'Acesse o repositorio',
    url: 'http://github.com',
  },
}