// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() { 
  const altura = prompt("insira a altura")
  const largura = prompt("insira a largura")
  console.log(altura*largura)

  // implemente sua lógica aqui

}
calculaAreaRetangulo() 

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt("insira o ano atual")
  const anoDeNascimento = prompt("insira o ano de nascimento")
  console.log(anoAtual-anoDeNascimento)

  // implemente sua lógica aqui

}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imc = peso/(altura*altura)
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt ("Qual é o seu nome")
  const idade = prompt ("Qual é a sua idade")
  const email = prompt ("Qual é o seu email")

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
return console.log (`Meu nome é ${nome}, tenho ${idade} anos,e o  meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt ("Qual é sua primeira cor favorita")
let cor2 = prompt ("Qual é sua segunda cor preferida")
let cor3 = prompt (" Qual é a sua terceira cor preferida")
const todascores = [cor1, cor2, cor3]
console.log(todascores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const retornarstringmaiuscula = string.toUpperCase()
return retornarstringmaiuscula

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custoDoteatro, valorcadaIngresso) {
  // implemente sua lógica aqui
const Cinema1 = custoDoteatro/ valorcadaIngresso
return Cinema1
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length===string2.length
}
checaStringsMesmoTamanho("sapato, chinelo")

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array [array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const retorna = array [0]
const retorna1 = array [array.length -1]
array [0] = retorna1
array [array.length -1] = retorna
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase ()=== string2.toLowerCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}