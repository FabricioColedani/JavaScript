function sumaNum() {
        
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);
    
    
    var suma = num1 + num2;
    
    document.getElementById('resultado').innerHTML = "El resultado es: " + suma
  }

function restaNum() {
    
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);
    
    
    var suma = num1 - num2;
    
    document.getElementById('resultado').innerHTML = "El resultado es: " + suma
  }

function multiplicacionNum() {
    
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);
    
    
    var suma = num1 * num2;
    
    document.getElementById('resultado').innerHTML = "El resultado es: " + suma
  }

function divisionNum() {
    
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);
    
    
    var suma = num1 / num2;
    
    document.getElementById('resultado').innerHTML = "El resultado es: " + suma
  }