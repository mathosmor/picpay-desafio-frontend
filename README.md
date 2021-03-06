# PICPAY-DESAFIO-FRONTEND
> Aplicação do desafio frontend proposto pelo PICPAY


**Instalação do Angular CLI:**

no terminal rodar o comando:

```sh
npm install -g @angular/cli
```

***

**Git clone**

```sh
git clone https://github.com/mathosmor/picpay-desafio-frontend.git
```

**Instalação de dependências:**

dentro da pasta do projeto rodar:

```sh
npm install
```

***

**Inicialização do projeto:**

```sh
ng serve
```

***

## Funcionamento da aplição
> Resumo de funcionamento da aplicação

Na **tela inicial de pagamentos**, você deve escolher um **"usuário"** e clicar em **"Pagar"**;

![](./src/assets/readme/tela-usuarios-pagamentos.png)

Na **tela de selecionar valor e cartão de crédito**, você deve inserir um **valor númerico** no valor R$ a ser transferido e selecionar um **"cartão de crédito"**

![](./src/assets/readme/tela-selecionar-opcao-pagamento.png)

Atualmente temos 2 cartões de crédito:

Cartão válido

![](./src/assets/readme/cartao-valido.png)

Cartão inválido

![](./src/assets/readme/cartao-invalido.png)

Na **tela status pagamento**, você receberá uma resposta dizendo se o pagamento foi **realizado com sucesso** ou se o **pagamento não realizado com sucesso**

Mensagens de resposta:

**Sucesso**
    
![](./src/assets/readme/tela-status-pagamento-sucesso.png)

**Falha**

![](./src/assets/readme/tela-status-pagamento-falha.png)
