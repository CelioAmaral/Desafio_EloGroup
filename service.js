const validarEntradaDeDados = (lancamento) => {
   const { cpf, valor } = lancamento

   function limparFormatacao(cpf) {
      return cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
   }

   // validação dos digitos do CPF.
   function calcularDigitosVerificadores(cpf) {
      var soma   
      var resto
      soma = 0
      if (cpf == "00000000000") {
         return false
      }

      // Validação do primeiro dígito verificador, soma os 9 primeiros dígitos, multiplicando-os por 1, 2, 3, ..., 9
      for (let i = 1; i <= 9; i++) {
         soma += parseInt(cpf.substring(i - 1, i)) * (11 - i)
      }
      resto = (soma * 10) % 11

      if ((resto == 10) || (resto == 11)) {
         resto = 0
      }

      if (resto != parseInt(cpf.substring(9, 10))) {
         return false
      }

      soma = 0

      // Validação do segundo dígito verificador, soma os 10 primeiros dígitos, multiplicando-os por 1, 2, 3, ..., 9
      for (let i = 1; i <= 10; i++) {
         soma += parseInt(cpf.substring(i - 1, i)) * (12 - i)
      }
      resto = (soma * 10) % 11

      if ((resto == 10) || (resto == 11)) {
         resto = 0
      }

      if (resto != parseInt(cpf.substring(10, 11))) {
         return false
      }

      return true
   }

   function validaCpf(cpf) {
   cpf = limparFormatacao(cpf)

   if (!calcularDigitosVerificadores(cpf)) {
      return "CPF inválido."
   }

   // Simplificando regex /^\d+$/
   const regex = /^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$/;

   if (regex.test(cpf)) {
      return "CPF deve conter apenas caracteres numéricos."
   }   

   } 

   // Valor não pode ser superior a 15000,00.
   // Valor não pode ser inferior a -2000,00.
   if (typeof valor !== 'number' || valor > 15000 || valor < -2000) {
      return 'Valor deve ser um número entre -2000 e 15000'
   }
 
   return null
}

const recuperarSaldosPorConta = (lancamentos) => {
   const saldosPorConta = {} // Objeto para armazenar saldos por conta

   for (const lancamento of lancamentos) {
      const { cpf, valor } = lancamento // Busca cpf e valor 

      if (!saldosPorConta[cpf]) {
         saldosPorConta[cpf] = valor // Caso não exista, utiliza o valor do lançamento como saldo inicial da conta
      } else {
         saldosPorConta[cpf] += valor // Caso exista, adiciona o valor do lançamento ao saldo atual da conta
      }
   }

   // Construindo um array de objetos com o CPF e o saldo final de cada conta
   return Object.keys(saldosPorConta).map((cpf) => ({ cpf, valor: saldosPorConta[cpf] }))
}

const recuperarMaiorMenorLancamentos = (cpf, lancamentos) => {
   // Utiliza os lançamentos pelo CPF recebido como parâmetro
   const lancamentosCPF = lancamentos.filter(lancamento => lancamento.cpf === cpf);

   // Do menor para o maior, lançamentos pelo valor.
   lancamentosCPF.sort((a, b) => a.valor - b.valor);

   // Array de saída contendo os dois lançamentos (maior e menor).
   const lancamentosSaida = [];

   if (lancamentosCPF.length === 0) {
      // Caso não tenha lançamentos para o CPF, retorna um array vazio.
      return lancamentosSaida;
   } else if (lancamentosCPF.length === 1) {
      // Caso tenha apenas um lançamento para o CPF, adiciona o mesmo lançamento duas vezes no array de saída.
      lancamentosSaida.push(lancamentosCPF[0]);
      return lancamentosSaida;
   } else {
      // E caso tenha dois ou mais lançamentos para o CPF, adiciona o menor e o maior lançamento no array de saída.
      lancamentosSaida.push(lancamentosCPF[0]);
      lancamentosSaida.push(lancamentosCPF[lancamentosCPF.length - 1]);
      return lancamentosSaida;
   }
}

const recuperarMaioresSaldos = (lancamentos, n = 3) => {
   const saldos = recuperarSaldosPorConta(lancamentos)  // Utiliza a função "recuperarSaldosPorConta" para obter os saldos das contas


   const maioresSaldos = saldos
      .filter(({ valor }) => !isNaN(valor)) // Filtra as contas que não possuem valor de saldo (NaN)
      .sort((a, b) => b.valor - a.valor)// Ordena os saldos em ordem decrescente
      .slice(0, n) // Retorna um array com os "n" maiores saldos das contas

   return maioresSaldos
}

const recuperarMaioresMedias = (lancamentos) => {
   // Agrupa os valores dos lançamentos por CPF
   const lancamentosPorCpf = lancamentos.reduce((acc, lancamento) => {
      if (!acc[lancamento.cpf]) {
         acc[lancamento.cpf] = [];
      }
      acc[lancamento.cpf].push(lancamento.valor);
      return acc;
   }, {});

   // cálculo da média de cada CPF
   const mediasPorCpf = Object.keys(lancamentosPorCpf).reduce((acc, cpf) => {
      const lancamentosCpf = lancamentosPorCpf[cpf];
      const total = lancamentosCpf.reduce((acc, valor) => acc + valor, 0);
      const media = total / lancamentosCpf.length;
      acc[cpf] = media;
      return acc;
   }, {});

   // Ordena as medias de forma decrescente
   const cpfOrdenados = Object.keys(mediasPorCpf).sort((a, b) => mediasPorCpf[b] - mediasPorCpf[a]);

   // Retorna os três maiores saldos médios
   return cpfOrdenados.slice(0, 3).map((cpf) => ({ cpf, valor: mediasPorCpf[cpf].toFixed(3) }));
}