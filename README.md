<h1 align="center">
    <img alt="GoStack" src="https://ik.imagekit.io/hwyksvj4iv/rocketshoes_-t4_Ti_qH.svg" width="300px" />
    <p align="center">
      <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MatheusPires99/rocketshoes-react">
      <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/MatheusPires99/rocketshoes-react">
      <img alt="Repository size" src="https://img.shields.io/github/repo-size/MatheusPires99/rocketshoes-react">
    </p>
</h1>

<p align="center">
  <a href="https://rocketshoes-gostack.netlify.app/">Demo da aplicação</a>
</p>

## :rocket: Arquitetura Flux

Nesse projetos desenvolvemos uma aplicação web utulizando ReactJS e a arquitetura Flux.

Essa aplicação consiste em uma listagem de produtos e adição ao carrinho de compras da empresa fictícia Rocketshoes.
Foram feitas diversas validações, como por exemplo se a quantidade adicionada está em estoque e não ser possível colocar uma quantidade menor que 1 no carrinho.

O carrinho de compras tem as funcionalidade de edição de quantidade, cálculo de subtotal e total e remoção do produto.

## :hammer: Para criação dessa aplicação utilizamos as seguintes ferramentas:
- [ReactJS](https://pt-br.reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/introduction/getting-started)
- [Redux Saga](https://github.com/redux-saga/redux-saga)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Reactotron](https://github.com/infinitered/reactotron)
- [React Icons](https://react-icons.netlify.com/#/)
- [Immer](https://github.com/immerjs/immer)
- [JSON Server](https://github.com/typicode/json-server#getting-started)

## :computer: Resultado:

### Carregando enquanto a requisição acontece
![ReactJS-Arquitetura Flux](.github/loading.png)

### Home
![ReactJS-Arquitetura Flux](.github/home.png)

### Box do carrinho vazio
![ReactJS-Arquitetura Flux](.github/home-cartBox.png)

### Carrinho vazio
![ReactJS-Arquitetura Flux](.github/cart.png)

### Box do carrinho com produtos
![ReactJS-Arquitetura Flux](.github/home-cartBox2.png)

### Carrinho com produtos
![ReactJS-Arquitetura Flux](.github/cart2.png)

### Erro quantidade fora de estoque
![ReactJS-Arquitetura Flux](.github/stock-error.png)
