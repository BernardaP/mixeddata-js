console.log("Sanity Check!");
console.log("---------------------------");
console.log("-------------Q1------------");
console.log("---------------------------");

// Data types
// write which data types you would use to represent the data, 
// and then give a small example of the data structure:

// A light switch that can be either on or off.
// Data type: bolean
let lightSwitch = {
    isOn: true,
}
// console.log(lightSwitch);

// A user's email address.
// Data type: string
let user = {
    email: "anemail.com",
}
// console.log(user);

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Data type: object
let spaceShip = {
    hull: "blue",
    laserTypes: "laser blasters",
    isTractorBeam: true,
    propulsionSystem: "warp drive"
}
// console.log(spaceShip);

// A list of student names from our class.
//Data type: Array
let studentsNames = ["Jim", "Carolina", "Eddy", "Robert", "Ivy"]
// console.log(studentsNames);

// A list of student names from our class, each with a location.
//Data type: array of objects
let studentsLocations = [
   {
    name: "Jim",
    location: "California"  
   },
   {
    name: "Carolina",
    location: "Chicago"    
   }
    //....    
]
// console.log(studentsLocations);

// A list of student names from our class, each with a location and each with a list of favorite tv shows.
let studentsList = [
    {
     name: "Jim",
     location: "California",
     favFood: "Hamburguers",
     favShows: ["Amazing race", "Ozark", "60 minutes"]
    },
    {
     name: "Carolina",
     location: "Chicago", 
     favFood: "Hamburguers",
     favShows: ["The Simpsoms", "Parks & Recs", "Saturday Night Live"]
    }
     //....    
]
// console.log(studentsList);

console.log("---------------------------");
console.log("-------------Q2------------");
console.log("---------------------------");

//1. Make an array that holds all of the colors of the rainbow.
let rainbowColors = [ 
    "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet" 
] 
// console.log(rainbowColors);

// 2. Write code that will access "blue" from the rainbow array.
console.log(rainbowColors[4]);

// 3. Make an object that is called your name and holds the information about your favorite food, 
// a hobby, the name of the town that you live in currently, and your favorite datatype.
 let bernarda = {
    favFood: "Stuff peppers",
    hobby: "reading",
    location: "Aurora",
    favDataType: "Strings"
}
// console.log (bernarda);

// 4. Write code that will access your hobby from the object that you just created.
console.log(bernarda.hobby);

console.log("---------------------------");
console.log("-------------Q3------------");
console.log("---------------------------");

// Cazy Object
const crazyObject = {
    taco: [
      {
        meat: 'steak',
        cheese: ['panela', 'queso', 'chihuahua']
      },
      {
        meat: 'chicken',
        salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
      },
    ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [
        {
          name: "Jeff",
          occupation: "manager"
        },
        {
          name: "funkhauser",
          occupation: "tv dude"
        },
        {
          name: "susie",
          occupation: "jeffs wife",
          favourtieHobby: "Swearing at Larry and Jeff"
        },
      ]
    }
  }

// Use crazyObject to log the following:

//  "omg my mouth is burning" 
console.log(crazyObject.taco[1].salsa[5]);

// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

// The object that contains the name funkhauser
console.log(crazyObject.larry.characters[1].name);

console.log("---------------------------");
console.log("-------------Q4------------");
console.log("---------------------------");

// Object-ception
// With the following object:
const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
}

// Change the value of limbo to null.
// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo)
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo =null)

console.log("---------------------------");
console.log("-------------Q5------------");
console.log("---------------------------");

// Bond Films
const bondFilms = [
    { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
    { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
    { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
    { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
    { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
    { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
    { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
    { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
    { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
    { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
    { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
    { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
    { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
    { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
    { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
    { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
    { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
    { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
    { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
    { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
    { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
    { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
    { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
  ];

// Create a new array called bondTitles with only the titles of the Bond films, and console.log the new array.  

const bondTitles = []

for (let i = 0; i< bondFilms.length; i++){
    if (bondFilms[i].title) {
        bondTitles.push(bondFilms[i].title)
    }
}

console.log(bondTitles);

console.log("---------------------------");
console.log("-------------Q6------------");
console.log("---------------------------");

// 6. Create a new array oddBonds, of only the Bond films released on odd-numbered years.
const oddBonds = [ ]

for (let i = 0; i< bondFilms.length; i++){
    if (bondFilms[i].year % 2 !== 0 ) {
        oddBonds.push(bondFilms[i].title)
    }
}
console.log(oddBonds);

console.log("---------------------------");
console.log("-------------Q6------------");
console.log("---------------------------");

// 7. Determine the total cumulative gross of the Bond franchise, and console.log the result.
// Hint: To make the grosses into usable numbers, look into the .replace Javascript method 
// (there are many ways to do this, however). Look into parseInt() also.

//TEST 
//  Remove the dollar symbol using substring() method before converting the string to numbers
// use replace()method with the global modifier / /g to replace all occurrences of the value
// const grossBond = bondFilms[0].gross.substring(1).replace(/,/g,'');
// console.log(parseInt(grossBond));

const grossBondFilms = []
for (let i = 0; i< bondFilms.length; i++){
    if (bondFilms[i].gross) {
        grossBondFilms.push(parseInt(bondFilms[i].gross.substring(1).replace(/,/g,'')))
    }
}

// create new array for total cummulative gross and use reduce() method 
// reduce() takes two parameters: a function with an accumulator and the initialValue

const totalGross = grossBondFilms.reduce(
    function (total, num) {
        return total + num;
    }, 0
);

console.log("$" + totalGross);




// console.log(1108561008 + 1014941117 + 912257512 + 825110761 + 756544419+ 692713752 + 669789482+ 655872400 + 648514469 + 622246378+ 576277964 + 543639638 + 529548711 + 505899782 + 491617153 + 486468881 + 478946402 + 448249281 + 440759072 + 426244352 + 381088866 + 321172633 + 285157191)

// function totalGross(total, num){
//     return total + num;
// }

// console.log(grossBondFilms.reduce(totalGross, 0));


//
// const numbersGross = grossBondFilms.replace();

// console.log(numbersGross);

