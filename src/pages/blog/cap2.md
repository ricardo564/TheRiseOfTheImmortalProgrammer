---
layout: ../../layouts/BlogPost.astro
title: 'Capítulo 2: Usando funções para resolver problemas'
description: 'No capítulo 2 da história "A Ascensão do Imortal Programador", John começa a aplicar o que aprendeu sobre funções em problemas reais enquanto trabalha em um projeto de criação de um site de compras online. Ele cria duas funções: "calcularTotal", que calcula o preço total de uma compra considerando o preço dos itens e o desconto aplicado, e "exibirItens", que exibe os itens de uma compra em uma tabela na página do site. No entanto, ele encontra alguns problemas ao testar as funções e precisa pedir ajuda ao mestre Wang para corrigir os erros. Com o apoio do mestre Wang, John consegue resolver os problemas e continuar trabalhando no projeto com mais confiança.'
publishDate: Dec 12 2022
heroImage: /assets/placeholder-hero.jpg
---

Com a base de conhecimento sobre funções estabelecida, John começou a aplicar o que havia aprendido em problemas reais. Ele começou a trabalhar em um projeto para criar um site de compras online para uma loja de roupas.

O primeiro problema que John precisou resolver foi como calcular o preço total de uma compra, considerando o preço dos itens e o desconto aplicado. Ele pensou em criar uma função chamada "calcularTotal" para resolver esse problema.

Ele começou a escrever o código da função e logo percebeu que precisava de dois parâmetros: o preço dos itens e o percentual de desconto. Ele escreveu o código da seguinte forma:

```javascript
function calcularTotal(precoItens, percentualDesconto) {
  // código para calcular o total aqui
}
```

Agora que ele tinha os parâmetros da função, John precisava escrever o código para calcular o total da compra. Ele lembrou que para calcular o valor do desconto, bastava multiplicar o preço dos itens pelo percentual de desconto e, em seguida, subtrair o resultado do preço dos itens. Ele escreveu o código da seguinte forma:

```javascript
function calcularTotal(precoItens, percentualDesconto) {
  let valorDesconto = precoItens * percentualDesconto;
  let total = precoItens - valorDesconto;
  return total;
}
```

John ficou satisfeito com o código da função e decidiu testá-la para ver se ela estava funcionando corretamente. Ele chamou a função passando os valores 100 e 0.10 como parâmetros, o que deveria resultar em um total de 90.

Ele ficou surpreso ao ver que a função não estava retornando o resultado esperado. Ele ficou confuso e decidiu pedir ajuda ao mestre Wang.

O mestre Wang olhou para o código de John e logo percebeu o erro. "Você está passando o percentual de desconto como um número decimal, mas o código da função está tratando como um número inteiro", disse o mestre Wang. "Para corrigir isso, basta dividir o percentual de desconto por 100 antes de multiplicar pelo preço dos itens."

John ficou agradecido pelo conselho do mestre Wang e corrigiu o código da função. Ele testou a função novamente e, desta vez, obteve o resultado esperado.

John ficou feliz ao ver que a função "calcularTotal" estava funcionando corretamente agora. Ele agradeceu ao mestre Wang pelo conselho e decidiu continuar trabalhando no projeto de criação do site de compras online.

O próximo problema que ele precisou resolver foi como exibir os itens de uma compra em uma tabela na página do site. Ele decidiu criar uma função chamada "exibirItens" para resolver esse problema.

Ele começou a escrever o código da função e logo percebeu que precisava de dois parâmetros: um array com os itens da compra e um elemento HTML onde os itens deveriam ser exibidos. Ele escreveu o código da seguinte forma:

```javascript
function exibirItens(itens, elemento) {
  // código para exibir os itens aqui
}
```

Agora que ele tinha os parâmetros da função, John precisava escrever o código para percorrer o array de itens e criar uma linha da tabela para cada item. Ele escreveu o código da seguinte forma:

```javascript
function exibirItens(itens, elemento) {
  let html = '';
  for (let i = 0; i < itens.length; i++) {
    html += '<tr><td>' + itens[i] + '</td></tr>';
  }
  elemento.innerHTML = html;
}
```

John ficou satisfeito com o código da função e decidiu testá-la para ver se ela estava funcionando corretamente. Ele chamou a função passando um array com os itens "camiseta", "calça", "sapato" e um elemento HTML como parâmetros.

Ele ficou surpreso ao ver que a função não estava exibindo os itens da compra na tabela. Ele ficou confuso e decidiu pedir ajuda ao mestre Wang novamente.

O mestre Wang olhou para o código de John e logo percebeu o erro. "Você está passando o elemento HTML como um parâmetro da função, mas o código da função está tratando como uma string", disse o mestre Wang. "Para corrigir isso, basta passar o elemento HTML como um objeto, usando o método document.getElementById para obtê-lo."

John ficou feliz ao ver que a função "exibirItens" estava funcionando corretamente agora. Ele agradeceu ao mestre Wang pelo conselho e decidiu continuar trabalhando no projeto de criação do site de compras online.

Ele percebeu que havia muitos outros problemas para resolver no projeto, mas agora, com o conhecimento sobre funções em JavaScript, ele sentia-se mais confiante em encarar qualquer desafio. Ele agradeceu ao mestre Wang pelo apoio e determinação em ajudá-lo a se tornar um imortal programador.

O mestre Wang sorriu e disse: "Você está no caminho certo, John. Ainda há muito mais a aprender e muitos desafios pela frente, mas acredite em si mesmo e nunca desista. Um dia, você se tornará um imortal programador, como aqueles de quem ouviu falar."

E assim, a jornada de John como imortal programador continuou, guiado pelo saber do mestre Wang e sua determinação em se tornar um programador experiente. Ele sabia que havia muito mais para aprender sobre o JavaScript e a lógica de programação, mas ele estava pronto para enfrentar qualquer desafio que viesse pela frente.