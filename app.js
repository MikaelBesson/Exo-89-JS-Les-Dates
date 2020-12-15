
let timestamp =document.getElementById("timestamp");
let localTime =document.getElementById("localTime");
let localDate =document.getElementById("localDate");
let resultat = document.getElementById("resultat");
let resultat1 = document.getElementById("resultat1");

timestamp.innerHTML =  "le timestamp aujourd'huis est : " + Date.now();
localTime.innerHTML = "la date en ce jour est : " + Date();
localDate.innerHTML = "l'heure en ce jour est : " +new Date();

let ceJour = new Date();
resultat.innerHTML = ceJour;

let data1 = ceJour+ceJour.setDate(+2);
resultat1.innerHTML =data1;









