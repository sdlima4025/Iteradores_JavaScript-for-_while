//Iteração dos loops && Qual retorno do loop?

// while
// var letraCerta = prompt("digite a letra A");

// while(letraCerta!== "a") {
//     letraCerta = prompt("Digite a Letra certa");
// }
// alert("obrigado")


//dowhile?
// var total = 0;

// while(total <= 5) {
//    console.log(total);
//    total++;
// }
// console.log("saiu do while " + total);

// usado para arrays - for(condição inicial; verificação da condição boolean; condição true executa)
//    for(var i = 0; i <= 10; i++) {
//    console.log(i);
// }


var listaNumeros = [1,2,3,4,5];

for(var i = 0; i <= listaNumeros.length; i++) {
   if(listaNumeros[i] === 2) {
      console.log("Número encontrado!");
   }else {
      console.log("Número não encontrado!")
   } 

}


