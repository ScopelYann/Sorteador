let button = document.querySelector("#Sorteador-button")
let quantity = document.querySelector("#quantity-sorts")
let showNumber = document.querySelectorAll('.container-result')

//Função de sorteio
function sortear(minimo, maximo) {
  minimo = Math.ceil(minimo);//Define o valor minimo da funcão arredondando para cima
  maximo = Math.floor(maximo);//Define o valor maximo da funcão arredondando para baixo

  showNumber.forEach(function (acontece) {
    acontece.textContent = ""
  })
  //Faz com que o input gerador de números randomico funcione
  for (let i = 0; i < quantity.value; i++) {
    let result = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    // alert('Número ' + (i + 1) + ': ' + result)
    if ( i < showNumber.length){
      showNumber[i].textContent = result
      showNumber[i].style.display = 'inline-block'
    }
  }
  
}

//Função onde o e feito o sorteio através do botão

function realizarSorteio() {
  var minimo = parseInt(document.getElementById("minimo").value);
  var maximo = parseInt(document.getElementById("maximo").value);

  // Verifica se os valores são válidos
  if (isNaN(minimo) || isNaN(maximo) || minimo >= maximo) {
    alert("Por favor, insira valores válidos. O primeiro campo deve ser menor que o segundo campo.");
    return;
  }
  var resultadoSorteio = sortear(minimo, maximo);
}

function limitarCaracteres(input, limite) {//Limita o tanto de caracteres permitidos
  var texto = input.value;
  if (texto.length > limite) {
    input.value = texto.substring(0, limite);
  }
  if (quantity.value > 10) {
    quantity.value = 10
  }
}
function muda(){
  o = 10
  for(i = 0; o > i; i++ ){
    showNumber[i].style.display = 'none'
  }

  
}
quantity.addEventListener('change', muda)

