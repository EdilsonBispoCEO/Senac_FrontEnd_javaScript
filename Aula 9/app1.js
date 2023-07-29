const buttonElement =  document.getElementById('checkButton');
const divElement =  document.getElementById('resultadoMensagem');
 buttonElement.addEventListener('click', function() {
   //  alert('Você clicou no botão')

     const numeroInput  = document.getElementById('numeroInput').value
     if (numeroInput < 10) { // aqui você esta verificando se o numero é MENOR que 10
        divElement.classList.remove('button-green') 
       // alert('O numero é Maior que 10') 
       // buttonElement.classList.add('button-red')  
        divElement.classList.add('button-red')   
        divElement.innerHTML = 'O numero é Maior que 10'; //mas a mensagem esta alertando que ele é MAIOR
     } 
     else {
        divElement.classList.remove('button-red')  
       // alert('O numero é Menor que 10')
       //  buttonElement.classList.add('button-green')  
        divElement.classList.add('button-green')  
        divElement.innerHTML = 'O numero é Menor que 10';  
     }
});
