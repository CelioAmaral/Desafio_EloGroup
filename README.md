# Contabilizar

### :dart: Challenge(Desafio)

Os dados e resultados dos testes deste desafio, estão no final deste README.

##### Teste técnico de programação

Este repositório tem o apoio da [Elogroup](https://www.elogroup.com.br)

![Elogroup](/assets/elogroup.svg?raw=true "Frontend")

## Introdução

Este repositório contém um arquétipo cujo objetivo é prover um artefato para codificação de um desafio de programação, de nível básico, com o uso da linguagem Javascript.

O propósito deste desafio é testar o conhecimento de uma pessoa em técnicas de **Programação** e **Manipulação de Dados**.

Nas seções abaixo, o(a) candidato(a) encontrará as instruções sobre como deverá proceder para realizar o desafio.

Caso o(a) candidato(a) esteja participando de um processo seletivo, deverá considerar não apenas as instruções contidas aqui, como também as instruções que forem fornecidas pela organização que estiver promovendo o processo seletivo.

**Por que Javascript?**

Atualmente existem dezenas de linguagens de programação sendo utilizadas para as mais diversas finalidades no mercado. Isso torna o desafio de elaborar um desafio de programação ainda mais complexo. Entendemos que Javascript, por ser uma linguagem de programação amplamente utilizada para o desenvolvimento de aplicações para diversas plataformas (em especial a web), facilita o processo de avaliação, vez que para esse tipo de conteúdo podemos usar o próprio navegador para executar os códigos, sem necessidade de configurações de ambiente.

Caso o(a) candidato(a) não tenha familiaridade com Javascript, indicamos uma ótima referência para estudo: a documentação do [Mozilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference) sobre a linguagem.

## Orientações gerais

O(a) candidato(a) deverá realizar upload do arquivo ZIP com o conteúdo desse repositório. Ele pode ser obtido clicando no menu do botão "Code"(na parte superior, mais à direita desta tela), escolhendo a opção "Download ZIP".

Os arquivos contidos no ZIP baixado devem ser descompactados em uma mesma pasta na máquina local.

Para realizar o desafio, o(a) candidato(a) deverá alterar o conteúdo do arquivo **service.js**, adicionando código nas funções contidas nesse arquivo, conforme as instruções que serão descritas adiante.

Para testar o código implementado, o(a) candidato(o) poderá abrir o arquivo index.html no navegador, o que geralmente é possível apenas com a execução de um duplo clique sobre ele.

Por meio dessa interface, o(a) candidato(a) poderá testar o código implementado.

Obs.: Como não estamos usando um armazenamento de dados persistente (banco de dados, storage...), lembre-se que caso a página seja recarregada, os dados precisarão ser adicionados novamente.

Imagem do arquivo index.html aberto no navegador.

![Frontend](/assets/front.png?raw=true "Frontend")

### Entrega

Se esse desafio estiver sendo realizado no contexto de um processo seletivo, a entrega do desafio deverá ser realizada em conformidade com as orientações da organização que promove o processo.

Por padrão, o(a) candidato(a), após terminar a codificação das funções contidas no arquivo **service.js**, deverá criar um novo arquivo ZIP com todos os arquivos contidos na pasta original (incluindo o arquivo service.js com o código implementado) e enviar para a organização avaliadora por meio de um link por ela fornecida.

## Case

### Contexto de Negócio

Considerando tratar de um desafio, buscamos criar um cenário que reflita situações pelas quais vivenciamos como desenvolvedores de software no dia-a-dia.

Esse desafio simula o que poderiam ser consideradas funções de um sistema de Contabilidade, mais especificamente de um módulo de análise de dados.

Por se tratar de um cenário hipotético, essas funções podem parecer não fazer qualquer sentido no mundo real, embora o conhecimento em técnicas de programação e manipulação de dados, exigidas do(a) candidato(a) para que realize a implementação, sejam exatamente as mesmas que seriam exigidas em uma cenário real.

### Implementação

O arquivo service.js contém as 5 (cinco) funções destacadas na imagem abaixo.

![Backend](/assets/back.png?raw=true "Backend")

O código do corpo de cada uma dessas funções deve ser implementado em conformidade com as regras que serão descritas adiante.

Para um melhor entendimento das regras, além da descrição, o(a) candidato(a) poderá usar da interpretação dos dados de entrada e saída presentes na seção [**Exemplo de Teste do programa**](#exemplo-de-teste-do-programa).

O nome de cada função também é sugestivo. Embora o candidato só possa alterar o arquivo **service.js** é facultado analisar o código dos demais arquivos contidos no repositório, a fim de entender o propósito do código a ser implementado.

A capacidade de interpretar os requisitos, mesmo em casos que a especificação não seja detalhada, também faz parte do rol de habilidades de um bom desenvolvedor e é comum que esses aspectos também sejam considerados pelos avaliadores no momento de decidir pela contratação, ou não, do(a) candidato(a).

Ainda assim, caso o(a) candidato(a) tenha dúvidas, poderá usar os meios fornecidos para contatar a organização que estiver promovendo o processo seletivo.

#### Modelos de dados

Existem dois tipos de objeto que serão usados como parâmetros de entrada nas funções: o JSON **"lancamento"** (no singular) e o **"lancamentos"** (no plural).

Você deve considerar que o JSON lancamento (no singular) será um objeto que possui duas propriedades: cpf e valor. Exemplo:

```js
{ cpf: "07817548790", valor: 12.45 }
```

A propriedade **cpf** é uma string, enquanto a propriedade **valor** é um número.

Por sua vez, o JSON lancamentos (no plural) será um array de objetos do tipo lancamento (no singular). Exemplo:

```js
[
  { cpf: "07817548790", valor: 12.45 },
  { cpf: "92632334039", valor: 1234.65 },
];
```

#### Regras de Negócio

Obs.: Para validações e outros cálculos, o(a) candidato(a) poderá criar funções auxiliares (até mesmo capturar funções na internet para usar no código), mas **não deve modificar as assinaturas das funções existentes**.

1. Função **validarEntradaDeDados**

- Tipo do parâmetro de entrada: lancamento
- Tipos de retorno: string (mensagens de validação) ou null (se todos os valores estiverem em conformidade com as validações)
  Esta função recebe um objeto (lancamento) contendo os valores digitados pelo usuário. Esses valores deverão ser analisados conforme as regras abaixo. Caso uma ou mais regras não sejam atendidas, uma mensagem de validação informando quais regras não foram atendidas deverá ser retornada na função. Se todas as regras forem atendidas a função deverá retornar null.

  - CPF deve conter apenas caracteres numéricos.
  - Os dígitos verificadores do CPF devem ser válido.
  - Valor deve ser numérico.
  - Valor não pode ser superior a 15000,00.
  - Valor não pode ser inferior a -2000,00.

Obs.: Para realizar o cálculo do dígito verificador do CPF e saber se o valor informado é válido, poderá o(a) candidato(a) utilizar uma função obtida por meio de pesquisa na Internet, desde que se certifique que essa função esteja funcionando corretamente. A habilidade para realizar a pesquisa e adição de código obtido externamente faz parte dos critérios de avaliação, pois representa uma rotina comum no dia-a-dia dos desenvolvedores.

2. Função **recuperarSaldosPorConta**

- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipo de retorno: lancamentos (Em cada linha um CPF diferente e o respectivo saldo)
  Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo em cada linha um CPF e o valor do respectivo saldo, ordenados na sequência em foram adicionados pelo usuário. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.

3. Função **recuperarMaiorMenorLancamentos**

- Tipo do parâmetro de entrada:
  - lancamentos (todos os lançamentos registrados)
  - string (CPF já validado, somente com números)
- Tipo de retorno: lancamentos (somente dois registros, conforme solicitado na regra)
  Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, dois registros, sendo um deles com o maior e outro com o menor valor lançado para o CPF recebido como parâmetro, ordenados do menor para o maior valor. Havendo menos de dois lançamentos registrados para o respectivo CPF, os dois registros (maior e menor) contidos no array de retorno deverão ser idênticos. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.

4. Função **recuperarMaioresSaldos**

- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipo de retorno: lancamentos (somente três registros, conforme solicitado na regra)
  Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, três registros correspondentes aos CPFs com maiores saldos, ordenados do maior para o menor valor. Para cada lançamento deverá ser exibido o saldo do respectivo CPF. Havendo menos de três diferentes CPFs nos registros, deve ser retornado no array quantos forem possíveis. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.

5. Função: **recuperarMaioresMedias**

- Tipo do parâmetro de entrada: lancamentos (todos os lançamentos registrados)
- Tipos de retorno: lancamentos (somente os três registros identificados na regra)
  Essa função recebe um array com todos os lançamentos digitados para todos os CPF's. Os valores desse array deverão ser analisados e um array de saída deverá ser criado contendo, no máximo, três registros correspondentes aos CPFs com maiores saldos médios, ordenados do maior para o menor valor. O saldo médio deve corresponder à "MÉDIA" dos valores registros para o respectivo CPF. Havendo menos de três diferentes CPFs nos registros, deve ser retornado no array quantos forem possível. No caso de não ser identificado nenhum registro correspondente, o retorno deve ser um array vazio.

## Exemplo de Teste do programa

#### Entradas de dados:

Obs.: A sequência deve ser obedecida.

| CPF         | Valor     |
| ----------- | --------- |
| 74914372061 | 1.234,78  |
| 74914372061 | -123,56   |
| 74914372061 | -865,00   |
| 41421980096 | -987,00   |
| 41421980096 | 123,00    |
| 41421980096 | -1.225,90 |
| 05987701007 | 1.267,39  |
| 05987701007 | 143,90    |
| 05987701007 | 23,40     |
| 93975495022 | 1.943,00  |
| 93975495022 | 8.000,21  |
| 93975495022 | 546,78    |

#### Saídas esperadas:

##### Painel Azul Claro (Saldos por CPF - Na sequência em que os CPFs foram digitados):

| CPF         | Valor     |
| ----------- | --------- |
| 74914372061 | 246,22    |
| 41421980096 | -2.089,90 |
| 05987701007 | 1.434,69  |
| 93975495022 | 10.489,99 |

##### Painel Cinza (O maior e o menor lançamento do último CPF - Do menor para o maior):

| CPF         | Valor    |
| ----------- | -------- |
| 93975495022 | 546,78   |
| 93975495022 | 8.000,21 |

##### Painel Azul Escuro (Os três CPFs com maiores "médias" - Da maior para a menor):

| CPF         | Valor    |
| ----------- | -------- |
| 93975495022 | 3.496,66 |
| 05987701007 | 478,23   |
| 74914372061 | 82,07    |

##### Painel Amarelo (Três maiores saldos por CPF - do maior para o menor):

| CPF         | Valor     |
| ----------- | --------- |
| 93975495022 | 10.489,99 |
| 05987701007 | 1.434,69  |
| 74914372061 | 246,22    |

### Sequência utilizada para testes

Neste desafio foi utilizado os dados contidos no arquivo index.js

![Ordem](/assets/ordem_sequencia.png?raw=true "Backend")

| CPF         | Valor   |
| ----------- | ------- |
| 74914372061 | 1234.78 |
| 74914372061 | -123.56 |
| 74914372061 | -865.00 |
| 41421980096 | -987    |
| 41421980096 | 123     |
| 41421980096 | -1225.9 |
| 05987701007 | 1267.39 |
| 05987701007 | 143.9   |
| 05987701007 | 23.4    |
| 93975495022 | 1943    |
| 93975495022 | 8000.21 |
| 93975495022 | 546.78  |

### Resultado dos testes

![Resultado](/assets/desafioelogroup.png?raw=true "Frontend")

## 👨🏽‍💻 Author:

<img src="https://avatars.githubusercontent.com/u/85323953?v=4" width="100px;" alt="foto do desenvolvedor"/>

- [@CelioAmaral](https://github.com/CelioAmaral)

<sup>Systems Analyst</sup>
</br>

<div>
  <a href="https://www.linkedin.com/in/celioamaral20" target="_blank"><img align="center" alt="Celio-Link" height="30" width="90" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=flat&logo=linkedin&logoColor=white" target="_blank"></a> 
</div>
