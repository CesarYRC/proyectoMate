function f(x) {
  var funcion = document.getElementById("funcion").value;
  let result = eval(funcion);
  return result;
}

function calcular() {
  var x1 = +document.getElementById("x1").value;
  var xu = +document.getElementById("xu").value;
  var tolerancia = +document.getElementById("Ea").value;
  var MaxI = +document.getElementById("MaxI").value;
  var fa = f(x1); 
  var fb = f(xu); 
  var c = (x1 + xu) / 2; 
  var fc = f(c); 
  var iteraciones = 1; 
  var valorEa = tolerancia + 1;

  while (valorEa > tolerancia || iteraciones < MaxI) {
      if (fa * fc < 0) {
          xu = c;
          fb = fc;
      } else {
          x1 = c;
          fa = fc;
      }
      c = (x1 + xu) / 2;
      fc = f(c);
      valorEa = Math.abs((c - xu)/c)*100
      iteraciones++;
  }
  let res = "La raíz aproximada es " + c + " con un Ea de " + valorEa + "% después de " + iteraciones + " iteraciones.";
  console.log(res);
  document.getElementById("resultado").value =res;
}