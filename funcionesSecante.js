function f(x) {
  var funcion = document.getElementById("funcion").value;
  let result = eval(funcion);
  return result;
}

function calcular() {
  var x0 = +document.getElementById("x0").value;
  var x1 = +document.getElementById("x1").value;
  var tolerancia = +document.getElementById("errorAbsoluto").value;
  var MaxI = +document.getElementById("iteracion").value;
  var f0 = f(x0); 
  var f1 = f(x1); 

  var c = x1 - (f1 * (x0-x1)) / (f0-f1);; 
  var fc = f(c); 
  var iteraciones = 1; 
  var valorEa = tolerancia + 1;

  while (valorEa > tolerancia || iteraciones < MaxI) {
      if (f0 * fc < 0) {
          x1 = c;
          f1 = fc;
      } else {
          x0 = c;
          f0 = fc;
      }
      c = (x0 + x1) / 2;
      fc = f(c);
      valorEa = Math.abs((c - x1)/c)*100
      iteraciones++;
  }
  let res = "La raíz aproximada es " + c + " con un Ea de " + valorEa + "% después de " + iteraciones + " iteraciones.";
  console.log(res);
  document.getElementById("resultado").value =res;
}