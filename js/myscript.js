// chiedere quanti chilometri
let distance = parseInt (prompt("Quanti chilometri vuoi percorrere?"));

// chiedere età
let age = parseInt (prompt("Quanti anni hai?"));

// calcolare prezzo
let price = 0.21 * distance;

if(age<18){
    document.getElementById("discount").innerHTML=`Hai diritto allo sconto per minorenni del 20&percnt;.`;
    price= price * 0.8;
}

else if(age>=65){
    document.getElementById("discount").innerHTML=`Hai diritto allo sconto per over 65 del 40&percnt;.`;
    price = price * 0.6;
}

else{
    document.getElementById("discount").innerHTML=`Siamo spacenti ma non hai diritto ad alcuno sconto.`;
}

price=price.toFixed(2);

// Frase d'uscita
document.getElementById("price").innerHTML=`Il tuo biglietto costa ${price}&euro;.`;