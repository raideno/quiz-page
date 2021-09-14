/*Réponse A */
document.getElementById('A').addEventListener('click', A)
function A(){
var x = document.getElementById("answer");
x.style.color = 'green'
x.innerHTML = "✔️ Votre réponse est correcte !";
}
 /*Réponse B*/
 document.getElementById('B').addEventListener('click', B)
function B(){
var x = document.getElementById("answer");
x.style.color = 'red'
x.innerHTML = "Votre réponse est incorrecte !";
}
/*Réponse C*/ 
document.getElementById('C').addEventListener('click', C)
function C(){
var x = document.getElementById("answer");
x.style.color = 'red'
x.innerHTML = "Votre réponse est incorrecte !";
}
/*QUIZ 2 */
/*Réponse A */
document.getElementById('AA').addEventListener('click', AA)
function AA(){
    var x = document.getElementById("response");
x.style.color = 'red'
x.innerHTML = "Votre réponse est incorrecte !";

}
/*Réponse B */
document.getElementById('AB').addEventListener('click', AB)
function AB(){
var x = document.getElementById("response");
x.style.color = 'red'
x.innerHTML = "Votre réponse est incorrecte !";
}
/*Réponse C */
document.getElementById('AC').addEventListener('click', AC)
function AC(){
    var x = document.getElementById("response");
    x.style.color = 'green'
    x.innerHTML = "✔️ Votre réponse est correcte !";
}
