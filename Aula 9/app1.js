const buttonElement =  document.getElementById('checkButton');
 buttonElement.addEventListener('click', function() {
     alert('Você clicou no botão')

     const numeroInput  = document.getElementById('numeroInput').value
     if (numeroInput < 10) { 
        buttonElement.classList.remove('button-green')   
        buttonElement.classList.add('button-red')     
     } 
     else {
        buttonElement.classList.remove('button-red')  
        buttonElement.classList.add('button-green')    
     }
});