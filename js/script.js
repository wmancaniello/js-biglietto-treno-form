// TEST
// alert("ciao");

// Controllo da fare a fine codice simile al validatorHTML
// "use strict";

// 1. Trovo bottoni nella pagina
// Genera
const genBtn = document.getElementById("generate-btn"); // object | null
console.log(genBtn, typeof genBtn);
// Annulla
const stopBtn = document.getElementById("stop-btn"); // object | null
console.log(stopBtn, typeof stopBtn);

// 2. Aggiunta EventListener ai btn

// Annulla
if (stopBtn != null) {
  stopBtn.addEventListener("click", function(){
    // Ripulire campi
    document.getElementById("name-surname").value = "";
    document.getElementById("km-number").value = "";
    document.getElementById("age").value = "";
    document.getElementById("result").innerHTML = "";
  })
}

// Genera
// Stampa click del bottone
if (genBtn !== null) {
  genBtn.addEventListener("click", function () {
    // test
    // console.log("CLICK");

    // PRELEVO I DATI:

    // Nome e cognome
    const nameSurnameInput = document.getElementById("name-surname"); // object | null
    console.log(nameSurnameInput, typeof nameSurnameInput);

    // per abbreviare :
    // constNameSurname = document.getElementById("nome").value; 

    const nameSurnameValue = nameSurnameInput.value; // string
    console.log(nameSurnameValue, typeof nameSurnameValue);

    // Km da percorrere
    const kmNumberInput = document.getElementById("km-number"); // object | null
    console.log(kmNumberInput, typeof kmNumberInput);

    const kmNumberValue = parseInt(kmNumberInput.value); // number
    console.log(kmNumberValue, typeof kmNumberValue);

    // Fascia d'età
    const ageInput = document.getElementById("age"); // object | null
    console.log(ageInput, typeof ageInput);

    const ageValue = ageInput.value; // string
    console.log(ageValue, typeof ageValue);

    //ESECUZIONE LOGICA DEL PROGRAMMA

    // Prezzo per KM
    let priceKm = 0.21; //number
    console.log(priceKm, typeof priceKm);

    // Calcolo del prezzo totale del biglietto
    let totalPrice = kmNumberValue * priceKm; //number
    console.log(totalPrice, typeof totalPrice);

    // Applicazione dello sconto
    if (ageValue === "minorenne") {
      //sconto del 20%
      totalPrice = totalPrice * 0.8;
    } else if (ageValue === "over65") {
      //sconto del 40%
      totalPrice = totalPrice * 0.6;
    }
    console.log(totalPrice, typeof totalPrice);

    // STAMPA
    document.getElementById("result").innerHTML = ` ${totalPrice.toFixed(2)} €`;
  });
}
