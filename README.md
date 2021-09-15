<div align=center>
	<img src="https://github.com/evelynsantos/omnigirls/blob/master/tmp/uploads/criacaoBannerOmniGirlsFull.gif?raw=true">
	
# OMNIChannel - Desafio Final Luiza Code
</div>

Uma das funcionalidades mais interessantes em um e-commerce é a Omni Channel. Ou seja, não há mais diferenças entre lojas físicas ou na web. O consumidor pode procurar
o produto em uma loja física e comprar pela internet ou vice-versa.
Basicamente, o cliente Omni Channel é aquele que utiliza de todos os canais simultaneamente, cruzando compras em ambientes físicos e online.

<div align=center>
     <img src="https://github.com/evelynsantos/omnigirls/blob/master/tmp/uploads/omniGirls.png?raw=true"
     width="500px">
</div>

<div id='objetivo'/>

## Objetivo do projeto
O objetivo desse projeto é o desenvolvimento de um serviço HTTP resolvendo a funcionalidade de Omni Channel do cliente. Esse serviço fará parte de uma plataforma construída em uma arquitetura baseada em micro-serviços.</br>


## índice

* [Proposta](#proposta)
* [Introdução](#introducao)<br>
  * [Objetivo](#objetivo)
  * [Requisitos funcionais](#req)
  * [Requisitos não funcionais](#reqNaoFuncional)
  * [Regras de Negócio](#negocio)
* [Tecnologias Utilizadas](#tecnologia)
* [Instalação](#instalacao)
* [Contribuição](#contribuicao)
* [Equipe de Desenvolvimento](#developers)
* [Expressão de gratidão](#gratidao)

---

<div id='proposta'/>

## 📝 Proposta 

A proposta desse projeto é desenvolver um software para demonstrar os nossos conhecimentos adquiridos durante a aceleração em Node.js

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

![](../header.png)

<div id='tecnologia'/>

## Tecnologias utilizadas

- [x] Noje.js
- [x] Sequelize - ORM
- [x] Seeders
- [x] Postgres
- [x] Express
- [x] JsonWebtoken
- [x] Swagger
- [x] Insomnia
- [x] API
- [x] BCrypt
- [x] Yup
- [x] MVC


<div id='req'/>

## ✅  Requisitos funcionais (obrigatórios)
- Adicionar um produto na lista da compra da cliente;
- Remover um produto da lista da compra da cliente;
- Consultar todos os produtos disponíveis;
- Consultar todas as compras realizadas da cliente.

<div id='reqNaoFuncional'/>

## ✅ Requisitos não funcionais
- Logs;
- Tratamento de exceção;
- Autenticação/ Login da API;
- Criação de sessão com token;
-  🚧 Desenvolvimento futuro: Front-end da aplicação.


<div id='negocio'/>

## ✅  Regras de Negócio
- Cada cliente/funcionário poderá ter somente um cadastro, validado por e-mail;
- É gerado uma sessão via token, com prazo de validade para cada usuário logado no sistema;
- O acesso é limitado aos funcionários para:
	- Cadastro/Atualização/Exclusão de lojas;
	- Cadastro/Atualização/Exclusão de produtos;
	- Atualização de status do pedido para "RETIRADO";
	- Consulta de todos os pedidos dos clientes;
- O acesso é limitado aos clientes para:
	- Cadastro/Atualização de pedido;
	- Adicionar/remover produtos de seu carrinho e finalizar a compra;
	- Criação/atualização de agendamento do pedido;
	- Consulta dos itens e status do pedido;
	- Consulta do histórico dos pedidos;
	
- O cliente só poderá comprar UM produto de cada tipo;
- Na inicialização de uma compra, é verificado se o cliente já possui um pedido com status "EM ANDAMENTO";
- Se o cliente não tiver nenhum pedido é criado automaticamente um novo carrinho com status "EM ANDAMENTO";
- Para finalizar o pedido, é necessário realizar o agendamento do mesmo;
- Após realizar o agendamento o status é alterado para "REALIZADO", caracterizando a finalização do pedido e disponibilizando-o para retirada;
- A finalização do pedido gerará atualização do estoque/ baixa dos itens;
- Após retirar o pedido em loja, o status do pedido é alterado para "RETIRADO", encerrando asssim toda a cadeia de compras OMNIChannel.



<div id='uml'/>

## 💻 UML 
- O modelo e documentação da regra de negócio do sistema foi realizado via diagrama UML (Unified Modeling Language), documentando assim as diversas fases do desenvolvimento de sistemas orientados a objetos e facilitando a compreensão da esquematização do sistema:

<div align=center>
	<img src="https://github.com/evelynsantos/omnigirls/blob/master/tmp/uploads/UmlOmniGirls.png?raw=true"  width="600px">
</div>
<br>

<div id='instalacao'/>

## 💻 Instalação

Essas instruções fornecerão uma cópia do projeto instalado e funcional para fins de desenvolvimento e testes.

### 1º Passo - Clonar o respositório
Comece clonando esse projeto para sua máquina local.
```sh
git clone https://github.com/evelynsantos/omnigirls.git
cd omnigirls
```

### 2º Passo - Instalando as dependências
Para instalar as dependências do projeto, digite o seguinte comando no terminal:
```sh
npm i
```

### 3º Passo - Criando database
Esse projeto foi criado utilizando ORM Sequelize/ Dialeto Postgres, utilizando o ElephantSQL.
Sugerimos que crie uma conexão em
<code> https://customer.elephantsql.com/login</code>

### 4º Passo - Configurar o ambiente
Para configurar o ambiente é necessário duplicar o arquivo `.env.local` e renomea-lo somente para `.env`.</br>
Em seguida, altere as informações desse arquivo `.env` para as informações correspondentes a conexão do seu banco de dados

### 5º Passo - Criando as migrations do banco de dados
Para criar as migrations do banco de dados e já ter uma estrutra de relacionamento predefinidos, digite o seguinte comando no terminal:
```sh
npx sequelize-cli db:migrate
```

### 6º Passo - Criando os seeders do banco de dados
Para criar os seeders que é para deixar um padrão de preenchimento das tabelas com informações, digite o seguinte comando:
```sh
npx sequelize-cli db:seed:all
```

### 7º Passo - Executando a aplicação
Depois de tudo configurado basta digitar o seguinte comando no terminal:
```sh
npm run dev
```

<div id='endpoints'/>

## 🎬 Execução dos Endpoints
Acesso aos Endpoints via Swagger.
O usuário tem acesso aos seguintes endpoints:
- Cadastro
- Produtos
- Lojas
- Carrinho
- Agendamento


Cliente Endpoint.

- AUTENTICAÇÃO

<img src="https://raw.githubusercontent.com/evelynsantos/omnigirls/master/tmp/uploads/0AUTENTICACAO.gif" width="500px">


</br></br>
																 
- ADICIONAR PRODUTO

<img src="https://raw.githubusercontent.com/evelynsantos/omnigirls/master/tmp/uploads/1adicionar-prodduto-_2_.gif" width="500px">

</br></br>

- REMOVER ITEM DO CARRINHO

<img src="https://github.com/evelynsantos/omnigirls/blob/master/tmp/uploads/2remove-item-do-carrinho-_2_.gif" width="500px">

</br></br>
																		   
- CONSULTAR TODOS OS PRODUTOS

<img src="https://raw.githubusercontent.com/evelynsantos/omnigirls/master/tmp/uploads/3.listar-todos-os-produtos.gif" width="500px">

</br></br>

- CONSULTAR TODAS AS COMPRAS COM SWAGGER

<img src="https://raw.githubusercontent.com/evelynsantos/omnigirls/master/tmp/uploads/4-Consultar-todas-as-compras-realizadas-da-cliente-.gif" width="500px">


Crédito dos .gifs a Ana Carvalho! Ficaram bem legais!



<div id='contribuicao'/>

<br>

## Contribuição
1. Faça o _fork_ do projeto (<https://github.com/evelynsantos/omnigirls.git>)
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/fooBar`)
3. Faça o _commit_ (`git commit -am 'Add some fooBar'`)
4. _Push_ (`git push origin feature/fooBar`)
5. Crie um novo _Pull Request_

[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/seunome/seuprojeto/wiki
   
	
   <div id='developers' />
<br>
   
  ## 👨‍👩‍👧‍👦 Equipe de desevolvimento OMNIGirls
<div align=center>
 <table>
    <tbody>
        <tr>
        <!--Ana Maria Carvalho-->      
            <td align="center">
                <a href="https://github.com/carvalhoanamaria">
                    <img src="https://avatars.githubusercontent.com/u/33851180?v=4" width="120px;" alt="Ana Maria Carvalho" style="max-width:100%;">
                </a><br><br>
                <b>Ana Maria Carvalho</b><br>
                <a href="https://github.com/carvalhoanamaria">
                    <img src="https://ssoucie.github.io/images/giticon2.png" width="27px">
                </a>
                <a href="https://www.linkedin.com/in/carvalhoanamaria/">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" width="27px">
                </a>
            </td>
        <!--Evelyn Dias Santos-->      
            <td align="center">
                <a href="https://github.com/evelynsantos">
                    <img src="https://avatars.githubusercontent.com/u/3731050?v=4" width="120px;" alt="Evelyn Dias Santos" style="max-width:100%;">
                </a><br><br>
                <b>Evelyn Dias Santos</b><br>
                <a href="https://github.com/evelynsantos">
                    <img src="https://ssoucie.github.io/images/giticon2.png" width="27px">
                </a>
                <a href="https://www.linkedin.com/in/evelyneds">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" width="27px">
                </a>
            </td>
        <!--Keila Hadama-->      
            <td align="center">
                <a href="https://github.com/hadamakei">
                    <img src="https://avatars.githubusercontent.com/u/88164568?v=4" width="120px;" alt="Keila Hadama" style="max-width:100%;">
                </a><br><br>
                <b>Keila Hadama</b><br>
                <a href="https://github.com/hadamakei">
                    <img src="https://ssoucie.github.io/images/giticon2.png" width="27px">
                </a>
                <a href="https://www.linkedin.com/in/keila-hadama-45a903193">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" width="27px">
                </a>
            </td> 
        <!--Julia Minagawa-->      
            <td align="center">
                <a href="https://github.com/JuliaMinagawa">
                    <img src="https://avatars.githubusercontent.com/u/88911670?v=4" width="120px;" alt="Julia Minagawa" style="max-width:100%;">
                </a><br><br>
                <b>Julia Minagawa</b><br>
                <a href="https://github.com/JuliaMinagawa">
                    <img src="https://ssoucie.github.io/images/giticon2.png" width="27px">
                </a>
                <a href="https://www.linkedin.com/in/juliaminagawa/">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" width="27px">
                </a>
            </td>
        <!--Pietra Santos-->      
            <td align="center">
                <a href="https://github.com/Pietra-Santos">
                    <img src="https://avatars.githubusercontent.com/u/75040165?v=4" width="120px;" alt="Pietra Santos" style="max-width:100%;">
                </a><br><br>
                <b>Pietra Santos</b><br>
                <a href="https://github.com/Pietra-Santos">
                    <img src="https://ssoucie.github.io/images/giticon2.png" width="27px">
                </a>
                <a href="https://www.linkedin.com/in/pietra-santos1/">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg" width="27px">
                </a>
            </td>
        </tr>
    </tbody>
</table>

</div>
<br><br>
   
<!--
https://www.linkedin.com/in/evelyneds/
https://www.linkedin.com/in/pietra-santos1/
https://www.linkedin.com/in/juliaminagawa/
https://www.linkedin.com/in/carvalhoanamaria/
https://www.linkedin.com/in/keila-hadama-45a903193/>
-->

<div id='gratidao'/>

## 👨🏻‍🏫 Expressão de gratidão (Parcerias/Prof/Escola/Programa/Mentores...)

* [Yellow Belt - Regina Giovannini](https://www.linkedin.com/in/regiovannini/)
* [Juliani Cavalcante](https://www.linkedin.com/in/juliani-cavalcante-banagouro-99413460/)
* [Profº Douglas Morais](https://www.linkedin.com/in/douglasmoraisdev/)
* [Luquinha](https://www.linkedin.com/in/lvcortez/)
* [Luiza Helena Trajano](https://www.linkedin.com/in/luizahelenatrajano/)
* [Bruce - Gama Academy] - Perfil no linkedin não localizado)
* [Leonardo Lima](https://www.linkedin.com/in/leonardo-lima-7914278/)
* [Karine Santos](https://www.linkedin.com/in/karine-c-santos/)
* [Stephen Campos](https://www.linkedin.com/in/stefhancampos/)
* [Élysson Mendes](https://www.linkedin.com/in/elyssonmr/)
* [Gabriel Otero](https://www.linkedin.com/in/gabriel-otero-b54088b2/)
* [Turma 3 da 3ª edição do Luiza Code]
* [Galera da Gama Academy](https://www.linkedin.com/school/gama-academy/)
* [Galera da Luiza Labs](https://www.linkedin.com/company/luizalabs/)
* [Galera da Magazine Luiza](https://www.linkedin.com/company/magazine-luiza/)

<!--
img src="https://freepikpsd.com/media/2019/10/chalk-line-png-2-Transparent-Images.png"
img src="https://s3.amazonaws.com/ml-crm-ecomm-public/2910_CRM_650x95_Footer.png"
<img src="https://github.com/evelynsantos/omnigirls/blob/master/tmp/uploads/LogoOmniGirls.gif?raw=true">
<img src="https://github.com/evelynsantos/omnigirls/blob/master/tmp/uploads/line.png?raw=true" width="1200px" height="10px">
	https://raw.githubusercontent.com/evelynsantos/omnigirls/master/tmp/uploads/UmlOmniGirls.png?token=AA4O42UC3RZQQLTIH45DPT3BHZZDC
--> 
