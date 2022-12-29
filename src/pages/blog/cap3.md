---
layout: ../../layouts/BlogPost.astro
title: 'Capítulo 3: Mais sobre funções'
description: 'No capítulo 3 da história "A Ascensão do Imortal Programador", John aprende mais sobre funções em JavaScript com o mestre Wang. Ele aprende a criar funções que aceitam um número variável de parâmetros usando o operador de "spread" (...). Ele também aprende a criar funções que retornam outras funções. Ele testa essas técnicas criando uma função "calcularTotal" que calcula o preço total de uma compra considerando o desconto aplicado e um número variável de itens, e uma função "criarCalculadora" que retorna uma função que calcula o preço total de uma compra com um determinado desconto aplicado. Ele fica satisfeito ao ver que essas funções funcionam corretamente e decide continuar a explorar as possibilidades das funções em JavaScript.'
publishDate: Dec 12 2022
heroImage: /assets/placeholder-hero.jpg
---

Com o projeto de criação do site de compras online progredindo, John começou a se sentir mais confiante em suas habilidades como programador. Ele agradeceu ao mestre Wang por toda a ajuda que recebeu até então e perguntou se havia mais alguma coisa que ele poderia aprender sobre funções.

O mestre Wang sorriu e disse: "Existem muitas outras coisas que você pode aprender sobre funções. Por exemplo, você pode criar funções que aceitam um número variável de parâmetros, ou funções que retornam funções. Você também pode usar a palavra-chave "this" dentro de uma função para fazer referência ao objeto que a chamou."

John ficou interessado e perguntou como ele poderia usar essas técnicas avançadas em seu projeto. O mestre Wang pensou por um momento e disse: "Bem, por exemplo, você pode criar uma função que aceita um número variável de itens e um desconto aplicado, e retorna o preço total da compra. Isso seria útil se você quiser permitir que os usuários adicionem vários itens à compra de uma só vez."

John ficou animado com a possibilidade de usar essas técnicas em seu projeto e perguntou ao mestre Wang como ele poderia fazer isso. O mestre Wang explicou a John como criar uma função que aceita um número variável de parâmetros, usando o operador de "spread" (...).

Ele escreveu o código da seguinte forma:

```javascript
function calcularTotal(desconto, ...itens) {
  let precoItens = 0;
  for (let i = 0; i < itens.length; i++) {
    precoItens += itens[i].preco;
  }
  let valorDesconto = precoItens * desconto;
  let total = precoItens - valorDesconto;
  return total;
}

```

John ficou impressionado com a simplicidade do código e agradeceu ao mestre Wang pelo ensinamento. Ele decidiu testar a função com alguns exemplos para ver como ela funcionava.

Ele chamou a função passando os valores 0.1 (desconto de 10%) e três itens como parâmetros, cada um com um preço diferente. Ele ficou surpreso ao ver que a função retornou o preço corretamente.

John ficou feliz ao ver que a função "calcularTotal" estava funcionando corretamente com um número variável de parâmetros. Ele agradeceu ao mestre Wang pelo ensinamento e decidiu continuar a testar a função com mais exemplos.

Ele chamou a função passando os valores 0.2 (desconto de 20%) e cinco itens como parâmetros. Ele ficou satisfeito ao ver que a função retornou o preço total correto da compra, considerando o desconto aplicado e os preços dos itens.

Ele decidiu perguntar ao mestre Wang se havia mais alguma coisa que ele poderia aprender sobre funções. O mestre Wang disse: "Sim, você também pode criar funções que retornam outras funções. Isso pode ser útil quando você quer criar funções que possuem comportamentos diferentes, dependendo das opções escolhidas pelo usuário."

John ficou interessado e perguntou ao mestre Wang como ele poderia criar uma função que retorna outra função. O mestre Wang explicou a John como criar uma função "criarCalculadora" que retorna uma função que calcula o preço total de uma compra com um determinado desconto aplicado.

Ele escreveu o código da seguinte forma:

```javascript
function criarCalculadora(desconto) {
  return function (...itens) {
    let precoItens = 0;
    for (let i = 0; i < itens.length; i++) {
      precoItens += itens[i].preco;
    }
    let valorDesconto = precoItens * desconto;
    let total = precoItens - valorDesconto;
    return total;
  }
}
```

John ficou impressionado com a criatividade do código e agradeceu ao mestre Wang pelo ensinamento. Ele decidiu testar a função "criarCalculadora" para ver como ela funcionava.

Ele chamou a função passando o valor 0.1 (desconto de 10%) como parâmetro e armazenou o resultado em uma variável chamada "calculadora10". Ele ficou surpreso ao ver que a variável "calculadora10" agora era uma função que ele podia chamar para calcular o preço total de uma compra com um desconto de 10%.

Ele decidiu testar a função "calculadora10" passando dois itens como parâmetros. Ele ficou satisfeito ao ver que a função retornou o preço total correto da compra, considerando o desconto de 10% aplicado e os preços dos itens.

Ele agradeceu ao mestre Wang novamente e decidiu continuar a explorar as possibilidades das funções em JavaScript. Ele sabia que havia muito mais para aprender e estava determinado a se tornar um imortal programador experiente.