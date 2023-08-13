const country = "Nigeria";
console.log(country);
//console.log(typeof country)

const continent = "Africa";
console.log(continent);
//console.log(typeof continent);

let nigeriaPopulation = 200000000;
console.log(nigeriaPopulation);
//console.log(typeof population);

let isIsLand = "Nigeria";

let language = "yoruba";
console.log(language);

// Basic Operators
console.log(nigeriaPopulation / 2, nigeriaPopulation + 1);

let finland = 6000000;
console.log(finland);
console.log(finland > nigeriaPopulation);

let averageAgeCountryPopulation = 33000000;
console.log(averageAgeCountryPopulation > nigeriaPopulation);

let description =
  "Nigeria is a country in Africa and it's over 200 Million people speak english as her official langage";
console.log(description);

console.log(`Nigeria is a country in Africa and it's over
200 Million people speak english
as her official langage`);

if (nigeriaPopulation > averageAgeCountryPopulation) {
  console.log(`Nigeria's population is above average`);
}

const numNigerianNeighbours = 1;

if (numNigerianNeighbours === 1) console.log("only 1 boarder!");
else if (numNigerianNeighbours > 1) {
  console.log("more than 1 border!");
} else if (numNigerianNeighbours < 1) {
  console.log("No border!");
}

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} Million people and it's capital city is ${capitalCity}`;
}

const country1 = describeCountry("Finland", 6, "Helsinki.");
const country2 = describeCountry("Nigeria", 250, "Abuja.");
const country3 = describeCountry("Ghana", 38, "Accra.");

console.log(country1, country2, country3);

// function percentageOfWorld1(population) {

//     return (population / 7900) * 100;}

function describeCountry(country, Population, capitalcity) {
  console.log(describeCountry);
  const countrydescription = `${country} has ${Population} Million people and its capital city is ${capitalcity}.`;
  return countrydescription;
}
const showCountryDetails = describeCountry(Nigeria, 250, Abuja);

console.log(showCountryDetails);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populationNigeria = percentageOfWorld1(250);
const populationGhana = percentageOfWorld1(38);
const populationKenya = percentageOfWorld1(45);

console.log(populationGhana, populationKenya, populationNigeria);

const percentageofworld3 = (population) => (population / 7900) * 100;
// const populationNigeria = percentageofworld3(250);
