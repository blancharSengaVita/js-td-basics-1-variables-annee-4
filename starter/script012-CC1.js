/*****************************
* CODING CHALLENGE 1
*/

/*

Mark et John veulent comparer leur BMI (Indice de masse corporelle),
qui est calculé en utilisant la formule :
BMI = poids / taille^2 = poids / (taille * taille).
N.B. Le poids est en kg et la taille est en mètres.

1. Stockez le poids et la taille de  Mark et de John dans des variables
2. Calculez le BMI de chacun
3. Créez une variable booléenne qui contient l'information de savoir
   si Mark a un BMI plus élevé que John.
4. Imprimez une chaîne de caractères dans la console contenant la
variable de l'étape 3. (Quelque chose du genre "Est-ce que le BMI de
Mark est plus élevé que celui de John ? true"). 

BONNE CHANCE 😀
*/

const jhonWeight = 80;
const markWeight = 73;
const jhonHeight = 1.82;
const markHeight = 1.77;

const jhonBmi = jhonWeight/jhonHeight^2;
const markBmi = markWeight/markHeight^2;

let bool = markWeight < jhonWeight;

console.log(`Est-ce que le BMI de
 est plus élevé que celui de John ? ${bool}`)


