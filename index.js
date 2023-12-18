let input = document.querySelector("#temperatura")
let botao = document.querySelector("button")
let radiusCelsius = document.querySelector("#cel")
let radiusFah = document.querySelector("#fa")
let resposta = document.querySelector("#res")
let body = document.querySelector('body')

// funçôes

function calcularTemperatura(valor) {
   let calculo

   if (valor === ""){
      alert("preencha o campo!")
      return
   }

   if (radiusCelsius.checked) {
      calculo = valor * 1.8 + 32
      resposta.innerHTML = calculo.toFixed(2) + " ºF"
   } else {
      calculo = (valor - 32) / 1.8
      resposta.innerHTML = calculo.toFixed(2) + " ºC"
   }
}

// eventos

botao.addEventListener("click", ()=> calcularTemperatura(input.value))

body.addEventListener("keypress", (letra)=> {
   if (letra.key === "Enter"){
      calcularTemperatura(input.value)
   }
})