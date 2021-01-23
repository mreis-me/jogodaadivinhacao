function sorteia() {
  return Math.round(Math.random() * dificuldade);
}

function sorteiaNumeros(quantidade) {
  let segredos = [];
  let numero = 1;
  
  while(numero <= quantidade) {
    let numeroAleatorio = sorteia();

    if(numeroAleatorio !== 0) {
        let achou = false;
        
        for(let posicao = 0; posicao < segredos.length; posicao++) {
          if(segredos[posicao] == numeroAleatorio) {
            achou = true;
            break;
          }
        }

        if(achou == false) {
          segredos.push(numeroAleatorio);
          numero++;
        }
      }
    }
  return segredos;
}

let dificuldade = parseInt(prompt("Com quantos números você quer jogar?"));

let segredos = sorteiaNumeros(parseInt(prompt("Quer quantas chances de acertar?")));

console.log(segredos);

let input = document.querySelector("input");
input.focus();

function verifica() {
   let achou = false;

   for (let posicao = 0; posicao < segredos.length; posicao++) {
      if (input.value == segredos[posicao]){
        alert("Você acertou!");
        achou = true;
        break;
      }
   }
    if(achou == false) {
      alert("Você errou!");
    }
   
    input.value = "";
    input.focus();

    }

 let button = document.querySelector("button");
 button.onclick = verifica;