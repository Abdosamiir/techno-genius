// const breeds = [
//   {
//     breed: 'German Shepherd',
//     averageWeight: 32,
//     activities: ['fetch', 'swimming'],
//   },
//   {
//     breed: 'Dalmatian',
//     averageWeight: 24,
//     activities: ['running', 'fetch', 'agility'],
//   },
//   {
//     breed: 'Labrador',
//     averageWeight: 28,
//     activities: ['swimming', 'fetch'],
//   },
//   {
//     breed: 'Beagle',
//     averageWeight: 12,
//     activities: ['digging', 'fetch'],
//   },
//   {
//     breed: 'Husky',
//     averageWeight: 26,
//     activities: ['running', 'agility', 'swimming'],
//   },
//   {
//     breed: 'Bulldog',
//     averageWeight: 36,
//     activities: ['sleeping'],
//   },
//   {
//     breed: 'Poodle',
//     averageWeight: 18,
//     activities: ['agility', 'fetch'],
//   },
// ];

// const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
// console.log(huskyWeight);

// const dogBothActivities = breeds.find(
//   breed =>
//     breed.activities.includes('running') && breed.activities.includes('fetch')
// ).breed;

// console.log(dogBothActivities);

// const allActivities = breeds.flatMap(breed => breed.activities);
// console.log(allActivities);

// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

// const swimmingAdjacent = breeds
//   .filter(breed => breed.activities.includes('swimming'))
//   .flatMap(breed => breed.activities)
//   .filter(activity => activity !== 'swimming');

// console.log([...new Set(swimmingAdjacent)]);

// console.log(breeds.every(breed => breed.averageWeight > 10));
// console.log(breeds.some(breed => breed.activities.length >= 3));

// const fetchWeights = breeds
//   .filter(breed => breed.activities.includes('fetch'))
//   .map(breed => breed.averageWeight);
// const heaviestFetchBreed = Math.max(...fetchWeights);
// console.log(fetchWeights);
// console.log(heaviestFetchBreed);

// const arr = ["abdo", "mohamed"];
// console.log(arr[0]);

// const obj = {
//   breed: "german",
//   averageWeight: 32,
//   activities: ["fetch", "swim", "ababa"],
// };

// console.log(obj.)

const breeds = [
  {
    breed: "German Shepherd",
    averageWeight: 32,
    activities: ["fetch", "swimming"],
  },
  {
    breed: "Dalmatian",
    averageWeight: 24,
    activities: ["running", "fetch", "agility"],
  },
  {
    breed: "Labrador",
    averageWeight: 28,
    activities: ["swimming", "fetch"],
  },
  {
    breed: "Beagle",
    averageWeight: 12,
    activities: ["digging", "fetch"],
  },
  {
    breed: "Husky",
    averageWeight: 26,
    activities: ["running", "agility", "swimming"],
  },
  {
    breed: "Bulldog",
    averageWeight: 36,
    activities: ["sleeping"],
  },
  {
    breed: "Poodle",
    averageWeight: 18,
    activities: ["agility", "fetch"],
  },
];

// console.log(breeds[4]);
const swimActiv = breeds.filter((breed) =>
  breed.activities.includes("sleeping")
);
console.log(swimActiv);

const husckyAvrWghiet = breeds.find((breed) => breed.averageWeight === 18);
console.log(husckyAvrWghiet);

const arr = breeds.flatMap((breed) => breed.activities);

console.log(...new Set(arr));

// console.log([...new Set(arr)]);

// const namesArr = ["abdo", "haya", ["hamza", "elderberry"]];

// console.log(namesArr.flat());

// const humans = ["abdo", "haya", "hamza", "elderberry"];

// console.log([...animals, ...humans]);

const animals = ["dog", "cat", ["elephant", ["tiger", "lion",["deer"]]]];

console.log(animals.flat());
