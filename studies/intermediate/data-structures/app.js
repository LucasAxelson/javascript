'use strict';

// DESTRUCTURING ARRAYS

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function(starterIndex, mainIndex) {
      return (this.starterMenu[starterIndex] , this.mainMenu[mainIndex])
  },
}

const arr = [2,3,4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

// const [x, y, z] = arr // Retrieves 3 values from Array.
// console.log(x,y,z) // Output: 2 3 4
// console.log(arr) // Output: (3) [2, 3, 4]

// const [first, second] = restaurant.categories
// console.log(first, second) // Output: Italian Pizzeria
// const [first, , third] = restaurant.categories
// console.log(first, third) // Output: Italian Vegetarian

let [main, , secondary] = restaurant.categories

// Switching variables w/o destructuring
const temp = main
main = secondary
secondary = temp
// console.log(main, secondary)

// Switching variables with destructuring
// [main, secondary] = [secondary, main]
// console.log(main, secondary)

// console.log(restaurant.order(2,1))s
const [starter, mainCourse] = restaurant.order(2,0)
// console.log(starter, mainCourse)

// Nested destructuring
const nested = [2, 4, [5,6]]
// const [i,,j] = nested
// console.log(i,j) // Output: 2, (2) [5,6]
const [i,, [j, k]] = nested
// console.log(i, j, k) // Output: 2 5 6

// Default values
// const [p, q, r] = [8,9]
// console.log(p,q,r) // Output: 8 9 undefined

const [p = 1, q = 1, r = 1] = [8,9]
console.log(p,q,r) // Output: 8 9 undefined

// part of restaurant array
//    openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
