const btn = document.querySelector("#send");

btn.addEventListener("click", function(e){

    e.preventDefault();

    //Pegar os inputs - início

    const a = document.querySelector("#a");
    const b = document.querySelector("#b");
    const c = document.querySelector("#c");

    //Pegar os inputs - fim

    //Transformar os inputs em valores - início
    
    const valuea = a.value;
    const valueb = b.value;
    const valuec = c.value;

    //Transformar os inputs em valores - fim

    //Código da calculadora - início

    //Delta
    delta = (Math.pow(valueb, 2)-4 * valuea * valuec)

    //Se delta negativo
    if (delta < 0){
        console.log("A equação não possui valores reais");
        X1 = "Ø"
        X2 = "Ø"
    }

    //Se delta positivo
    if (delta > 0){
        X1 = (-1 * valueb + Math.sqrt(delta))/(2 * valuea);
        X2 = (-1 * valueb - Math.sqrt(delta))/(2 * valuea);
    }

    //Código da calculadora - fim  

    //print dos resultados no console - início

    console.log("Delta = "+delta);
    console.log("X1 = "+X1);
    console.log("X2 = "+X2);

    //print dos resultados no console - fim

    //Retornando valores no HTML - início

    //Se delta negativo

    if (delta < 0){
    document.getElementById("-D").innerHTML ="<br>Delta é negativo";
    document.getElementById("Resultado D").innerHTML ="Por Delta ser negativo, a equação não possui uma solução entre os números reais";
    document.getElementById("Resultado X1").innerHTML ="<b>X1 = </b>Ø";
    document.getElementById("Resultado X2").innerHTML ="<b>X2 = </b>Ø";
    }

    //Se delta positivo

    if (delta > 0){
    document.getElementById("-D").innerHTML ="";
    document.getElementById("Resultado D").innerHTML ="<b>Delta = </b>"+delta;
    document.getElementById("Resultado X1").innerHTML ="<b>X1 = </b>"+X1;
    document.getElementById("Resultado X2").innerHTML ="<b>X2 = </b>"+X2;
    }

    //Se delta for 0

    if (delta == 0){
        document.getElementById("-D").innerHTML ="";
        document.getElementById("Resultado D").innerHTML ="<b>Delta = </b>"+delta;
        document.getElementById("Resultado X1").innerHTML ="<b>X1 = </b>"+X1;
        document.getElementById("Resultado X2").innerHTML ="<b>X2 = </b>"+X2";
    }

    //Retornando valores no HTML - fim

});
