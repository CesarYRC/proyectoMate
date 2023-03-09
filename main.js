function limpiar() {
    document.getElementById('miFormulario').onreset();
}


function lineal() {
    var fx0 = Number(document.getElementById('valorfx0').value);
    var fx1 = Number(document.getElementById('valorfx1').value); 
    var x = Number(document.getElementById('valorx').value);
    var x0 = Number(document.getElementById('valorx0').value); 
    var x1 = Number(document.getElementById('valorx1').value);
    var valorVerdadero = Number(document.getElementById('valorVerdadero').value);

    var b1 = (fx0) + ((fx1 - fx0) / (x1 -x0));
    var total = (b1) * (x - x0); 

    var error1 = valorVerdadero - total;
    var error2 = error1 / valorVerdadero;
    var error3 = error2 * 100;


    document.getElementById('error').value = error3.toFixed(6);

    document.getElementById('result').value = total;
}
function cuadratica() {

    var x = Number(document.getElementById('valorx').value);
    var x0 = Number(document.getElementById('valorx0').value); 
    var x1 = Number(document.getElementById('valorx1').value);
    var x2 = Number(document.getElementById('valorx2').value);
    var fx0 = Number(document.getElementById('valorfx0').value);
    var fx1 = Number(document.getElementById('valorfx1').value); 
    var fx2 = Number(document.getElementById('valorfx2').value); 
    var valorVerdadero = Number(document.getElementById('valorVerdadero').value);
    
    var b0 = fx0;
    var b1 = (fx1 - fx0) / (x1 - x0);
    var b2 = ((fx2 - fx0) / (x2 - x0) - b1) / (x2 - x1);

    var total = b0 + (b1 * (x - x0)) + (b2 * ((x - x0) * (x - x1)));

    var error1 = valorVerdadero - total;
    var error2 = error1 / valorVerdadero;
    var error3 = error2 * 100;


    document.getElementById('error').value = error3.toFixed(6);

    document.getElementById('resultado').value = total;

}
function lagrange() {
    var x = Number(document.getElementById('valorx').value);
    var x0 = Number(document.getElementById('valorx0').value); 
    var x1 = Number(document.getElementById('valorx1').value);
    var fx0 = Number(document.getElementById('valorfx0').value);
    var fx1 = Number(document.getElementById('valorfx1').value);
    var valorVerdadero = Number(document.getElementById('valorVerdadero').value);

    var parteOne = ((fx0) * ((x - x1) / (x0 - x1)));
    var parteTwo = ((fx1) * ((x - x0) / (x1 - x0)));
    let lagrangePrim = parteOne + parteTwo;

    var error1 = valorVerdadero - lagrangePrim;
    var error2 = error1 / valorVerdadero;
    var error3 = error2 * 100;


    document.getElementById('error').value = error3.toFixed(6);
 
    document.getElementById('resultado').value = lagrangePrim;
}
function lagrangeSeg() {

    var x = Number(document.getElementById('valorx').value);
    var x0 = Number(document.getElementById('valorx0').value); 
    var x1 = Number(document.getElementById('valorx1').value);
    var x2 = Number(document.getElementById('valorx2').value);
    var fx0 = Number(document.getElementById('valorfx0').value);
    var fx1 = Number(document.getElementById('valorfx1').value); 
    var fx2 = Number(document.getElementById('valorfx2').value); 
    var valorVerdadero = Number(document.getElementById('valorVerdadero').value);
    
    
    var partOne = ((fx0) * ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2)));
    var partTwo = ((fx1) * ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2)));
    var partThree = ((fx2) * ((x - x0) * (x -x1)) / ((x2 - x0) * (x2 - x1)));
    var totalLagraSegGra = partOne + partTwo + partThree;

    var error1 = valorVerdadero - totalLagraSegGra;
    var error2 = error1 / valorVerdadero;
    var error3 = error2 * 100;


    document.getElementById('error').value = error3.toFixed(6);
    
    document.getElementById('resultado').value = totalLagraSegGra;


    
}
