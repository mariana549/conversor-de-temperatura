let input = document.querySelector("#temperatura")
let botao = document.querySelector("button")
let radiusCelsius = document.querySelector("#cel")
let radiusCelsius2 = document.querySelector("#cel2")
let radiusFah = document.querySelector("#fa")
let radiusFah2 = document.querySelector("#fahre")
let radiusKel = document.querySelector("#kel")
let radiusKel2 = document.querySelector("#kel2")
let resposta = document.querySelector("#res")
let body = document.querySelector('body')

// funçôes

function calcularTemperatura(valor) {
   let calculo

   if (valor === ""){
      alert("preencha o campo!")
      return
   }

   if (radiusCelsius.checked && radiusFah2.checked) {
      calculo = valor * 1.8 + 32;
      resposta.innerHTML = calculo.toFixed(2) + " ºF";
   } else if(radiusFah.checked && radiusCelsius2.checked){
      calculo = (valor - 32) / 1.8;
      resposta.innerHTML = calculo.toFixed(2) + " ºC";
   } else if(radiusKel.checked && radiusCelsius2.checked){
      calculo = valor - 273.15;
      resposta.innerHTML = calculo.toFixed(2) + " ºC";
   } else if (radiusCelsius.checked && radiusKel2.checked){
      calculo = valor + 273.15;
      resposta.innerHTML = calculo + " K";
   } else {
      alert("não foi possivel fazer a conversão");
   }
}

// eventos

botao.addEventListener("click", ()=> calcularTemperatura(input.value))

body.addEventListener("keypress", (letra)=> {
   if (letra.key === "Enter"){
      calcularTemperatura(input.value)
   }
})