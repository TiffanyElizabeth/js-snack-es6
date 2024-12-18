/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

// crea un array di oggetti (bici da corsa - nome e peso)
const racingBikes = [
    {
        brandName: "bike 1",
        weight: 900, //in grams
    },
    {
        brandName: "bike 2",
        weight: 1000, //in grams
    },
    {
        brandName: "bike 3",
        weight: 1200, //in grams
    },
    {
        brandName: "bike 4",
        weight: 1900, //in grams
    },
    {
        brandName: "bike 5",
        weight: 1500, //in grams
    }
]

// trova la bici con peso minore
let bike = racingBikes[0];

for (let i=0; i < racingBikes.length; i++) {
    if(racingBikes[i].weight < bike.weight) {
        bike = racingBikes[i];
    }
}

console.log(bike)

// stampa in schermo la bici con peso minore
alert(`La bici con il peso minore è: ${bike.brandName}, con un peso di ${bike.weight} grammi.`);